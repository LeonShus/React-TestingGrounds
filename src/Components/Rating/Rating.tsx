import React, {Dispatch, SetStateAction, useState} from "react"
import classes from './Rating.module.css'

type StarType = 0 | 1 | 2 | 3 | 4 | 5

export const Rating = () => {

    let [stars, SetStars] = useState<StarType>(0)

    return (
        <div>
            <Stars setStars={SetStars} stars={stars}/>
        </div>
    )
}

type StarsType = {
    setStars: Dispatch<SetStateAction<StarType>>
    stars: number
}

const Stars: React.FC<StarsType> = (props) => {

    let arr = []

    for (let i : StarType = 1; i < 5; i++) {
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