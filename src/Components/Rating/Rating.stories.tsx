import React from "react"
import { action } from "@storybook/addon-actions"
import {Rating} from "./Rating";

export default {
    title : 'Rating stories',
    component: Rating
}

export const EmptyStars = () => <Rating />