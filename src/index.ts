import type { TSchema } from '@sinclair/typebox';

import { alienDefault } from './alien/default.js';
import { alienCharacterSchema } from './alien/schema.js';
import type { AlienCharacter } from './alien/types.js';

import { apocalypseWorldData } from './apocalypseWorld/data.js';
import { apocalypseWorldDefault } from './apocalypseWorld/default.js';
import { apocalypseWorldCharacterSchema } from './apocalypseWorld/schema.js';
import type { ApocalypseWorldCharacter } from './apocalypseWorld/types.js';

import { cocDefault } from './callOfCthulhu/default.js';
import { cocCharacterSchema } from './callOfCthulhu/schema.js';
import type { CoCCharacter } from './callOfCthulhu/types.js';

import { dnd5Default } from './dnd5/default.js';
import { dnd5CharacterSchema } from './dnd5/schema.js';
import type { DnD5Character } from './dnd5/types.js';

import { seventhSeaDefault } from './seventhSea/default.js';
import { seventhSeaCharacterSchema } from './seventhSea/schema.js';
import type { SeventhSeaCharacter } from './seventhSea/types.js';

import { swd6Default } from './starWarsD6/default.js';
import { swd6CharacterSchema } from './starWarsD6/schema.js';
import type { SWD6Character } from './starWarsD6/types.js';

import { warhammerFantasyData } from './warhammerFantasy/data.js';
import { warhammerFantasyDefault } from './warhammerFantasy/default.js';
import { warhammerFantasyCharacterSchema } from './warhammerFantasy/schema.js';
import type { WarhammerFantasyCharacter } from './warhammerFantasy/types.js';

export * from './alien/types.js';
export * from './apocalypseWorld/types.js';
export * from './callOfCthulhu/types.js';
export * from './dnd5/types.js';
export * from './seventhSea/types.js';
export * from './starWarsD6/types.js';
export * from './warhammerFantasy/types.js';

export type GameId =
    | 'alien'
    | 'apocalypseWorld'
    | 'callOfCthulhu'
    | 'dnd5'
    | 'seventhSea'
    | 'starWarsD6'
    | 'warhammerFantasy';

export const gameIds = [
    'alien',
    'apocalypseWorld',
    'callOfCthulhu',
    'dnd5',
    'seventhSea',
    'starWarsD6',
    'warhammerFantasy'
] as const satisfies GameId[];

export type Character =
    | AlienCharacter
    | ApocalypseWorldCharacter
    | CoCCharacter
    | DnD5Character
    | SeventhSeaCharacter
    | SWD6Character
    | WarhammerFantasyCharacter;

const gamesData = {
    alien: {
        name: 'Alien',
        schema: alienCharacterSchema,
        default: alienDefault
    },
    apocalypseWorld: {
        name: 'Apocalypse World',
        schema: apocalypseWorldCharacterSchema,
        default: apocalypseWorldDefault,
        data: apocalypseWorldData
    },
    callOfCthulhu: {
        name: 'Call of Cthulhu',
        schema: cocCharacterSchema,
        default: cocDefault
    },
    dnd5: {
        name: 'Dungeons & Dragons 5E',
        schema: dnd5CharacterSchema,
        default: dnd5Default
    },
    seventhSea: {
        name: '7th Sea',
        schema: seventhSeaCharacterSchema,
        default: seventhSeaDefault
    },
    starWarsD6: {
        name: 'Star Wars D6',
        schema: swd6CharacterSchema,
        default: swd6Default
    },
    warhammerFantasy: {
        name: 'Warhammer Fantasy',
        schema: warhammerFantasyCharacterSchema,
        default: warhammerFantasyDefault,
        data: warhammerFantasyData
    }
} as const satisfies Record<
    GameId,
    {
        name: string;
        schema: TSchema;
        default: object;
        data?: object;
    }
>;

export const alien = gamesData.alien;
export const apocalypseWorld = gamesData.apocalypseWorld;
export const callOfCthulhu = gamesData.callOfCthulhu;
export const dnd5 = gamesData.dnd5;
export const seventhSea = gamesData.seventhSea;
export const starWarsD6 = gamesData.starWarsD6;
export const warhammerFantasy = gamesData.warhammerFantasy;

type GetGame = <T extends GameId>(gameId: T) => (typeof gamesData)[T];

export const getGame: GetGame = (gameId) => gamesData[gameId];
