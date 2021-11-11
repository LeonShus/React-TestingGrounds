import React, {KeyboardEvent, useEffect, useState} from "react"
import classes from "./MySelector.module.css"

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: ItemType[]
    changeVal: (e: number) => void
}

export const MySelect = (props: SelectPropsType) => {
    //Item
    const [hovered, setHovered] = useState(props.value)

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)

    //List Visible
    const [visible, setVisible] = useState<boolean>(false)

    const visibleClickHandler = () => {
        setVisible(!visible)
    }

    //List open with key press
    const openWithEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'Escape') {
            setVisible(false)
        }
        if(e.key === "Enter"){
            visibleClickHandler()
            props.changeVal(hovered)
        }
        if(e.key === 'ArrowUp' && hovered > 1){
            setHovered(hovered - 1)
        }
        if(e.key === 'ArrowDown' && hovered < props.items.length){
            setHovered(hovered + 1)
        }
    }

    //Arr of List
    const listArr = props.items.map(el => {

        const onClickHandler = () => {
            props.changeVal(el.value)
            visibleClickHandler()
        }
        const mouseMoveHandler = () => {
            setHovered(el.value)
        }
        return (
            <div key={el.value}
                 className={`${hovered === el.value ? classes.targetList : ""}`}
                 onClick={onClickHandler}
                 onMouseMove={mouseMoveHandler}>
                {el.title}
            </div>
        )
    })

    return (
        <div className={classes.container}>

            {/*Title*/}
            <div className={classes.containerTitle}
                 onClick={visibleClickHandler}
                 onKeyUp={openWithEnter}
                 tabIndex={1}>
                {selectedItem && selectedItem.title}
            </div>

            {/*List*/}
            {visible &&
            <div className={classes.containerLIst}>
                {listArr}
            </div>}
        </div>

    )
}