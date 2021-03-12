import { html } from "lit-html";
import { defineUiDialog } from "../../dev/index.esm";

defineUiDialog();

const Template = () =>
  html`<ui-dialog>
    <span slot="header">Dialog Header</span>
    Dialog content
    <span slot="footer">Dialog footer</span>
  </ui-dialog>`;

export default {
  title: "Components/UiDialog",
};

export const Default = Template.bind({});

Default.args = {};
