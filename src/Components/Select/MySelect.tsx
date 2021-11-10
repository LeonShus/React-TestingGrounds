import React, {useState} from "react";
import {FormControl, InputLabel, NativeSelect, SelectChangeEvent} from "@mui/material"

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    change: (value: any) => void
    items: ItemType[]
}

export const MySelect = (props: SelectPropsType) => {
    const [city, setCity] = useState("")

    const handleChange = (e: SelectChangeEvent<string>) => {
        setCity(e.target.value)
    }

    return (
        <div>
            <div>{props.value}</div>
            {props.items.map(el => <div>{el.title}</div>)}


            <FormControl size={"small"}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <NativeSelect
                    defaultValue={4}
                    inputProps={{
                        name: 'City',
                        id: 'uncontrolled-native',
                    }}
                    onChange={props.change}
                >
                    {props.items.map(el => <option key={el.value} value={el.value}>{el.title}</option>)}
                </NativeSelect>
            </FormControl>

        </div>

    )
}