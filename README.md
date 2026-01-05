# tinytg

A [tiny](https://bundlephobia.com/package/tinytg) set of tools to communicate with Telegram Mini Apps API.

Add to your project:

```bash
npm i tinytg
```

# why?

This repo is intended for those who want a small (a few kilobytes) and unabstracted way to use Mini Apps API. Everything is stripped down to bare functions without any components or signals.

# usage

## receiving events

_Events_ are the messages sent by Telegram app to the webpage.

Subscribe to the event:

```typescript
import { events } from "tinytg";

events.on("eventName", (data) => {
  //do something with the data
});
```

Unsubscribe:

```typescript
import { events } from "tinytg";

const listener = (data) => {
  //do something with the data
};

events.off("eventName", listener);
```

## sending methods

_Methods_ are the messages that are sent by the webpage to the Telegram app:

```typescript
import { methods } from "tinytg";

methods.post("method", { data: "data" });
```

# examples

## check for TMA

Check if the webpage is running as Telegram Mini App:

```typescript
import { isTMA } from "tinytg";

if (isTMA()) console.log("Running in TMA");
```

## launch params

Get the launch parameters:

```typescript
import { getLaunchParameters } from "tinytg";

const params = getLaunchParameters();
console.log(params);
```

## theming

Get theme parameters:

```typescript
import { getLaunchParameters } from "tinytg";

const params = getLaunchParameters();
const theme_params = params.tgWebAppThemeParams;
```

Bind theme parameters to css variables:

```typescript
import { applyThemeCss } from "tinytg";

applyThemeCss();
```

Rebind theme parameters when the user changes theme:

```typescript
import { applyThemeCss, events } from "tinytg";

applyThemeCss();

events.on("theme_changed", ({ theme_params }) =>
  applyThemeCss(undefined, theme_params)
);
```
