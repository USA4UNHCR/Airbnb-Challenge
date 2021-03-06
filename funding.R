library(dplyr)
library(stringr)

orgs<-read_csv("Matching Grants Volunteer Agencies.csv")
cities$city<-unique(arrivalsall$Assur_DestinationCity1)
stateabbrevs<-read_csv("stateabbrevs.csv")
stategrants<-read_csv("../Derived_Data/Grants to States.csv")
orgs<-left_join(orgs,stateabbrevs,by=c("STATE"="Abbreviation"))
orgs$city<-paste0(orgs$CITY,", ",orgs$State)
arrivalsall<-read.delim("../Derived_Data/arrival_by_dest.txt")
arrivalsall$year<-as.integer(str_sub(arrivalsall$calendar_year,4,8))
arrivalsall$city<-paste0(arrivalsall$Assur_DestinationCity1,", ",arrivalsall$state)
cityfundings<-cities %>% full_join(orgs,by=c('city',"city"))
cityfundings<-arrivalsall %>% full_join(cityfundings,by=c("year"="FISCAL YEAR",'city'))
cityfundings<-cityfundings %>% group_by(state,city,year) %>% summarise(total=sum(total_per_state_city),orgfunding=sum(`PROJECTED ORR MG FUNDING`,na.rm=TRUE))
cityfundings<-cityfundings[!is.na(cityfundings$state),]
cityfundings %>% filter(year==2012 | year==2013|year==2014) %>% ggplot(aes(total,orgfunding)) + geom_point() +facet_wrap(.~year) +
  xlab("Number of refugees accepted") + ylab("Total funding towards organizations") + ggtitle("Refugees accepted vs organization funding by city")
cityfundings<-cityfundings %>% filter(total>0) %>% mutate(perrefugeecapitafunding=orgfunding/total)
citiesgeocoded<-read_csv("../Derived_Data/geocoded_cities.csv")
cityfundings<-left_join(cityfundings,citiesgeocoded)
cityfundings %>%  filter(year==2012 | year==2013|year==2014) %>% group_by(year) %>% summarise(averagefundingperrefugee=mean(perrefugeecapitafunding)) %>%
  ggplot(aes(year,averagefundingperrefugee))+geom_line()
stategrants %>% full_join()
