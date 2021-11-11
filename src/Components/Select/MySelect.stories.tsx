import {Story} from "@storybook/react"
import React, {useState} from "react";
import {MySelect, SelectPropsType} from "./MySelect";

export default {
    title: "Select stories",
    component: MySelect
}


const Template: Story<SelectPropsType> = (args) => {

    const [value, setValue] = useState(1)

    const changeVal = (e: number) => {
        setValue(e)
    }

    return (
        <MySelect {...args}
                  value={value}
                  changeVal={changeVal}/>
    )
}
export const Select_1 = Template.bind({})
Select_1.args = {
    items: [
        {title: "Moscow", value: 1},
        {title: "Minsk", value: 2},
        {title: "Odessa", value: 3},
        {title: "NY", value: 4}
    ],
}

