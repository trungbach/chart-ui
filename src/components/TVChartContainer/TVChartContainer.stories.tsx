import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TVChartContainer from "./TVChartContainer";

const meta: Meta<typeof TVChartContainer> = {
  component: TVChartContainer,
  title: "Trungbach/Tradingview",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TVChartContainer>;

export const Primary: Story = (args) => <TVChartContainer data-test-id="InputField-id" {...args} />;
Primary.args = {
  theme: "light",
  currentPair: {
    symbol: "ORAI/USDT",
    info: "orai-orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh",
  },
};
