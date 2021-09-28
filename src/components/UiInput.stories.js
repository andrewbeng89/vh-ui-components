import { html } from "lit-html";
import { defineUiInput } from "../../dev/index.esm";

defineUiInput();

const Template = ({ type, label, value }) =>
  html`<ui-input .type=${type} .label=${label} .value=${value}></ui-input>`;

export default {
  title: "Components/UiInput",
};

export const Default = Template.bind({});

Default.args = {
  type: "text",
  label: "Label",
  value: "",
};
