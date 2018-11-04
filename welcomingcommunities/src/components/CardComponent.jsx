import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardComponent = (props) => (
  <Card>
    {/* ArtImage: "https://i.pinimg.com/564x/00/fa/9a/00fa9ad928ee68e85bd0982479bd7929.jpg"
Country: "Iraq"
Description: "Iraq is a middle eastern country bordering Turkey, Iran, Kuwait, Saudi Arabia, Jordan and Syria. The land of ancient Iraq was part of Mesopotomia and is considered to be the birthplace of advanced civilisation. The modern capital, Baghdad, was the cultural and economic epicentre of the Islamic world for centuries. However, the legacies of Iraq have been overshadowed by the international and civil conflicts that have overwhelmed the nation for the past few decades. The political turbulence has set the country back massively and is likely to continue to do so. Iraqis commiserate about this. However, despite dire situations, the Iraqi people take a lot of pride in their nation and may consider themselves special to have such a rich and prestigious history. Broadly, Iraqis show solidarity for their country at national events and celebrate their sovereignty."
FoodDescription: "Tea ceremony of Iraqis. ↵Usually tea ceremony happens when you visit any Iraqi house as sort of refreshment. "
FoodImage: "https://i.pinimg.com/564x/a6/da/69/a6da6946f22bb2f84a3cef71677aff05.jpg"
Music: */}
    <Card.Content>
      <Card.Header>{props.FoodDescription}</Card.Header>
          <Image src={props.ArtImage} />
      <Card.Meta>
      </Card.Meta>
      <Card.Description>{props.Description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>
)

export default CardComponent
