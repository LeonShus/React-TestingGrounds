import {Story} from "@storybook/react"
import React from "react";
import {action} from "@storybook/addon-actions";
import {MySelect, SelectPropsType} from "./MySelect";

export default {
    title: "Select stories",
    component: MySelect
}

const onChangeAction = action('Any')

const Template: Story<SelectPropsType> = (args) => <MySelect {...args} />
export const Select_1 = Template.bind({})
Select_1.args = {
    value: 'City',
    change:onChangeAction,
    items: [{title: "Moscow", value: "1"},
        {title: "Minsk", value: "2"},
        {title: "Odessa", value: "3"},
        {title: "NY", value: "4"}],
}