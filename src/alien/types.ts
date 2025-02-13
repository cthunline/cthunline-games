import type { Static } from '@sinclair/typebox';

import type {
    alienAgendaSchema,
    alienArmorSchema,
    alienAttributesSchema,
    alienBiographySchema,
    alienCharacterSchema,
    alienConditionsSchema,
    alienConsumablesSchema,
    alienEquipmentSchema,
    alienExperienceSchema,
    alienRelationshipsSchema,
    alienStatusSchema,
    alienWeaponSchema
} from './schema.js';

export type AlienBiography = Static<typeof alienBiographySchema>;
export type AlienAttributes = Static<typeof alienAttributesSchema>;
export type AlienRelationships = Static<typeof alienRelationshipsSchema>;
export type AlienConditions = Static<typeof alienConditionsSchema>;
export type AlienStatus = Static<typeof alienStatusSchema>;
export type AlienConsumables = Static<typeof alienConsumablesSchema>;
export type AlienArmor = Static<typeof alienArmorSchema>;
export type AlienWeapon = Static<typeof alienWeaponSchema>;
export type AlienEquipment = Static<typeof alienEquipmentSchema>;
export type AlienExperience = Static<typeof alienExperienceSchema>;
export type AlienCharacter = Static<typeof alienCharacterSchema>;
export type AlienAgenda = Static<typeof alienAgendaSchema>;

export type AlienAttribute = keyof AlienAttributes;
export type AlienSkill = {
    [K in AlienAttribute]: keyof AlienAttributes[K]['skills'];
}[AlienAttribute];
export type AlienCondition = keyof AlienConditions;

export type AlienConsumable = keyof AlienConsumables;
