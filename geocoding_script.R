#########
# Geocoding script using Google's API
# Make a key for yourself here: https://developers.google.com/maps/documentation/javascript/get-api-key and 
# replace YOUR_KEY with your key
# Author: Winne Luo

#########

#city is a vector of city names, feel free to change it to your string vector of addresses

geocoded<-google_geocode(cities$city[1], key = "YOUR_KEY")
geocoded_cities<-cbind(city=cities$city[1],geocoded$results[[3]][[2]])
for (j in 2:2500) { #Limit at 2500 because that's the number of free queries you get
  geocoded<-google_geocode(cities$city[j], key = "YOUR_KEY")
  if(ncol(geocoded$results[[3]])<4){ 
    geocoded_cities<-rbind(geocoded_cities,cbind(city=cities$city[j],geocoded$results[[3]][[1]]))
  }
  else{
    geocoded_cities<-rbind(geocoded_cities,cbind(city=cities$city[j],geocoded$results[[3]][[2]]))
  }
}