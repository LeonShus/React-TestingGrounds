import React, {Dispatch, SetStateAction, useState} from "react";

type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    items: ItemsType[]
    onClick: (e:any) => void
}

export const Accordion : React.FC<AccordionPropsType> = (props) => {
    let [visible, SetVisible] = useState(true)

    return (
        <div>
            <PageTitle visible={visible} setVisible={SetVisible} title={props.title}/>

            {visible && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}




type PageTitlePropsType = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    title:string
}
const PageTitle: React.FC<PageTitlePropsType> = (props) => {
    const onClickHandler = () => {
        props.setVisible(!props.visible)
    }
    return (
        <>
            <h3 onClick={onClickHandler}>{props.title}</h3>
        </>
    )
}


type AccordionBodyType = {
    items: ItemsType[]
    onClick: (e:any) => void
}

const AccordionBody = (props : AccordionBodyType) => {
    const acordLi = props.items.map((el,index) => <li key={index}
                                                      onClick={() => props.onClick(el.value)}>{el.title}</li>)
    return (
        <>
            <ul>
                {acordLi}
            </ul>
        </>
    )
}