import { ComponentMeta, ComponentStory } from "@storybook/react";
import PeriodSwitch from "./PeriodSwitch";

export default {
  title: "Features/PeriodSwitch",
  component: PeriodSwitch,
} as ComponentMeta<typeof PeriodSwitch>;

const Template: ComponentStory<typeof PeriodSwitch> = (args) => (
  <PeriodSwitch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
