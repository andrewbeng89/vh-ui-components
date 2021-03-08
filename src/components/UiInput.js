import { defineComponent, reactive, computed, html } from "vue-hyper";
import { v4 as uuidv4 } from "uuid";
import { styles } from "../utils/styles";

export default (
  { name = "ui-input" } = {
    name: "ui-input",
  }
) => {
  defineComponent({
    name,

    setup: ({ props, refs, ctx }) => {
      const state = reactive({
        isFocused: false,
        id: `id-${uuidv4()}`,
      });

      const updateValue = ({ target }) => {
        ctx.value = target.value;
      };

      const handleFocus = () => {
        state.isFocused = true;
      };

      const handleBlur = () => {
        state.isFocused = false;
      };

      const handleKeyup = ({ code }) => {
        if (code === "Escape") {
          refs.input?.blur();
        }
      };

      const isFilled = computed(() => !!props.value);

      const labelClassNames = computed(() => {
        const baseClasses =
          "ce-absolute ce-px-1 ce-font-normal ce-transition-all ce-duration-150 ce-origin-left ce-transform ce-pointer-events-none ce-select-none ce-left-3";
        let result = "";

        if (state.isFocused || isFilled.value) {
          result = "ce--translate-y-1/2 ce-bg-white ce-text-xs";

          if (state.isFocused) {
            result += " ce-text-blue";
          }

          if (isFilled.value) {
            result += " ce-text-gray-500";
          }
        } else if (props.placeholder) {
          result =
            "ce--translate-y-1/2 ce-bg-white ce-text-xs ce-text-gray-700";
        } else {
          result = "ce-text-gray-500 ce-translate-y-4 ce-text-sm";
        }

        return `${baseClasses} ${result}`;
      });

      const inputClasses = computed(() => {
        const baseClasses =
          "ce-block ce-w-full ce-text-gray-900 ce-placeholder-gray-400 ce-transition ce-duration-150 ce-rounded-none ce-outline-none ce-h-14 ce-hover:border-blue";

        const focusStateClasses = state.isFocused
          ? "ce-border-2 ce-border-blue ce-p-inputFocused"
          : "ce-border ce-p-4";

        return `${baseClasses} ${focusStateClasses}`;
      });

      return () => html`
        ${styles()}
        <style>
          html {
            font-size: initial;
          }

          .ce-p-inputFocused {
            padding: 16px 15px;
          }
        </style>
        <div class="ce-relative">
          <label class=${labelClassNames.value} for=${state.id}
            >${props.label}</label
          >
          <input
            id=${state.id}
            value=${props.value || (props.value = "")}
            readonly=${props.readonly}
            oninput=${updateValue}
            onfocus=${handleFocus}
            onblur=${handleBlur}
            onkeyup=${handleKeyup}
            class=${inputClasses.value}
            type=${props.type || "text"}
            autocomplete=${props.autocomplete}
            placeholder=${props.placeholder}
            ref=${(node) => (refs.input = node)}
          />
        </div>
      `;
    },

    propDefs: [
      "type",
      "value",
      "label",
      "placeholder",
      "autofocus",
      "readonly",
      "autocomplete",
    ],

    useShadowDOM: false,
  });
};
