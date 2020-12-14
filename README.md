# Example


We have the following `index.html`

```html
<script src="./main.ts"></script>

<app-component></app-component>
```

Lets check our `main.ts` file

Here we import our starter module called `AppModule`

```ts
import '@abraham/reflection';

import { Bootstrap } from '@rhtml/di';
import { AppModule } from './app/app.module';

Bootstrap(AppModule);

```

Our `app.module.ts`
```ts
import { Module } from "@rhtml/di";
import { SharedModule } from "@shared/shared.module";
import { AppComponent } from './app.component';

@Module({
  imports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```