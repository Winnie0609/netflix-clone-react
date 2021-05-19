import React from "react"
import { Jumbotron } from "../components"
import jumboData from "../fixtures/jumbo.json"

function JumbotronContainer(){
    return(
        <Jumbotron.Container>
           {jumboData.map((item) => (
            // 會使用 index.js 中的 Jumbotron function 作為模板，title/subtitle這類的會變成children
               <Jumbotron key={item.id} direction={item.direction}>
                   <Jumbotron.Pane>
                        <Jumbotron.Title >{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                   </Jumbotron.Pane>

                   <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.name}></Jumbotron.Image>
                   </Jumbotron.Pane>
               </Jumbotron>
           ))}
        </Jumbotron.Container>
    )
}

export { JumbotronContainer } 