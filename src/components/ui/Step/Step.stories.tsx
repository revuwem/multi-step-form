import { ComponentMeta, ComponentStory } from "@storybook/react";

import Step from "./Step";

export default {
  title: "Step",
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = (args) => (
  <div className="bg-purplish-blue p-3">
    <Step {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  number: "1",
  label: "Your info",
};

export const Active = Template.bind({});
Active.args = {
  number: "1",
  label: "Your info",
  active: true,
};
