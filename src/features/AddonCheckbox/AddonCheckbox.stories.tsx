import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddonCheckbox from "./AddonCheckbox";

export default {
  title: "Features/AddonCheckbox",
  component: AddonCheckbox,
} as ComponentMeta<typeof AddonCheckbox>;

const Template: ComponentStory<typeof AddonCheckbox> = (args) => (
  <AddonCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  checked: false,
  content: {
    name: "Online service",
    description: "Access to multiplayer games",
    price: 10,
    period: "mo",
  },
};
