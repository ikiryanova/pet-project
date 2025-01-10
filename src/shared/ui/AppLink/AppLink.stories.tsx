import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Theme } from "app/providers/ThemeProviders";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
    children: "Text",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
};
export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
