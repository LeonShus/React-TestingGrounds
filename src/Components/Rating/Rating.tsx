import React, {Dispatch, SetStateAction, useState} from "react"
import classes from './Rating.module.css'

export const Rating = () => {

    let [stars, SetStars] = useState(0)

    return (
        <div>
            <Stars setStars={SetStars} stars={stars}/>
        </div>
    )
}

type StarsType = {
    setStars: Dispatch<SetStateAction<number>>
    stars: number
}

const Stars: React.FC<StarsType> = (props) => {

    let arr = []

    for (let i = 1; i < 5; i++) {
        arr.push(<span className={`${props.stars >= i && classes.starOn}`}
                       onClick={() => props.setStars(i)}>Star</span>)
    }

    return (
        <>
            {arr}

            <span className={`${props.stars === 5 && classes.starOn}`}
                  onClick={() => props.setStars(5)}>Star</span>
        </>
    )
}