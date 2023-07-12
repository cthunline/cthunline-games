/// <reference path="./callOfCthulhu/types.d.ts" />
/// <reference path="./dnd5/types.d.ts" />
/// <reference path="./seventhSea/types.d.ts" />
/// <reference path="./starWarsD6/types.d.ts" />

import { TSchema } from '@sinclair/typebox';

declare module '@cthunline/games' {
    export const callOfCthulhu: {
        schema: TSchema;
        default: CoCCharacter;
    };

    export const dnd5: {
        schema: TSchema;
        default: DnD5Character;
    };

    export const seventhSea: {
        schema: TSchema;
        default: SeventhSeaCharacter;
    };

    export const starWarsD6: {
        schema: TSchema;
        default: SWD6Character;
    };
}
