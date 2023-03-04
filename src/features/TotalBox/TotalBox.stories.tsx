import { ComponentStory, ComponentMeta } from "@storybook/react";

import TotalBox from "./TotalBox";

export default {
  title: "Widgets/TotalBox",
  component: TotalBox,
} as ComponentMeta<typeof TotalBox>;

const Template: ComponentStory<typeof TotalBox> = (args) => (
  <TotalBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  period: "year",
  plan: {
    name: "Arcade",
    price: "$90/yr",
  },
  addons: [
    {
      name: "Online service",
      price: "+$10/yr",
    },
    {
      name: "Larger storage",
      price: "+$20/yr",
    },
  ],
  total: "$120/yr",
};
