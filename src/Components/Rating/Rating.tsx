import React from "react"

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


export const Rating = (props:RatingType) => {

    let arr =[]

    for(let i = 0; i < props.value; i++){
        arr.push(<Stars selected={true}/>)
    }
    for(let i = 0; i < 5 - props.value; i++){
        arr.push(<Stars selected={false}/>)
    }

    return (
        <div>
            {arr}
        </div>
    )
}

type StarsType = {
    selected: boolean
}

const Stars = (props: StarsType) : any => {

    if (props.selected ) {
        return (<span><b>star </b></span>)
    }
    if (!props.selected) {
        return (<span>star </span>)
    }
}