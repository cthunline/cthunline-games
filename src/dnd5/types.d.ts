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

declare module '@cthunline/games' {
    type DnD5Biography = Static<typeof dnd5BiographySchema>;
    type DnD5Story = Static<typeof dnd5StorySchema>;
    type DnD5Statistics = Static<typeof dnd5StatisticsSchema>;
    type DnD5Ability = Static<typeof dnd5AbilitySchema>;
    type DnD5Abilities = Static<typeof dnd5AbilitiesSchema>;
    type DnD5Skill = Static<typeof dnd5SkillSchema>;
    type DnD5SavingThrows = Static<typeof dnd5SavingThrowsSchema>;
    type DnD5Skills = Static<typeof dnd5SkillsSchema>;
    type DnD5HitPoints = Static<typeof dnd5HitPointsSchema>;
    type DnD5DeathSaves = Static<typeof dnd5DeathSavesSchema>;
    type DnD5Combat = Static<typeof dnd5CombatSchema>;
    type DnD5Attack = Static<typeof dnd5AttackSchema>;
    type DnD5Features = Static<typeof dnd5FeaturesSchema>;
    type DnD5Money = Static<typeof dnd5MoneySchema>;
    type DnD5Equipment = Static<typeof dnd5EquipmentSchema>;
    type DnD5Spell = Static<typeof dnd5SpellSchema>;
    type DnD5SpellLevel = Static<typeof dnd5SpellLevelSchema>;
    type DnD5SpellLevel = Static<typeof dnd5SpellLevelSchema>;
    type DnD5Spellcasting = Static<typeof dnd5SpellcastingSchema>;
    type DnD5Character = Static<typeof dnd5CharacterSchema>;
}
