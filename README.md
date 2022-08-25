# Cthunline Games

> TS types and JSON schemas for Cthunline games

* [Using this package in other projects](#using-this-package-in-other-projects)
    * [Install](#install)
    * [Usage](#usage)
* [Development](#development)
    * [Generating schemas](#generating-schemas)

## Using this package in other projects

### Install

```shell
npm i @cthunline/games
```

### Usage

```typescript
import schemas, { CoCCharacter } from '@cthunline/games';

// Use json schemas to validate data
const validator = new Validator(schemas.callOfCthulhu);

// Use TS types to type character objects
const character: CoCCharacter = {
    // ...
};
```

## Development

### Generating schemas

In this project, character JSON schemas are automatically generated from TS types using [typescript-json-schema](https://github.com/YousefED/typescript-json-schema)

```shell
typescript-json-schema src/callOfCthulhu/types.d.ts CoCCharacter -o src/callOfCthulhu/schema.json --noExtraProps
```
