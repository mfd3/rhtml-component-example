import {
  Component,
  Providers,
  Render,
  Settings,
  State,
} from "@rhtml/component";

import { html, LitElement } from "@rxdi/lit-html";

@Component([
  Settings({
    selector: "app-component",
  }),
  Providers([]),
  State(() => ({})),
  Render(() => () =>
    html`<counter-component .counter=${1000}></counter-component>`
  ),
])
export class AppComponent extends LitElement {}
