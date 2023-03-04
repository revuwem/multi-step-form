import { ComponentMeta, ComponentStory } from "@storybook/react";
import Addons from "./Addons";

export default {
  title: "Pages/Addons",
  component: Addons,
} as ComponentMeta<typeof Addons>;

const Template: ComponentStory<typeof Addons> = (args) => <Addons {...args} />;

export const Default = Template.bind({});
