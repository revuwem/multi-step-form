import { ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Heading2 = () => <Heading level="h2">Heading 2</Heading>;
