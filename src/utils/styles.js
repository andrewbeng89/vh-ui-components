import { html } from "vue-uhtml";
import rawStyles from "../main.css";

export const styles = () => html`
  <style>
    ${`${rawStyles}`}
  </style>
`;
