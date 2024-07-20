import apocalypseWorldData from './apocalypseWorld/data.js';
import apocalypseWorldDefault from './apocalypseWorld/default.js';
import { apocalypseWorldCharacterSchema } from './apocalypseWorld/schema.js';

import cocDefault from './callOfCthulhu/default.js';
import { cocCharacterSchema } from './callOfCthulhu/schema.js';

import dnd5Default from './dnd5/default.js';
import { dnd5CharacterSchema } from './dnd5/schema.js';

import seventhSeaDefault from './seventhSea/default.js';
import { seventhSeaCharacterSchema } from './seventhSea/schema.js';

import swd6Default from './starWarsD6/default.js';
import { swd6CharacterSchema } from './starWarsD6/schema.js';

import warhammerFantasyData from './warhammerFantasy/data.js';
import warhammerFantasyDefault from './warhammerFantasy/default.js';
import { warhammerFantasyCharacterSchema } from './warhammerFantasy/schema.js';

import type { ApocalypseWorldCharacter } from './apocalypseWorld/types.js';
import type { CoCCharacter } from './callOfCthulhu/types.js';
import type { DnD5Character } from './dnd5/types.js';
import type { SeventhSeaCharacter } from './seventhSea/types.js';
import type { SWD6Character } from './starWarsD6/types.js';
import type { WarhammerFantasyCharacter } from './warhammerFantasy/types.js';

export * from './apocalypseWorld/types.js';
export * from './callOfCthulhu/types.js';
export * from './dnd5/types.js';
export * from './seventhSea/types.js';
export * from './starWarsD6/types.js';
export * from './warhammerFantasy/types.js';

export type Character =
    | ApocalypseWorldCharacter
    | CoCCharacter
    | DnD5Character
    | SeventhSeaCharacter
    | SWD6Character
    | WarhammerFantasyCharacter;

export const apocalypseWorld = {
    schema: apocalypseWorldCharacterSchema,
    default: apocalypseWorldDefault,
    data: apocalypseWorldData
};

export const callOfCthulhu = {
    schema: cocCharacterSchema,
    default: cocDefault
};

export const dnd5 = {
    schema: dnd5CharacterSchema,
    default: dnd5Default
};

export const seventhSea = {
    schema: seventhSeaCharacterSchema,
    default: seventhSeaDefault
};

export const starWarsD6 = {
    schema: swd6CharacterSchema,
    default: swd6Default
};

export const warhammerFantasy = {
    schema: warhammerFantasyCharacterSchema,
    default: warhammerFantasyDefault,
    data: warhammerFantasyData
};
