import { Meta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "./Input";


const meta:Meta<InputProps> = {
    title: 'Molecules/Input',
    component: Input,
    argTypes: {}
}

export const Primary: StoryObj<InputProps> = {
    args: {
        value: 'input'
    }
}

export const Multiline: StoryObj<InputProps> = {
    args: {
        value: 'input',
        multiline: true,
    }
}

export const PrimaryDisabled: StoryObj<InputProps> = {
    args: {
        value: 'input',
        disabled: true,
    }
}

export const MultilineDisabled: StoryObj<InputProps> = {
    args: {
        value: 'input',
        multiline: true,
        disabled: true,
    }
}


export const PrimaryLabel: StoryObj<InputProps> = {
    args: {
        label: 'label',
        value: 'input'
    }
}

export const MultilineLabel: StoryObj<InputProps> = {
    args: {
        label: 'label',
        value: 'input',
        multiline: true,
    }
}

export const PrimaryDisabledLabel: StoryObj<InputProps> = {
    args: {
        label: 'label',
        value: 'input',
        disabled: true,
    }
}

export const MultilineDisabledLabel: StoryObj<InputProps> = {
    args: {
        label: 'label',
        value: 'input',
        multiline: true,
        disabled: true,
    }
}

export default meta