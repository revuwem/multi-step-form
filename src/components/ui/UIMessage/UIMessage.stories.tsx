import { ComponentMeta, ComponentStory } from "@storybook/react";
import UIMessage from "./UIMessage";

export default {
  title: "UI/UIMessage",
  component: UIMessage,
} as ComponentMeta<typeof UIMessage>;

const Template: ComponentStory<typeof UIMessage> = (args) => (
  <UIMessage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Thank you!",
  message: `Thanks for confirming your subscription! We hope you have
  fun using our platform. If you ever need support, please feel
  free to email us at support@loremgaming.com.`,
  iconSrc: "/assets/images/icon-thank-you.svg",
};
