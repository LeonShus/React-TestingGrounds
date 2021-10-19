import React from "react";

type TytleType = {
    title:string
}

export const Accordion = (props: TytleType) => {
    return (
        <div>
            <PageTitle title={props.title}/>
            <PageTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}



const PageTitle = (props: TytleType) => {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}
const AccordionBody = () => {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}