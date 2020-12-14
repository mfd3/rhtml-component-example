import {
  Component,
  Providers,
  Render,
  Settings,
  State,
  DefineDependencies,
} from "@rhtml/component";
import { get, has } from "@rhtml/di";

import { html, LitElement, property } from "@rxdi/lit-html";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { CounterService } from './counter.service';

const Dependencies = DefineDependencies(CounterService)({ get, has });

/**
 * @customElement counter-component
 */
@Component<{ counter: number }, typeof Dependencies, CounterComponent>([
  Settings({
    selector: "counter-component",
  }),
  Providers(Dependencies),
  State(function (this, [counterService]) {
    debugger;
    return interval(1000).pipe(
      map((value) => ({ counter: this.counter + counterService.count + value }))
    );
  }),
  Render(
    () =>
      function (this, { counter }) {
        return html` ${counter} `;
      }
  ),
])
export class CounterComponent extends LitElement {
  @property({ type: Number })
  counter: number;
}
