import { Type } from '@sinclair/typebox';
// ------------------------ Common
export const apocalypseWorldPlaybookSchema = Type.Union([
    Type.Literal('angel'),
    Type.Literal('battleBabe'),
    Type.Literal('brainer'),
    Type.Literal('chopper'),
    Type.Literal('driver'),
    Type.Literal('gunLugger'),
    Type.Literal('hardHolder'),
    Type.Literal('hocus'),
    Type.Literal('operator'),
    Type.Literal('savvyHead'),
    Type.Literal('skinner')
]);
export const apocalypseWorldBioSchema = Type.Object({
    name: Type.String(),
    look: Type.String()
}, {
    additionalProperties: false
});
export const apocalypseWorldStatSchema = Type.Object({
    value: Type.String(),
    highlighted: Type.Boolean()
}, {
    additionalProperties: false
});
export const apocalypseWorldStatsSchema = Type.Object({
    cool: apocalypseWorldStatSchema,
    hard: apocalypseWorldStatSchema,
    hot: apocalypseWorldStatSchema,
    sharp: apocalypseWorldStatSchema,
    weird: apocalypseWorldStatSchema
}, {
    additionalProperties: false
});
export const apocalypseWorldHxSchema = Type.Object({
    character: Type.String(),
    value: Type.String()
}, {
    additionalProperties: false
});
export const apocalypseWorldHarmSchema = Type.Object({
    countdown: Type.Integer(),
    stabilized: Type.Boolean(),
    shattered: Type.Boolean(),
    crippled: Type.Boolean(),
    disfigured: Type.Boolean(),
    broken: Type.Boolean()
}, {
    additionalProperties: false
});
export const apocalypseWorldImprovementSchema = Type.Object({
    description: Type.String(),
    enabled: Type.Boolean()
}, {
    additionalProperties: false
});
export const apocalypseWorldExperienceSchema = Type.Object({
    value: Type.Integer(),
    improvements: Type.Array(apocalypseWorldImprovementSchema),
    commonImprovements: Type.Array(apocalypseWorldImprovementSchema)
}, {
    additionalProperties: false
});
export const apocalypseWorldBasicListElementSchema = Type.Object({
    title: Type.String(),
    description: Type.Optional(Type.String()),
    enabled: Type.Boolean()
}, {
    additionalProperties: false
});
// ------------------------ Playbooks
// chopper
export const apocalypseWorldCharacterChopperGangSchema = Type.Object({
    size: Type.String(),
    harm: Type.String(),
    armor: Type.String(),
    tags: Type.String(),
    advantages: Type.Array(apocalypseWorldBasicListElementSchema),
    problems: Type.Array(apocalypseWorldBasicListElementSchema)
}, {
    additionalProperties: false
});
export const apocalypseWorldCharacterChopperBikeSchema = Type.Object({
    strengths: Type.String(),
    looks: Type.String(),
    weaknesses: Type.String()
}, {
    additionalProperties: false
});
// driver
export const apocalypseWorldCharacterDriverCarSchema = Type.Object({
    frame: Type.String(),
    power: Type.String(),
    looks: Type.String(),
    armor: Type.String(),
    weak: Type.String(),
    tags: Type.String()
}, {
    additionalProperties: false
});
// hard holder
export const apocalypseWorldCharacterHardHolderHoldingStatsSchema = Type.Object({
    size: Type.String(),
    surplus: Type.String(),
    barter: Type.String(),
    gigs: Type.String(),
    want: Type.String()
}, {
    additionalProperties: false
});
export const apocalypseWorldCharacterHardHolderGangSchema = Type.Object({
    size: Type.String(),
    harm: Type.String(),
    armor: Type.String(),
    tags: Type.String()
}, {
    additionalProperties: false
});
export const apocalypseWorldCharacterHardHolderHoldingSchema = Type.Object({
    holdingStats: apocalypseWorldCharacterHardHolderHoldingStatsSchema,
    gang: apocalypseWorldCharacterHardHolderGangSchema,
    advantages: Type.Array(apocalypseWorldBasicListElementSchema),
    problems: Type.Array(apocalypseWorldBasicListElementSchema)
}, {
    additionalProperties: false
});
// hocus
export const apocalypseWorldCharacterHocusFollowersSchema = Type.Object({
    description: Type.String(),
    surplus: Type.String(),
    barter: Type.String(),
    fortune: Type.String(),
    want: Type.String(),
    type: Type.Array(apocalypseWorldBasicListElementSchema),
    advantages: Type.Array(apocalypseWorldBasicListElementSchema),
    problems: Type.Array(apocalypseWorldBasicListElementSchema)
}, {
    additionalProperties: false
});
// ------------------------ Character
export const apocalypseWorldCharacterSchema = Type.Object({
    playbook: apocalypseWorldPlaybookSchema,
    bio: apocalypseWorldBioSchema,
    stats: apocalypseWorldStatsSchema,
    hx: Type.Array(apocalypseWorldHxSchema),
    special: Type.String(),
    harm: apocalypseWorldHarmSchema,
    moves: Type.Array(apocalypseWorldBasicListElementSchema),
    otherMoves: Type.Array(apocalypseWorldBasicListElementSchema),
    hold: Type.String(),
    gearAndBarter: Type.String(),
    // playbooks
    angel: Type.Optional(Type.Object({
        stock: Type.String()
    }, {
        additionalProperties: false
    })),
    battleBabe: Type.Optional(Type.Object({
        customWeapons: Type.String()
    }, {
        additionalProperties: false
    })),
    brainer: Type.Optional(Type.Object({
        brainerGear: Type.Array(apocalypseWorldBasicListElementSchema),
        customWeapons: Type.String()
    }, {
        additionalProperties: false
    })),
    chopper: Type.Optional(Type.Object({
        gang: apocalypseWorldCharacterChopperGangSchema,
        bike: apocalypseWorldCharacterChopperBikeSchema
    }, {
        additionalProperties: false
    })),
    driver: Type.Optional(Type.Object({
        cars: Type.Array(apocalypseWorldCharacterDriverCarSchema)
    }, {
        additionalProperties: false
    })),
    gunLugger: Type.Optional(Type.Object({
        weapons: Type.String(),
        armor: Type.String()
    }, {
        additionalProperties: false
    })),
    hardHolder: Type.Optional(Type.Object({
        holding: apocalypseWorldCharacterHardHolderHoldingSchema
    }, {
        additionalProperties: false
    })),
    hocus: Type.Optional(Type.Object({
        followers: apocalypseWorldCharacterHocusFollowersSchema
    }, {
        additionalProperties: false
    })),
    operator: Type.Optional(Type.Object({
        payingGigs: Type.Array(apocalypseWorldBasicListElementSchema),
        obligationGigs: Type.Array(apocalypseWorldBasicListElementSchema),
        crewContacts: Type.String()
    }, {
        additionalProperties: false
    })),
    skinner: Type.Optional(Type.Object({
        graciousWeapons: Type.Array(apocalypseWorldBasicListElementSchema),
        luxeGear: Type.Array(apocalypseWorldBasicListElementSchema)
    }, {
        additionalProperties: false
    }))
}, {
    additionalProperties: false
});