import React, {Dispatch, SetStateAction, useState} from "react";

type AccordionPropsType = {
    title: string
}

export const Accordion : React.FC<AccordionPropsType> = (props) => {
    let [visible, SetVisible] = useState(true)

    if(!visible){
        return <PageTitle visible={visible} setVisible={SetVisible} title={props.title}/>
    }
    return (
        <div>
            <PageTitle visible={visible} setVisible={SetVisible} title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

type PageTitlePropsType = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    title:string
}

const PageTitle: React.FC<PageTitlePropsType> = (props) => {
    return (
        <>
            <h3 onClick={() => props.setVisible(!props.visible)}>{props.title}</h3>
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