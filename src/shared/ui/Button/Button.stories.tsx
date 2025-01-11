import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProviders";
import React from "react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Button, ButtonSize, ButtonTheme } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
};
Square.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareL = Template.bind({});
SquareL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
