/// <reference path="./callOfCthulhu/types.d.ts" />
/// <reference path="./dnd5/types.d.ts" />
/// <reference path="./starWarsD6/types.d.ts" />

import { JSONSchema7 } from 'json-schema';

declare module '@cthunline/games' {
    export const callOfCthulhu: {
        schema: JSONSchema7;
        default: CoCCharacter;
    };

    export const dnd5: {
        schema: JSONSchema7;
        default: DnD5Character;
    };

    export const starWarsD6: {
        schema: JSONSchema7;
        default: SWD6Character;
    };
}
