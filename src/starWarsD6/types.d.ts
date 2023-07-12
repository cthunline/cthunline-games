import {
    swd6BiographySchema,
    swd6SkillSchema,
    swd6AttributeDataSchema,
    swd6AttributesSchema,
    swd6StatisticsSchema,
    swd6WoundStatusSchema,
    swd6StorySchema,
    swd6WeaponSchema,
    swd6CharacterSchema
} from './schema';

declare module '@cthunline/games' {
    type SWD6Biography = Static<typeof swd6BiographySchema>;
    type SWD6Skill = Static<typeof swd6SkillSchema>;
    type SWD6AttributeData = Static<typeof swd6AttributeDataSchema>;
    type SWD6Attributes = Static<typeof swd6AttributesSchema>;
    type SWD6Statistics = Static<typeof swd6StatisticsSchema>;
    type SWD6WoundStatus = Static<typeof swd6WoundStatusSchema>;
    type SWD6Story = Static<typeof swd6StorySchema>;
    type SWD6Weapon = Static<typeof swd6WeaponSchema>;
    type SWD6Character = Static<typeof swd6CharacterSchema>;

    type SWD6Attribute = keyof SWD6Attributes;
    type SWD6WoundStatusKey = keyof SWD6WoundStatus;
}
