import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";


const meta:Meta<ButtonProps> = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {}
}

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: '',
        disabled: false
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: '',
        disabled: false,
        variant: "secondary"
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: '',
        disabled: false,
        variant: "tertiary"
    }
}

export const VioletPrimary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        disabled: false
    }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        disabled: false,
        variant: "secondary"
    }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        disabled: false,
        variant: "tertiary"
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: '',
        disabled: true
    }
} 

export default meta