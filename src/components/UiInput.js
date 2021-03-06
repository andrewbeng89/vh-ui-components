import { defineComponent, reactive, computed, html } from "vue-uhtml";
import { v4 as uuidv4 } from "uuid";
import { styles } from "../utils/styles";

export default (
  { name = "ui-input", isTest = false } = {
    name: "ui-input",
    isTest: false,
  }
) => {
  defineComponent({
    name,

    setup: ({ props, refs, ctx }) => {
      const state = reactive({
        isFocused: false,
        id: `id-${uuidv4()}`,
      });

      const isFilled = computed(() => !!props.value);

      const labelClassNames = computed(() => {
        const baseClasses =
          "ce-absolute ce-px-1 ce-font-normal ce-transition-all ce-duration-150 ce-origin-left ce-transform ce-pointer-events-none ce-select-none ce-left-3";
        let result = "";

        if (state.isFocused || isFilled.value) {
          result = "ce--translate-y-1/2 ce-bg-white ce-text-xs";

          if (state.isFocused) {
            result += " ce-text-blue-default";
          }

          if (isFilled.value) {
            result += " ce-text-gray-500";
          }
        } else if (props.placeholder) {
          result =
            "ce--translate-y-1/2 ce-bg-white ce-text-xs ce-text-gray-700";
        } else {
          result = "ce-text-gray-500 ce-translate-y-4 ce-text-sm ce-leading-6";
        }

        return `${baseClasses} ${result}`;
      });

      const inputClasses = computed(() => {
        const baseClasses =
          "ce-block ce-w-full ce-text-gray-900 ce-placeholder-gray-400 ce-transition ce-duration-150 ce-rounded-none ce-outline-none ce-h-14 hover:ce-border-blue-default";

        const focusStateClasses = state.isFocused
          ? "ce-border-2 ce-border-blue-default ce-p-inputFocused"
          : "ce-border ce-p-4";

        return `${baseClasses} ${focusStateClasses}`;
      });

      return () => html`
        ${styles()}
        <style>
          ${`.ce-p-inputFocused {
            padding: 16px 15px;
          }`}
        </style>
        <div class="ce-relative">
          <label class=${labelClassNames.value} for=${state.id}
            >${props.label}</label
          >
          <input
            id=${state.id}
            value=${props.value || (props.value = "")}
            readonly=${props.readonly}
            oninput=${({ target }) => (ctx.value = target.value)}
            onfocus=${() => (state.isFocused = true)}
            onblur=${() => (state.isFocused = false)}
            onkeyup=${({ code }) => code === "Escape" && refs.input?.blur()}
            class=${inputClasses.value}
            type=${props.type || "text"}
            autocomplete=${props.autocomplete}
            placeholder=${props.placeholder}
            ref=${(node) => (refs.input = node)}
          />
        </div>
      `;
    },

    props: {
      value: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
      placeholder: {
        type: String,
        default: "",
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
      chevron: {
        default: false,
      },
      readonly: {
        default: false,
      },
      autocomplete: {
        default: "on",
      },
    },

    shadowMode: isTest ? "open" : "closed",
  });
};
