<h1 align="center">
    EstraJS
</h1>

<h2 align="center">
    A Basic Wrapper Anime Image API with Many Features
</h2>
<p align="center">
<a href="https://stawa.gitbook.io/estraapi-documentation/"><img src ="https://img.shields.io/badge/Estra--API-Documentation-brightgreen?style=for-the-badge"></a>
</p>

### Features

- Truth or Dare
- Anime GIFs
- Anime Waifu/Husbando Picture
- OSU API Wrapper
- Async Supports
- User Friendly Code

### Installation
If you want to install stable version, try the following command:

```
npm i estrajs
```

Or, if you want to install the newest version (Sometimes not stable), try the following command:

```
npm i https://github.com/StawaDev/EstraJS
```

### AutoUpdate
Don't want to miss our new version? Turn on the "auto-update" feature! Try the following code:

```js
import { AutoUpdate } from 'estrajs/autoupdate';

const UpdateClient = new AutoUpdate();
await UpdateClient.config(true, true, true);
// ↑
// 1. Power on/off, 2. Change Log enabled/disabled, 3. Output enabled/disabled
```

### All Endpoints Help
Confused enough trying to use this module? Don't worry! This function will be returning a list of all endpoints or all endpoints in a list. If you don't want to use this function, you can read it on our [Documentation](https://stawa.gitbook.io/estraapi-documentation/api-examples/estralist)

```js
// First method, easy to use, but not customizable.
import { EstraHelp } from 'estrajs/help';

console.log(await EstraHelp.sfw());
console.log(await EstraHelp.all());

// Second method, complicated to use, but customizable.
import { EstraHelpClass } from 'estrajs/help';

const Helper = new EstraHelpClass();

console.log(await Helper.sfw());
console.log(await Helper.all());
```

### Examples
Here's some examples of how to use this module, if you need more examples, don't worry! In our Github Homepage, we got all examples to use function in this module.

#### Async Examples

```js
import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

async function func1() {
    console.log(await Client.sfw.hug());
}

func1();
```

#### Promise Examples

```js
import { EstraClient } from "estrajs";
// or const EstraClient = require('estrajs');

const Client = new EstraClient();

const Example = async() => { // It generate 5 times! Max 10.
    const output = await Client.sfw.hug(5)
    console.log(output);
}

Example()
```

### Links

- [Documentation](https://stawa.gitbook.io/estraapi-documentation)
- [Homepage](https://github.com/StawaDev/EstraJS)
- [Application Programming Interface](https://estra-api.herokuapp.com)
