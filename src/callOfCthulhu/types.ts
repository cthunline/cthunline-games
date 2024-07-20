import type { Static } from '@sinclair/typebox';

import type {
    cocBiographySchema,
    cocCharacterSchema,
    cocCharacteristicSchema,
    cocCharacteristicsSchema,
    cocCombatSchema,
    cocLuckSchema,
    cocPointSchema,
    cocPointsSchema,
    cocSanitySchema,
    cocSkillSchema,
    cocStatusSchema,
    cocStorySchema,
    cocWeaponSchema
} from './schema.js';

export type CoCBiography = Static<typeof cocBiographySchema>;
export type CoCCharacteristic = Static<typeof cocCharacteristicSchema>;
export type CoCPoint = Static<typeof cocPointSchema>;
export type CoCPoints = Static<typeof cocPointsSchema>;
export type CoCLuck = Static<typeof cocLuckSchema>;
export type CoCSanity = Static<typeof cocSanitySchema>;
export type CoCCharacteristics = Static<typeof cocCharacteristicsSchema>;
export type CoCStatus = Static<typeof cocStatusSchema>;
export type CoCSkill = Static<typeof cocSkillSchema>;
export type CoCCombat = Static<typeof cocCombatSchema>;
export type CoCWeapon = Static<typeof cocWeaponSchema>;
export type CoCStory = Static<typeof cocStorySchema>;
export type CoCCharacter = Static<typeof cocCharacterSchema>;
