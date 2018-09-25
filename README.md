# Wool Registry

**This project is very early pre-alpha, not everything described here exists, and much of it will not work as expected.**

Wool Registry is a basic implementation of the [wool](https://github.com/woolts/wool) registry protocol.

## Getting Started

First you must have installed [wool](https://github.com/woolts/wool) and [wool-server](https://github.com/woolts/wool-server).

> Note: Since there is no public registry yet you have to install `wool-server` manually by cloning and compiling it. In the future this will be unnecessary.

Then clone this project and compile it with:

```
wool make .
```

Then create a registry in `~/.wool/registries/example` with two files:

```js
// packages.json
{
}
```

```js
// registry.json
{
  "host": "localhost",
  "port": "7777"
}
```

You can then run it with:

```
wool run lsjroberts/registry/0.0.0 example
```

You should see:

```
Started server at http://localhost:7777
Serving wool registry "example"

    localhost:7777
    0 packages
```
