import { type Static } from '@sinclair/typebox';

import {
    dnd5BiographySchema,
    dnd5StorySchema,
    dnd5StatisticsSchema,
    dnd5AbilitySchema,
    dnd5AbilitiesSchema,
    dnd5SkillSchema,
    dnd5SavingThrowsSchema,
    dnd5SkillsSchema,
    dnd5HitPointsSchema,
    dnd5DeathSavesSchema,
    dnd5CombatSchema,
    dnd5AttackSchema,
    dnd5FeaturesSchema,
    dnd5MoneySchema,
    dnd5EquipmentSchema,
    dnd5SpellSchema,
    dnd5SpellLevelSchema,
    dnd5SpellcastingSchema,
    dnd5CharacterSchema
} from './schema';

export type DnD5Biography = Static<typeof dnd5BiographySchema>;
export type DnD5Story = Static<typeof dnd5StorySchema>;
export type DnD5Statistics = Static<typeof dnd5StatisticsSchema>;
export type DnD5Ability = Static<typeof dnd5AbilitySchema>;
export type DnD5Abilities = Static<typeof dnd5AbilitiesSchema>;
export type DnD5Skill = Static<typeof dnd5SkillSchema>;
export type DnD5SavingThrows = Static<typeof dnd5SavingThrowsSchema>;
export type DnD5Skills = Static<typeof dnd5SkillsSchema>;
export type DnD5HitPoints = Static<typeof dnd5HitPointsSchema>;
export type DnD5DeathSaves = Static<typeof dnd5DeathSavesSchema>;
export type DnD5Combat = Static<typeof dnd5CombatSchema>;
export type DnD5Attack = Static<typeof dnd5AttackSchema>;
export type DnD5Features = Static<typeof dnd5FeaturesSchema>;
export type DnD5Money = Static<typeof dnd5MoneySchema>;
export type DnD5Equipment = Static<typeof dnd5EquipmentSchema>;
export type DnD5Spell = Static<typeof dnd5SpellSchema>;
export type DnD5SpellLevel = Static<typeof dnd5SpellLevelSchema>;
export type DnD5Spellcasting = Static<typeof dnd5SpellcastingSchema>;
export type DnD5Character = Static<typeof dnd5CharacterSchema>;
