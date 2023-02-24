import { ComponentMeta, ComponentStory } from "@storybook/react";

import Paragraph from "./Paragraph";

export default {
  title: "Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Paragraph",
};
