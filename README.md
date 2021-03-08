# UI Components in vue-hyper

## Installation
```sh
# terminal
$ yarn add ssh://git@source.factorial.io:2222/dpa/vh-ui-components.git
```

### With Vue.js
- `main.(js|ts)`
```
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
