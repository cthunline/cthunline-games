import { type TInteger, type TObject, Type } from '@sinclair/typebox';

export const alienBiographySchema = Type.Object(
    {
        name: Type.String(),
        career: Type.String(),
        appearance: Type.String(),
        personalAgenda: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const alienAttributesSchema = Type.Object(
    {
        agility: Type.Object(
            {
                value: Type.Integer({ minimum: 0 }),
                skills: Type.Object(
                    {
                        mobility: Type.Integer({ minimum: 0 }),
                        piloting: Type.Integer({ minimum: 0 }),
                        rangedCombat: Type.Integer({ minimum: 0 })
                    },
                    {
                        additionalProperties: false
                    }
                )
            },
            {
                additionalProperties: false
            }
        ),
        empathy: Type.Object(
            {
                value: Type.Integer({ minimum: 0 }),
                skills: Type.Object(
                    {
                        command: Type.Integer({ minimum: 0 }),
                        medicalAid: Type.Integer({ minimum: 0 }),
                        manipulation: Type.Integer({ minimum: 0 })
                    },
                    {
                        additionalProperties: false
                    }
                )
            },
            {
                additionalProperties: false
            }
        ),
        strength: Type.Object(
            {
                value: Type.Integer({ minimum: 0 }),
                skills: Type.Object(
                    {
                        closeCombat: Type.Integer({ minimum: 0 }),
                        heavyMachinery: Type.Integer({ minimum: 0 }),
                        stamina: Type.Integer({ minimum: 0 })
                    },
                    {
                        additionalProperties: false
                    }
                )
            },
            {
                additionalProperties: false
            }
        ),
        wits: Type.Object(
            {
                value: Type.Integer({ minimum: 0 }),
                skills: Type.Object(
                    {
                        comtech: Type.Integer({ minimum: 0 }),
                        observation: Type.Integer({ minimum: 0 }),
                        survival: Type.Integer({ minimum: 0 })
                    },
                    {
                        additionalProperties: false
                    }
                )
            },
            {
                additionalProperties: false
            }
        )
    } satisfies Record<
        string,
        TObject<{
            value: TInteger;
            skills: TObject<Record<string, TInteger>>;
        }>
    >,
    {
        additionalProperties: false
    }
);

export const alienRelationshipsSchema = Type.Object(
    {
        buddy: Type.String(),
        rival: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const alienConditionsSchema = Type.Object(
    {
        starving: Type.Boolean(),
        dehydrated: Type.Boolean(),
        exhausted: Type.Boolean(),
        freezing: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

export const alienStatusSchema = Type.Object(
    {
        stressLevel: Type.Integer({ minimum: 0 }),
        health: Type.Integer({ minimum: 0 }),
        radiation: Type.Integer({ minimum: 0 }),
        criticalInjuries: Type.String(),
        conditions: alienConditionsSchema
    },
    {
        additionalProperties: false
    }
);

export const alienConsumablesSchema = Type.Object(
    {
        air: Type.Integer({ minimum: 0 }),
        food: Type.Integer({ minimum: 0 }),
        power: Type.Integer({ minimum: 0 }),
        water: Type.Integer({ minimum: 0 })
    },
    {
        additionalProperties: false
    }
);

export const alienArmorSchema = Type.Object(
    {
        name: Type.String(),
        rating: Type.Integer({ minimum: 0 })
    },
    {
        additionalProperties: false
    }
);

export const alienWeaponSchema = Type.Object(
    {
        name: Type.String(),
        bonus: Type.Integer({ minimum: 0 }),
        damage: Type.Integer({ minimum: 0 }),
        range: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const alienEquipmentSchema = Type.Object(
    {
        armor: alienArmorSchema,
        encumbrance: Type.Integer({ minimum: 0 }),
        weapons: Type.Array(alienWeaponSchema),
        gear: Type.Array(Type.String()),
        signatureItem: Type.String(),
        tinyItems: Type.Array(Type.String())
    },
    {
        additionalProperties: false
    }
);

export const alienExperienceSchema = Type.Object(
    {
        experiencePoints: Type.Integer({ minimum: 0 }),
        storyPoints: Type.Integer({ minimum: 0 })
    },
    {
        additionalProperties: false
    }
);

export const alienCharacterSchema = Type.Object(
    {
        biography: alienBiographySchema,
        relationships: alienRelationshipsSchema,
        attributes: alienAttributesSchema,
        talents: Type.Array(Type.String()),
        status: alienStatusSchema,
        consumables: alienConsumablesSchema,
        equipment: alienEquipmentSchema,
        experience: alienExperienceSchema
    },
    {
        additionalProperties: false
    }
);
