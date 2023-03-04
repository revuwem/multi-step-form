import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";

export default {
  title: "UI/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Label",
};
