/* eslint-disable no-undef */
import { html, fixture, expect, elementUpdated } from "@open-wc/testing";

import { defineUiCheckBox } from "../../dist/index.esm";
defineUiCheckBox({ isTest: true });

describe("UiCheckBox", () => {
  it("has a default checked value which is falsy", async () => {
    const el = await fixture(html` <ui-check-box></ui-check-box> `);

    expect(el.checked).to.not.be.ok;
  });

  it("has a checked of true when the 'checked' attribute is passed", async () => {
    const el = await fixture(html` <ui-check-box checked></ui-check-box> `);

    expect(el.checked).to.equal(true);
  });

  it("has checked value after click", async () => {
    const el = await fixture(html` <ui-check-box>Checkbox</ui-check-box> `);

    expect(el.checked).to.not.be.ok;

    el.shadowRoot.querySelector("input").click();

    await elementUpdated(el);

    expect(el.checked).to.be.ok;

    await expect(el).to.be.accessible();
  });
});
