# Cthunline Games

> TS types and [TypeBox](https://github.com/sinclairzx81/typebox) schemas for Cthunline games

## Install

```shell
npm i @cthunline/games
```

## Example

```typescript
import { callOfCthulhu, CoCCharacter } from '@cthunline/games';
import { Value } from '@sinclair/typebox/value';

// Check character data validity against schema
Value.Check(callOfCthulhu.schema, data);

// Use the default character object to initialise a new character
const newCharacter = { ...callOfCthulhu.default };

// Use TS types to type character objects
const character: CoCCharacter = {
    // ...
};
```
