import { defineComponent, html } from "vue-hyper";
import { styles } from "../utils/styles";
import checkBoxCss from "./UiCheckBox.css";

const checkBoxStyles = () => html`
  <style>
    ${`${checkBoxCss}`}
  </style>
`;

export default (
  { name = "ui-check-box" } = {
    name: "ui-check-box",
  }
) => {
  defineComponent({
    name,

    setup: ({ props, ctx }) => {
      return () => html`
        ${styles()} ${checkBoxStyles()}
        <label
          class=${`ce-flex ce-self-center ce-text-small ${
            props.disabled
              ? "ce-text-gray-400 ce-cursor-default"
              : "ce-text-gray-900 ce-cursor-pointer"
          }`}
        >
          <input
            class=${`ce-relative ce-self-center ce-w-0 ce-h-0 ce-appearance-none focus:ce-outline-none ${
              props.disabled ? "ce-cursor-default" : "ce-cursor-pointer"
            }`}
            type="checkbox"
            checked=${props.checked}
            disabled=${props.disabled}
            onchange=${({ target }) => (ctx.checked = target.checked)}
          />
          <span class="ce-relative ce-flex ce-items-center">
            <slot></slot>
          </span>
        </label>
      `;
    },

    propDefs: ["disabled", "checked"],
  });
};
