import { cocCharacterSchema } from './callOfCthulhu/schema';
import cocDefault from './callOfCthulhu/default';

import { dnd5CharacterSchema } from './dnd5/schema';
import dnd5Default from './dnd5/default';

import { seventhSeaCharacterSchema } from './seventhSea/schema';
import seventhSeaDefault from './seventhSea/default';

import { swd6CharacterSchema } from './starWarsD6/schema';
import swd6Default from './starWarsD6/default';

export default {
    callOfCthulhu: {
        schema: cocCharacterSchema,
        default: cocDefault
    },
    dnd5: {
        schema: dnd5CharacterSchema,
        default: dnd5Default
    },
    seventhSea: {
        schema: seventhSeaCharacterSchema,
        default: seventhSeaDefault
    },
    starWarsD6: {
        schema: swd6CharacterSchema,
        default: swd6Default
    }
};
