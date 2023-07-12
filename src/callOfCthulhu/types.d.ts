import { Static } from '@sinclair/typebox';

import {
    cocBiographySchema,
    cocCharacteristicSchema,
    cocPointSchema,
    cocPointsSchema,
    cocLuckSchema,
    cocSanitySchema,
    cocCharacteristicsSchema,
    cocStatusSchema,
    cocSkillSchema,
    cocCombatSchema,
    cocWeaponSchema,
    cocStorySchema,
    cocCharacterSchema
} from './schema';

declare module '@cthunline/games' {
    type CoCBiography = Static<typeof cocBiographySchema>;
    type CoCCharacteristic = Static<typeof cocCharacteristicSchema>;
    type CoCPoint = Static<typeof cocPointSchema>;
    type CoCPoints = Static<typeof cocPointsSchema>;
    type CoCLuck = Static<typeof cocLuckSchema>;
    type CoCSanity = Static<typeof cocSanitySchema>;
    type CoCCharacteristics = Static<typeof cocCharacteristicsSchema>;
    type CoCStatus = Static<typeof cocStatusSchema>;
    type CoCSkill = Static<typeof cocSkillSchema>;
    type CoCCombat = Static<typeof cocCombatSchema>;
    type CoCWeapon = Static<typeof cocWeaponSchema>;
    type CoCStory = Static<typeof cocStorySchema>;
    type CoCCharacter = Static<typeof cocCharacterSchema>;
}
