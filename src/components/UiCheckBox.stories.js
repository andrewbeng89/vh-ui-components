import { html } from "lit-html";
import { defineUiCheckBox } from "../../dev/index.esm";

defineUiCheckBox();

export default {
  title: "Components/UiCheckBox",
};

const Template = () => html`<ui-check-box></ui-check-box>`;

export const Default = Template.bind({});
