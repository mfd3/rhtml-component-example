import {
  Component,
  Providers,
  Render,
  Settings,
  State,
  DefineDependencies,
} from "@rhtml/component";
import { get, has, Inject, Reader } from "@rhtml/di";

import { html, LitElement, property } from "@rxdi/lit-html";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { CounterService } from "./counter.service";

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
    return interval(1000).pipe(
      map((value) => ({ counter: this.counter + counterService.count + value }))
    );
  }),
  Render(
    ([counterService]) =>
      function (this, { counter }) {
        return html`
          <strong>${counter} </strong>
          <p>
            <button @click=${() => this.printServiceValue()()}>
              Print service value
            </button>
          </p>
          <p>
            <button @click=${() => console.log(counterService.count)}>
              Print service without reader pattern
            </button>
          </p>
          <p>
            <button @click=${() => console.log(counter)}>
              Print state value
            </button>
          </p>
        `;
      }
  ),
])
export class CounterComponent extends LitElement {
  @property({ type: Number })
  counter: number;
  /* 
  // Dependencies can be injected also with @Inject decorator
  @Inject(CounterService)
  private counterService: CounterService
 */

  /* OnDestroy hook is called when component is added to DOM tree */
  OnInit() {}

  /* OnDestroy hook is called when component is removed from DOM tree */
  OnDestroy() {}

  @Reader(CounterService)
  printServiceValue(): Reader<typeof Dependencies, void> {
    return ([counterService]) => console.log(counterService.count);
  }
}
