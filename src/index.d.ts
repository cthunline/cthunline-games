/// <reference path="./callOfCthulhu/types.d.ts" />
/// <reference path="./dnd5/types.d.ts" />
/// <reference path="./starWarsD6/types.d.ts" />

import { JSONSchema7 } from 'json-schema';

declare module 'cthunline-games' {
    interface Schemas {
        callOfCthulhu: JSONSchema7;
        dnd5: JSONSchema7;
        starWarsD6: JSONSchema7;
    }

    const schemas: Schemas;

    export = schemas;
}
