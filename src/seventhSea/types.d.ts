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

declare module '@cthunline/games' {
    type SeventhSeaBiography = Static<typeof seventhSeaBiographySchema>;
    type SeventhSeaArcana = Static<typeof seventhSeaArcanaSchema>;
    type SeventhSeaBackground = Static<typeof seventhSeaBackgroundSchema>;
    type SeventhSeaStory = Static<typeof seventhSeaStorySchema>;
    type SeventhSeaTraits = Static<typeof seventhSeaTraitsSchema>;
    type SeventhSeaSkills = Static<typeof seventhSeaSkillsSchema>;
    type SeventhSeaAdvantage = Static<typeof seventhSeaAdvantageSchema>;
    type SeventhSeaCharacter = Static<typeof seventhSeaCharacterSchema>;
}
