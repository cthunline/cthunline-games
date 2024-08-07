import type { Static } from '@sinclair/typebox';

import type {
    apocalypseWorldBasicListItemSchema,
    apocalypseWorldBioSchema,
    apocalypseWorldCharacterChopperBikeSchema,
    apocalypseWorldCharacterChopperGangSchema,
    apocalypseWorldCharacterDriverCarSchema,
    apocalypseWorldCharacterHardHolderGangSchema,
    apocalypseWorldCharacterHardHolderHoldingSchema,
    apocalypseWorldCharacterHardHolderHoldingStatsSchema,
    apocalypseWorldCharacterHocusFollowersSchema,
    apocalypseWorldCharacterSchema,
    apocalypseWorldDetailedListItemSchema,
    apocalypseWorldExperienceSchema,
    apocalypseWorldHarmSchema,
    apocalypseWorldHxSchema,
    apocalypseWorldImprovementSchema,
    apocalypseWorldPlaybookSchema,
    apocalypseWorldStatSchema,
    apocalypseWorldStatsSchema
} from './schema.js';

export type ApocalypseWorldPlaybook = Static<
    typeof apocalypseWorldPlaybookSchema
>;
export type ApocalypseWorldBio = Static<typeof apocalypseWorldBioSchema>;
export type ApocalypseWorldStat = Static<typeof apocalypseWorldStatSchema>;
export type ApocalypseWorldStats = Static<typeof apocalypseWorldStatsSchema>;
export type ApocalypseWorldHx = Static<typeof apocalypseWorldHxSchema>;
export type ApocalypseWorldHarm = Static<typeof apocalypseWorldHarmSchema>;
export type ApocalypseWorldImprovement = Static<
    typeof apocalypseWorldImprovementSchema
>;
export type ApocalypseWorldExperience = Static<
    typeof apocalypseWorldExperienceSchema
>;
export type ApocalypseWorldBasicListItem = Static<
    typeof apocalypseWorldBasicListItemSchema
>;
export type ApocalypseWorldDetailedListItem = Static<
    typeof apocalypseWorldDetailedListItemSchema
>;
export type ApocalypseWorldCharacterChopperGang = Static<
    typeof apocalypseWorldCharacterChopperGangSchema
>;
export type ApocalypseWorldCharacterChopperBike = Static<
    typeof apocalypseWorldCharacterChopperBikeSchema
>;
export type ApocalypseWorldCharacterDriverCar = Static<
    typeof apocalypseWorldCharacterDriverCarSchema
>;
export type ApocalypseWorldCharacterHardHolderHoldingStats = Static<
    typeof apocalypseWorldCharacterHardHolderHoldingStatsSchema
>;
export type ApocalypseWorldCharacterHardHolderGang = Static<
    typeof apocalypseWorldCharacterHardHolderGangSchema
>;
export type ApocalypseWorldCharacterHardHolderHolding = Static<
    typeof apocalypseWorldCharacterHardHolderHoldingSchema
>;
export type ApocalypseWorldCharacterHocusFollowers = Static<
    typeof apocalypseWorldCharacterHocusFollowersSchema
>;
export type ApocalypseWorldCharacter = Static<
    typeof apocalypseWorldCharacterSchema
>;
