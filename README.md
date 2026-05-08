<p align="center">
  <a href="https://aoi.js.org">
    <img width="500" src="https://i.postimg.cc/KvCzhVBh/better-aoi-js-fork.png" alt="better-aoi.js">
  </a>
</p>

<div align="center">
  <b>The most advanced string-based package with better features to create a Discord Bot fast and powerful.</b>
</div>

---

<br/>

<div align="center">

[![NPM downloads][download-image]][download-url] &nbsp; &nbsp;
[![AoiJS Server][aoijs-server]][aoijs-server-url] &nbsp; &nbsp;
[![NPM version][npm-image]][npm-url] &nbsp; &nbsp;
![License](https://img.shields.io/npm/l/aoi.js) &nbsp; &nbsp;
![Website](https://img.shields.io/website?url=https%3A%2F%2Faoi.js.org&label=aoi.js.org) &nbsp; &nbsp;

[npm-image]: https://img.shields.io/npm/v/aoi.js.svg?color=42cfff

[npm-url]: https://npmjs.org/package/aoi.js

[download-image]: https://img.shields.io/npm/dt/aoi.js.svg?color=3182b0

[download-url]: https://npmjs.org/package/aoi.js

[aoijs-server]: https://img.shields.io/discord/773352845738115102?color=5865F2&logo=discord&logoColor=white

[aoijs-server-url]: https://discord.gg/HMUfMXDQsV

  </div>

<br />

<div align = "center">

**[ Official Documentation ](https://aoi.js.org/)** | **[ Official Support Server ](https://discord.gg/HMUfMXDQsV)** | **[ Official NPM ](https://npmjs.org/package/aoi.js)** | **[ Official GitHub ](https://github.com/aoijs/aoi.js)**

</div>

---

## About

**better-aoi.js** is a JavaScript library designed to make it even easier to build Discord bots. 

**This is an unofficial, enhanced fork of [aoi.js](https://github.com/aoijs/aoi.js).** It is open-source and free to use under the Apache License 2.0. better-aoi.js is suitable for beginners who are new to building bots, as well as experienced developers who want to save time, streamline their workflow, and use **better features**.

## Features

- **Better Features:** Enhanced and optimized functions to provide a more powerful development experience.
- **600+ Pre-built Functions:** better-aoi.js includes all original functions that empower you to create dynamic and interactive Discord bots with ease.
- **Built-in Custom Local Database:** Like the original, you get a powerful custom local database out of the box.
- **Easy-to-Use and Beginner Friendly:** better-aoi.js boasts a user-friendly syntax. The simple `$` prefix makes it easy to write commands and get your bot up and running quickly.

## Setup

```javascript
// Install using: npm install better-aoi.js
const {AoiClient} = require("better-aoi.js");

const client = new AoiClient({
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    prefix: "Discord Bot Prefix",
    token: "Discord Bot Token"
});

// Ping Command
client.command({
    name: "ping",
    code: `Pong! $pingms`
});
```

### Adding Database

```javascript
const {AoiClient} = require("better-aoi.js");

const client = new AoiClient({
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    prefix: "Discord Bot Prefix",
    token: "Discord Bot Token",
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here",
    }
});

// Ping Command
client.command({
    name: "ping",
    code: `Pong! $pingms`
});
```

## Command Handler

By default, better-aoi.js does not have a command handler. However, you can easily add one by using the `loadCommands` method.

```javascript
client.loadCommands("./commands/", true);
```

- `./commands/` is the directory where your commands are located.
- `true` allows to log the commands in console.

## Notices & License

- **Fork Notice**: This project is a modified version (fork) of [aoi.js](https://github.com/aoijs/aoi.js). All original credits to Akarui Development.
- **License**: Licensed under the [Apache License 2.0](http://apache.org).
- **Reading Functions**: Currently it reads `$` functions from bottom to top.

## Official Extensions (aoi.js)

<div align="center">
  <a href="https://aoi.js.org/extensions/aoijs/aoipanel/">
    <img width="100" src="https://github.com/aoijs/website/blob/master/assets/images/aoipanel.png?raw=true" alt="@aoijs/aoi.panel">
  </a>
  <a href="https://aoi.js.org/extensions/aoijs/aoimusic/">
    <img width="100" src="https://github.com/aoijs/website/blob/master/assets/images/aoimusic.png?raw=true" alt="@aoijs/aoi.music">
  </a>
</div>

> [!IMPORTANT]
> This is a fork. All original credit goes to **Akarui Development** and the aoi.js contributors. This project is licensed under the Apache License 2.0.


## Contributing

[Refer to original contribution documentation for more information](https://github.com/aoijs/aoi.js/blob/v6/.github/CONTRIBUTING.md)
