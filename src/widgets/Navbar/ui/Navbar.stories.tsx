import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Theme } from "app/providers/ThemeProviders";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Navbar } from "./Navbar";

export default {
  title: "widget/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
