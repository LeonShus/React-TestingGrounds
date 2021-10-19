import React, {useState} from "react"
import classes from "./OnOff.module.css"

type SwType = boolean

export const OnOff = () => {

    let [sw, SetSw] = useState<SwType>(true)

    let changeSw = (action: SwType) => {
        SetSw(action)
    }

    return (
        <div>
            <button className={classes.on} onClick={() => changeSw(true)}>On</button>
            <button className={classes.off} onClick={() => changeSw(false)}>Off</button>
            <span className={`${classes.circle} ${sw ? classes.on : classes.off}`}></span>
        </div>
    )
}