# UI Components in vue-hyper

## Development
```sh
# served on http://localhost:10001
yarn dev
```

### Demo
`./src/index.html`

## Installation
```sh
# terminal
$ yarn add ssh://git@source.factorial.io:2222/dpa/vh-ui-components.git
```

### With Vue.js
- `main.(js|ts)`
```js
import { defineUiInput } from "vh-ui-components";

// define the custom-element
// With default name "ui-input"
defineUiInput();

// With custom name to prevent conflicts
defineUiInput({
  name: "my-ui-input"
});
```

- App.vue
```html
<template>
  <div>
    // ... other app template definition

    <my-ui-input
      label="Sharable UI"
      :value="myInputValue"
      @input="({ target }) => (myInputValue = target.value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInputValue: ""
    };
  }
};
</script>
```

### With Angular
- `main.ts`
```js
import { defineUiInput } from "vh-ui-components";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// In the app boostrap function, or Meteor.startup
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // ...Other Angular setup

  defineUiInput();
});
```

- `app.component.ts`
```ts
export class AppComponent {
  email: string;
}
```

- `app.component.html`
```html
<ui-input
    label="E-Mail"
    tabindex="1"
    [(ngModel)]="email"
    ngDefaultControl
    type="email">
</ui-input>
```
