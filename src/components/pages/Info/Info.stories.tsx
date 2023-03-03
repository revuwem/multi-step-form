import { ComponentMeta, ComponentStory } from "@storybook/react";
import Info from "./Info";

export default {
  title: "Pages/Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
