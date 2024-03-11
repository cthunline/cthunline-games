import { cocCharacterSchema } from './callOfCthulhu/schema';
import cocDefault from './callOfCthulhu/default';

import { dnd5CharacterSchema } from './dnd5/schema';
import dnd5Default from './dnd5/default';

import { seventhSeaCharacterSchema } from './seventhSea/schema';
import seventhSeaDefault from './seventhSea/default';

import { swd6CharacterSchema } from './starWarsD6/schema';
import swd6Default from './starWarsD6/default';

import { warhammerFantasyCharacterSchema } from './warhammerFantasy/schema';
import warhammerFantasyDefault from './warhammerFantasy/default';

export * from './callOfCthulhu/types';
export * from './dnd5/types';
export * from './seventhSea/types';
export * from './starWarsD6/types';
export * from './warhammerFantasy/types';

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
    default: warhammerFantasyDefault
};
