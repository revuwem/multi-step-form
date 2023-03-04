import { ComponentMeta, ComponentStory } from "@storybook/react";
import Confirm from "./Confirm";

export default {
  title: "Pages/Confirm",
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
