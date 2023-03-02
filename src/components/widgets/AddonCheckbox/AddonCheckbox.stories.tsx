import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddonCheckbox from "./AddonCheckbox";

export default {
  title: "Widgets/AddonCheckbox",
  component: AddonCheckbox,
} as ComponentMeta<typeof AddonCheckbox>;

const Template: ComponentStory<typeof AddonCheckbox> = (args) => (
  <AddonCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  name: "addon",
  checked: false,
  content: {
    title: "Online service",
    label: "Access to multiplayer games",
    price: "+$10/yr",
  },
};
