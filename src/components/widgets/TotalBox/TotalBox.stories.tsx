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
Default.args = {};
