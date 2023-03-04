import { ComponentMeta, ComponentStory } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "UI/Heading",
  component: Heading,
  argTypes: {
    level: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading2 = Template.bind({});

Heading2.args = {
  level: "h2",
  children: "Heading",
};
