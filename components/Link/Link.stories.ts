import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "./Link";


const meta:Meta<LinkProps> = {
    title: 'Molecules/Link',
    component: Link,
    argTypes: {
        children: {
            type: 'string',
        },
        className: {
            type: 'string'
        }, 
        href: {
            type: 'string' 
        },
        disabled: {
            type: 'boolean'
        }
    }
}

export default meta

export const Primary: StoryObj<LinkProps> = {
    args: {
        children: 'Link',
        href: "#Primary",
        disabled:   false
    }
}

export const Disabled: StoryObj<LinkProps> = {
    args: {
        children: 'Link',
        href: "#Disabled",
        disabled:   true
    }
}

export const VioletPrimary: StoryObj<LinkProps> = {
    args: {
        children: 'Link',
        href: "#Violet",
        className: 'theme-violet',
        disabled:   false
    }
}