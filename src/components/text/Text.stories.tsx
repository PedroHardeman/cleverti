import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  fontSize: "small",
  label: "Text",
  color: "mineShaft",
};

export const Medium = Template.bind({});
Medium.args = {
  fontSize: "medium",
  label: "Text",
  color: "mineShaft",
};

export const Large = Template.bind({});
Large.args = {
  fontSize: "large",
  label: "Text",
  color: "mineShaft",
};

export const Flamingo = Template.bind({});
Flamingo.args = {
  fontSize: "large",
  label: "Text",
  color: "flamingo",
};

export const MineShaft = Template.bind({});
MineShaft.args = {
  fontSize: "large",
  label: "Text",
  color: "mineShaft",
};

export const HavelockBlue = Template.bind({});
HavelockBlue.args = {
  fontSize: "large",
  label: "Text",
  color: "havelockBlue",
};