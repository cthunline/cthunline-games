const { Type } = require('@sinclair/typebox');

const cocBiographySchema = Type.Object(
    {
        name: Type.String(),
        birthPlace: Type.String(),
        occupation: Type.String(),
        residence: Type.String(),
        age: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocCharacteristicSchema = Type.Object(
    {
        regular: Type.Integer(),
        half: Type.Integer(),
        fifth: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocPointSchema = Type.Object(
    {
        maximum: Type.Integer(),
        current: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocPointsSchema = Type.Object(
    {
        hitPoints: cocPointSchema,
        magicPoints: cocPointSchema
    },
    {
        additionalProperties: false
    }
);

const cocLuckSchema = Type.Object(
    {
        starting: Type.Integer(),
        current: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocSanitySchema = Type.Object(
    {
        starting: Type.Integer(),
        maximum: Type.Integer(),
        current: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocCharacteristicsSchema = Type.Object(
    {
        strength: cocCharacteristicSchema,
        constitution: cocCharacteristicSchema,
        size: cocCharacteristicSchema,
        dexterity: cocCharacteristicSchema,
        appearance: cocCharacteristicSchema,
        intelligence: cocCharacteristicSchema,
        power: cocCharacteristicSchema,
        education: cocCharacteristicSchema
    },
    {
        additionalProperties: false
    }
);

const cocStatusSchema = Type.Object(
    {
        temporaryInsanity: Type.Boolean(),
        indefiniteInsanity: Type.Boolean(),
        majorWound: Type.Boolean(),
        unconscious: Type.Boolean(),
        dying: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

const cocSkillSchema = Type.Object(
    {
        name: Type.String(),
        base: Type.String(),
        development: Type.Boolean(),
        developed: Type.Boolean(),
        regular: Type.Integer(),
        half: Type.Integer(),
        fifth: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

const cocCombatSchema = Type.Object(
    {
        move: Type.Integer(),
        build: Type.String(),
        damageBonus: Type.String()
    },
    {
        additionalProperties: false
    }
);

const cocWeaponSchema = Type.Object(
    {
        name: Type.String(),
        damage: Type.String(),
        attacks: Type.String(),
        range: Type.String(),
        ammo: Type.String(),
        malfunction: Type.String()
    },
    {
        additionalProperties: false
    }
);

const cocStorySchema = Type.Object(
    {
        story: Type.String(),
        personalDescription: Type.String(),
        ideologyAndBeliefs: Type.String(),
        significantPeople: Type.String(),
        meaningfulLocations: Type.String(),
        treasuredPossessions: Type.String(),
        traits: Type.String(),
        injuriesAndScars: Type.String(),
        phobiasAndManias: Type.String(),
        arcaneTomesAndSpells: Type.String(),
        encountersWithStrangeEntities: Type.String(),
        gearAndPossessions: Type.String(),
        fellowInvestigators: Type.String(),
        spendingLevel: Type.String(),
        cash: Type.String(),
        assets: Type.String()
    },
    {
        additionalProperties: false
    }
);

const cocCharacterSchema = Type.Object(
    {
        biography: cocBiographySchema,
        characteristics: cocCharacteristicsSchema,
        points: cocPointsSchema,
        luck: cocLuckSchema,
        sanity: cocSanitySchema,
        status: cocStatusSchema,
        skills: Type.Array(cocSkillSchema),
        combat: cocCombatSchema,
        weapons: Type.Array(cocWeaponSchema),
        story: cocStorySchema
    },
    {
        additionalProperties: false
    }
);

module.exports = {
    cocBiographySchema,
    cocCharacteristicSchema,
    cocPointSchema,
    cocPointsSchema,
    cocLuckSchema,
    cocSanitySchema,
    cocCharacteristicsSchema,
    cocStatusSchema,
    cocSkillSchema,
    cocCombatSchema,
    cocWeaponSchema,
    cocStorySchema,
    cocCharacterSchema
};
