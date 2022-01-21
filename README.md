### Async Examples

```js
const Client = new EstraClient();

async function func1() {
    console.log(await Client.sfw.hug());
}

func1();
```

### Promise Examples

```js
const Client = new EstraClient();

Client.sfw.run().then((run) => {
    console.log(run)}
);
```