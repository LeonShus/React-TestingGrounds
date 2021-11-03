import { action } from "@storybook/addon-actions"
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";



export default {
    title : 'Accordion stories',
    component: Accordion
}



const Template: Story<AccordionPropsType> = (args) =>  <Accordion {...args}/>
export const AccordionS2 = Template.bind({})
AccordionS2.args = {
    title: 'Test'
}



export const AccordionS = () => <Accordion title={'Stories'}/>