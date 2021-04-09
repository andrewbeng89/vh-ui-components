/* eslint-disable no-undef */
import { html, fixture, expect } from "@open-wc/testing";

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
});
