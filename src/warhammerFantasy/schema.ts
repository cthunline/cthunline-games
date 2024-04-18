import { type Static, Type } from '@sinclair/typebox';

export const warhammerFantasyBiographySchema = Type.Object(
    {
        name: Type.String(),
        species: Type.String(),
        class: Type.String(),
        career: Type.String(),
        careerLevel: Type.String(),
        careerPath: Type.String(),
        status: Type.String(),
        age: Type.String(),
        height: Type.String(),
        hair: Type.String(),
        eyes: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyCharacteristicSchema = Type.Object(
    {
        initial: Type.Integer(),
        advances: Type.Integer(),
        current: Type.Integer(),
        careerLevel: Type.Optional(
            Type.Integer({
                minimum: 1,
                maximum: 4
            })
        )
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyCharacteristicsSchema = Type.Object(
    {
        weaponSkill: warhammerFantasyCharacteristicSchema,
        ballisticSkill: warhammerFantasyCharacteristicSchema,
        strength: warhammerFantasyCharacteristicSchema,
        toughness: warhammerFantasyCharacteristicSchema,
        initiative: warhammerFantasyCharacteristicSchema,
        agility: warhammerFantasyCharacteristicSchema,
        dexterity: warhammerFantasyCharacteristicSchema,
        intelligence: warhammerFantasyCharacteristicSchema,
        willpower: warhammerFantasyCharacteristicSchema,
        fellowship: warhammerFantasyCharacteristicSchema
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyCharacteristicName = Type.KeyOf(
    warhammerFantasyCharacteristicsSchema
);

export const warhammerFantasyFateSchema = Type.Object(
    {
        fate: Type.Integer(),
        fortune: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyResilienceSchema = Type.Object(
    {
        resilience: Type.Integer(),
        resolve: Type.Integer(),
        motivation: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyExperienceSchema = Type.Object(
    {
        current: Type.Integer(),
        spent: Type.Integer(),
        total: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyMovementSchema = Type.Object(
    {
        movement: Type.Integer(),
        walk: Type.Integer(),
        run: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyBasicSkill = Type.Object(
    {
        characteristicName: warhammerFantasyCharacteristicName,
        advances: Type.Integer(),
        skill: Type.Integer(),
        careerLevel: Type.Optional(
            Type.Integer({
                minimum: 1,
                maximum: 4
            })
        )
    },
    {
        additionalProperties: false
    }
);

const getBasicSkillSchema = <
    C extends Static<typeof warhammerFantasyCharacteristicName>
>(
    char: C
) =>
    Type.Object(
        {
            characteristicName: Type.Literal(char),
            advances: Type.Integer(),
            skill: Type.Integer(),
            careerLevel: Type.Optional(
                Type.Integer({
                    minimum: 1,
                    maximum: 4
                })
            )
        },
        {
            additionalProperties: false
        }
    );

export const warhammerFantasyBasicSkillsSchema = Type.Object(
    {
        art: getBasicSkillSchema('dexterity'),
        gossip: getBasicSkillSchema('fellowship'),
        athletics: getBasicSkillSchema('agility'),
        haggle: getBasicSkillSchema('fellowship'),
        bribery: getBasicSkillSchema('fellowship'),
        intimidate: getBasicSkillSchema('strength'),
        charm: getBasicSkillSchema('fellowship'),
        intuition: getBasicSkillSchema('initiative'),
        charmAnimal: getBasicSkillSchema('willpower'),
        leadership: getBasicSkillSchema('fellowship'),
        climb: getBasicSkillSchema('strength'),
        meleeBasic: getBasicSkillSchema('weaponSkill'),
        cool: getBasicSkillSchema('willpower'),
        melee: getBasicSkillSchema('weaponSkill'),
        consumeAlcohol: getBasicSkillSchema('toughness'),
        navigation: getBasicSkillSchema('initiative'),
        dodge: getBasicSkillSchema('agility'),
        outdoorSurvival: getBasicSkillSchema('intelligence'),
        drive: getBasicSkillSchema('agility'),
        perception: getBasicSkillSchema('initiative'),
        endurance: getBasicSkillSchema('toughness'),
        ride: getBasicSkillSchema('agility'),
        entertain: getBasicSkillSchema('fellowship'),
        row: getBasicSkillSchema('strength'),
        gamble: getBasicSkillSchema('intelligence'),
        stealth: getBasicSkillSchema('agility')
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyBasicSkillName = Type.KeyOf(
    warhammerFantasyBasicSkillsSchema
);

export const warhammerFantasyOtherSkillSchema = Type.Object(
    {
        name: Type.String(),
        characteristicName: warhammerFantasyCharacteristicName,
        advances: Type.Integer(),
        skill: Type.Integer(),
        careerLevel: Type.Optional(
            Type.Integer({
                minimum: 1,
                maximum: 4
            })
        )
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyTalentSchema = Type.Object(
    {
        name: Type.String(),
        timesTaken: Type.Integer(),
        description: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyAmbitionsSchema = Type.Object(
    {
        shortTerm: Type.String(),
        longTerm: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyPartySchema = Type.Object(
    {
        name: Type.String(),
        shortTerm: Type.String(),
        longTerm: Type.String(),
        members: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyArmourSchema = Type.Object(
    {
        name: Type.String(),
        locations: Type.String(),
        encumbrance: Type.Integer(),
        armourPoints: Type.Integer(),
        qualities: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyArmourPointsSchema = Type.Object(
    {
        head: Type.Integer(),
        rightArm: Type.Integer(),
        leftArm: Type.Integer(),
        body: Type.Integer(),
        rightLeg: Type.Integer(),
        leftLeg: Type.Integer(),
        shield: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyTrappingSchema = Type.Object(
    {
        name: Type.String(),
        encumbrance: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyWealthSchema = Type.Object(
    {
        brassPennies: Type.Integer(),
        silverShillings: Type.Integer(),
        goldCrowns: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyEncumbranceSchema = Type.Object(
    {
        weapons: Type.Integer(),
        armour: Type.Integer(),
        trappings: Type.Integer(),
        total: Type.Integer(),
        maximumBonus: Type.Integer(),
        maximum: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyWoundsSchema = Type.Object(
    {
        strengthBonus: Type.Integer(),
        twiceToughnessBonus: Type.Integer(),
        willpowerBonus: Type.Integer(),
        hardy: Type.Boolean(),
        total: Type.Integer(),
        current: Type.Integer(),
        notes: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyWeaponSchema = Type.Object(
    {
        name: Type.String(),
        group: Type.String(),
        encumbrance: Type.Integer(),
        rangeReach: Type.String(),
        damage: Type.String(),
        qualities: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasySpellSchema = Type.Object(
    {
        name: Type.String(),
        castingNumber: Type.Integer(),
        range: Type.String(),
        target: Type.String(),
        duration: Type.String(),
        effect: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const warhammerFantasyCharacterSchema = Type.Object(
    {
        biography: warhammerFantasyBiographySchema,
        characteristics: warhammerFantasyCharacteristicsSchema,
        fate: warhammerFantasyFateSchema,
        resilience: warhammerFantasyResilienceSchema,
        experience: warhammerFantasyExperienceSchema,
        movement: warhammerFantasyMovementSchema,
        basicSkills: warhammerFantasyBasicSkillsSchema,
        otherSkills: Type.Array(warhammerFantasyOtherSkillSchema),
        talents: Type.Array(warhammerFantasyTalentSchema),
        ambitions: warhammerFantasyAmbitionsSchema,
        party: warhammerFantasyPartySchema,
        armour: Type.Array(warhammerFantasyArmourSchema),
        armourPoints: warhammerFantasyArmourPointsSchema,
        trappings: Type.Array(warhammerFantasyTrappingSchema),
        psychology: Type.String(),
        corruptionMutation: Type.String(),
        wealth: warhammerFantasyWealthSchema,
        encumbrance: warhammerFantasyEncumbranceSchema,
        wounds: warhammerFantasyWoundsSchema,
        weapons: Type.Array(warhammerFantasyWeaponSchema),
        spells: Type.Array(warhammerFantasySpellSchema),
        sin: Type.Integer(),
        advantage: Type.Integer()
    },
    {
        additionalProperties: false
    }
);
