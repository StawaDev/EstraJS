### Async Examples

```js
import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

async function func1() {
    console.log(await Client.sfw.hug());
}

func1();
```

### Promise Examples

```js
import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

Client.sfw.run().then((output) => {
    console.log(output)}
);
```