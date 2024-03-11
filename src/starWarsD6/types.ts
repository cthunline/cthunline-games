import { type Static } from '@sinclair/typebox';

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

export type SWD6Biography = Static<typeof swd6BiographySchema>;
export type SWD6Skill = Static<typeof swd6SkillSchema>;
export type SWD6AttributeData = Static<typeof swd6AttributeDataSchema>;
export type SWD6Attributes = Static<typeof swd6AttributesSchema>;
export type SWD6Statistics = Static<typeof swd6StatisticsSchema>;
export type SWD6WoundStatus = Static<typeof swd6WoundStatusSchema>;
export type SWD6Story = Static<typeof swd6StorySchema>;
export type SWD6Weapon = Static<typeof swd6WeaponSchema>;
export type SWD6Character = Static<typeof swd6CharacterSchema>;

export type SWD6Attribute = keyof SWD6Attributes;
export type SWD6WoundStatusKey = keyof SWD6WoundStatus;
