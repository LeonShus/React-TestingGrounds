import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react"
import React from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: Accordion
}

const onClickAction = action("some item clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
export const AccordionS2 = Template.bind({})
AccordionS2.args = {
    title: "Test",
    items: [{title: "11", value: "1"},
        {title: "11", value: "2"},
        {title: "11", value: "3"}],
    onClick: onClickAction
}


export const AccordionS = () => <Accordion title={"Stories"}
                                           items={[{title: "11", value: "1"},
                                               {title: "11", value: "2"},
                                               {title: "11", value: "3"}]}
                                           onClick={onClickAction}/>
export const AccordionS3 = () => <Accordion title={"bob"}
                                            items={[{title: "11", value: "3"},
                                                {title: "11", value: "2"},
                                                {title: "11", value: "5"}]}
                                            onClick={onClickAction}/>