import { Meta, StoryObj } from "@storybook/react";

import { Divider, type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<DividerProps> = {
  args: {},
};

export const ThicknessDivider: StoryObj<DividerProps> = {
  args: {
    height: "h-[5px]",
  },
};

export const DividerDark: StoryObj<DividerProps> = {
  args: {
    bgColor: "dark",
    height: "h-1",
  },
};

export const DividerWithChildren: StoryObj<DividerProps> = {
  args: {
    children: "Olá mundo",
  },
};
