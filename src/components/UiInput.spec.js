/* eslint-disable no-undef */
import { html, fixture, expect } from "@open-wc/testing";

import { defineUiInput } from "../../dist/index.esm";
defineUiInput({ isTest: true });

describe("UiInput", () => {
  it('has a label with value of "Veröffentlichungsdatum"', async () => {
    const el = await fixture(
      html` <ui-input label="Veröffentlichungsdatum"></ui-input> `
    );

    expect(el.shadowRoot.querySelector("label")).lightDom.to.equal(
      "Veröffentlichungsdatum"
    );
  });

  it('has a placeholder with value of "Beispiel: Merkel"', async () => {
    const el = await fixture(
      html` <ui-input placeholder="Beispiel: Merkel"></ui-input>`
    );

    expect(
      el.shadowRoot.querySelector("input").getAttribute("placeholder")
    ).to.equal("Beispiel: Merkel");
  });

  it("reflects value attribute as prop", async () => {
    const el = await fixture(html` <ui-input value="foo"></ui-input> `);

    expect(el.value).to.equal("foo");
  });
});
