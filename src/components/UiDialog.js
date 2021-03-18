import { defineComponent, html } from "vue-uhtml";
import { styles } from "../utils/styles";

export default (
  { name = "ui-dialog" } = {
    name: "ui-dialog",
  }
) => {
  defineComponent({
    name,

    setup: ({ slots, emit }) => {
      return () => html`
        ${styles()}
        <div class="ce-fixed ce-inset-0 ce-z-50" role="dialog">
          <div
            class="ce-fixed ce-inset-0 ce-bg-black ce-opacity-60"
            data-test="background"
            onclick=${() => emit(new Event("close"))}
          ></div>
          <div
            class="ce-container ce-fixed ce-bg-white ce-shadow-lg"
            style="left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 600px; width: calc(100% - 2rem);"
          >
            ${slots.header
              ? html`
                  <header
                    class="ce-flex ce-itemsce-nter ce-justify-between ce-h-12 ce-py-3 ce-pl-4 ce-pr-2 ce-bg-gray-100 ce-lg:h-14 ce-lg:pr-3 ce-lg:pl-6 ce-lg:py-4"
                  >
                    <slot name="header"></slot>
                  </header>
                `
              : ""}
            <main class="ce-px-4 ce-pt-6 ce-pb-3 ce-lg:px-6">
              <slot></slot>
            </main>
            ${slots.footer
              ? html`
                  <footer
                    class="ce-flex ce-justify-between ce-px-4 ce-py-6 ce-lg:px-6"
                  >
                    <slot name="footer"></slot>
                  </footer>
                `
              : ""}
          </div>
        </div>
      `;
    },
  });
};
