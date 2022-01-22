<h1 align="center">
    Estrapy-API
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
- Async Supports
- User Friendly Code

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

### Links

- [Documentation](https://stawa.gitbook.io/estraapi-documentation)
- [Homepage](https://github.com/StawaDev/EstraDart)
- [Application Programming Interface](https://estra-api.herokuapp.com)
