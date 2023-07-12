import { Type } from '@sinclair/typebox';

export const seventhSeaBiographySchema = Type.Object(
    {
        name: Type.String(),
        concept: Type.String(),
        nation: Type.String(),
        religion: Type.String(),
        reputations: Type.String(),
        wealth: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaArcanaSchema = Type.Object(
    {
        name: Type.String(),
        virtue: Type.String(),
        hubris: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaBackgroundSchema = Type.Object(
    {
        name: Type.String(),
        description: Type.String(),
        quirk: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaStorySchema = Type.Object(
    {
        name: Type.String(),
        goal: Type.String(),
        reward: Type.String(),
        steps: Type.Array(Type.String())
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaTraitsSchema = Type.Object(
    {
        brawn: Type.Integer(),
        finesse: Type.Integer(),
        resolve: Type.Integer(),
        wits: Type.Integer(),
        panache: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaSkillsSchema = Type.Object(
    {
        aim: Type.Integer(),
        athletics: Type.Integer(),
        brawl: Type.Integer(),
        convince: Type.Integer(),
        empathy: Type.Integer(),
        hide: Type.Integer(),
        intimidate: Type.Integer(),
        notice: Type.Integer(),
        perform: Type.Integer(),
        ride: Type.Integer(),
        sailing: Type.Integer(),
        scholarship: Type.Integer(),
        tempt: Type.Integer(),
        theft: Type.Integer(),
        warfare: Type.Integer(),
        weaponry: Type.Integer()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaAdvantageSchema = Type.Object(
    {
        name: Type.String(),
        description: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const seventhSeaCharacterSchema = Type.Object(
    {
        biography: seventhSeaBiographySchema,
        heroPoints: Type.Integer(),
        arcana: seventhSeaArcanaSchema,
        backgrounds: Type.Array(seventhSeaBackgroundSchema),
        stories: Type.Array(seventhSeaStorySchema),
        traits: seventhSeaTraitsSchema,
        skills: seventhSeaSkillsSchema,
        deathSpiral: Type.Integer(),
        advantages: Type.Array(seventhSeaAdvantageSchema),
        items: Type.String(),
        notes: Type.String()
    },
    {
        additionalProperties: false
    }
);
