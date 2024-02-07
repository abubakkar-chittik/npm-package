import React from "react";
import { Button } from "./Button";

/* import {
  XMarkIcon,
  EllipsisHorizontalIcon,
  SelectorIcon,
} from "@heroicons/react/24/solid";
import hidepaswordIcon from "../assets/image/hidepassword.svg";
import showPasswordIcon from "../assets/image/showpassword.svg";
import SubMenuDotIcon from "../assets/icons/SubMenuDotIcon";
import DownloadIcon from "../assets/image/download.svg"; */
import { userEvent, within } from "@storybook/testing-library";
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';
//import { wait } from "@testing-library/user-event/dist/utils";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withTests({ results:results })],
  tags: ["autodocs", "test-only"],
  parameters: {
    //actions: { argTypesRegex: "^on.*" },
    jest: ['Button.test.js']
  },
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const PlayTestCases = async (canvasElement, buttonElement) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(buttonElement, {
    selector: "button",
  });
 
  await userEvent.hover(button);
  await sleep(2000);
  await userEvent.unhover(button);
  await sleep(2000);
  await userEvent.pointer(button);
  await sleep(2000);
  await userEvent.tab(button);
  await sleep(2000);
  /* await userEvent.click(button);
  await sleep(2000);
  await userEvent.dblClick(button);
  await sleep(2000);
  await userEvent.tripleClick(button); */
  
};

export const Primary = {
  args: {
    label: "Primary",
    backgroundColor: "bg-red-600",
    textColor: "text-base",
    width: "w-full",
    hoverBg: "hover:bg-manhattan700",
    disabled: false,
  },
 // decorators: [withTests({ results })],
  play: async ({ canvasElement }) => {
    PlayTestCases(canvasElement, "Primary");
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
    backgroundColor: "bg-oracle600",
    textColor: "text-base",
    width: "w-full",
    hoverBg: "hover:bg-red-700",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    PlayTestCases(canvasElement, "Secondary");
  },
};

export const Tertiary = {
  args: {
    label: "Tertiary",
    backgroundColor: "bg-manhattan700",
    textColor: "text-base",
    width: "w-full",
    hoverBg: "hover:bg-red-700",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    PlayTestCases(canvasElement, "Tertiary");
  },
};
