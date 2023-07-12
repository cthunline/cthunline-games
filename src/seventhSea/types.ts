import { Static } from '@sinclair/typebox';

import {
    seventhSeaBiographySchema,
    seventhSeaArcanaSchema,
    seventhSeaBackgroundSchema,
    seventhSeaStorySchema,
    seventhSeaTraitsSchema,
    seventhSeaSkillsSchema,
    seventhSeaAdvantageSchema,
    seventhSeaCharacterSchema
} from './schema';

export type SeventhSeaBiography = Static<typeof seventhSeaBiographySchema>;
export type SeventhSeaArcana = Static<typeof seventhSeaArcanaSchema>;
export type SeventhSeaBackground = Static<typeof seventhSeaBackgroundSchema>;
export type SeventhSeaStory = Static<typeof seventhSeaStorySchema>;
export type SeventhSeaTraits = Static<typeof seventhSeaTraitsSchema>;
export type SeventhSeaSkills = Static<typeof seventhSeaSkillsSchema>;
export type SeventhSeaAdvantage = Static<typeof seventhSeaAdvantageSchema>;
export type SeventhSeaCharacter = Static<typeof seventhSeaCharacterSchema>;
