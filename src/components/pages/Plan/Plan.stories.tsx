import { ComponentMeta, ComponentStory } from "@storybook/react";
import Plan from "./Plan";

export default {
  title: "Pages/Plan",
  component: Plan,
} as ComponentMeta<typeof Plan>;

const Template: ComponentStory<typeof Plan> = (args) => <Plan {...args} />;

export const Default = Template.bind({});
