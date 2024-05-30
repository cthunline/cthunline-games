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

export const apocalypseWorldBioSchema = Type.Object(
    {
        name: Type.String(),
        look: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldStatSchema = Type.Object(
    {
        value: Type.String(),
        highlighted: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldStatsSchema = Type.Object(
    {
        cool: apocalypseWorldStatSchema,
        hard: apocalypseWorldStatSchema,
        hot: apocalypseWorldStatSchema,
        sharp: apocalypseWorldStatSchema,
        weird: apocalypseWorldStatSchema
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldHxSchema = Type.Object(
    {
        character: Type.String(),
        value: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldHarmSchema = Type.Object(
    {
        countdown: Type.Integer(),
        stabilized: Type.Boolean(),
        shattered: Type.Boolean(),
        crippled: Type.Boolean(),
        disfigured: Type.Boolean(),
        broken: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldImprovementSchema = Type.Object(
    {
        name: Type.String(),
        enabled: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldExperienceSchema = Type.Object(
    {
        value: Type.Integer(),
        commonImprovements: Type.Array(apocalypseWorldImprovementSchema)
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldBasicListItemSchema = Type.Object(
    {
        name: Type.String(),
        enabled: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldDetailedListItemSchema = Type.Object(
    {
        title: Type.String(),
        description: Type.String(),
        enabled: Type.Boolean()
    },
    {
        additionalProperties: false
    }
);

// ------------------------ Playbooks

// chopper

export const apocalypseWorldCharacterChopperGangSchema = Type.Object(
    {
        size: Type.String(),
        harm: Type.String(),
        armor: Type.String(),
        tags: Type.String(),
        advantages: Type.Array(apocalypseWorldBasicListItemSchema),
        problems: Type.Array(apocalypseWorldBasicListItemSchema)
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldCharacterChopperBikeSchema = Type.Object(
    {
        strengths: Type.String(),
        looks: Type.String(),
        weaknesses: Type.String()
    },
    {
        additionalProperties: false
    }
);

// driver

export const apocalypseWorldCharacterDriverCarSchema = Type.Object(
    {
        frame: Type.String(),
        power: Type.String(),
        looks: Type.String(),
        armor: Type.String(),
        weak: Type.String(),
        tags: Type.String()
    },
    {
        additionalProperties: false
    }
);

// hard holder

export const apocalypseWorldCharacterHardHolderHoldingStatsSchema = Type.Object(
    {
        size: Type.String(),
        surplus: Type.String(),
        barter: Type.String(),
        gigs: Type.String(),
        want: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldCharacterHardHolderGangSchema = Type.Object(
    {
        size: Type.String(),
        harm: Type.String(),
        armor: Type.String(),
        tags: Type.String()
    },
    {
        additionalProperties: false
    }
);

export const apocalypseWorldCharacterHardHolderHoldingSchema = Type.Object(
    {
        holdingStats: apocalypseWorldCharacterHardHolderHoldingStatsSchema,
        gang: apocalypseWorldCharacterHardHolderGangSchema,
        advantages: Type.Array(apocalypseWorldBasicListItemSchema),
        problems: Type.Array(apocalypseWorldBasicListItemSchema)
    },
    {
        additionalProperties: false
    }
);

// hocus

export const apocalypseWorldCharacterHocusFollowersSchema = Type.Object(
    {
        description: Type.String(),
        surplus: Type.String(),
        barter: Type.String(),
        fortune: Type.String(),
        want: Type.String(),
        type: Type.Array(apocalypseWorldBasicListItemSchema),
        advantages: Type.Array(apocalypseWorldBasicListItemSchema),
        problems: Type.Array(apocalypseWorldBasicListItemSchema)
    },
    {
        additionalProperties: false
    }
);

// ------------------------ Character

export const apocalypseWorldCharacterSchema = Type.Object(
    {
        playbook: apocalypseWorldPlaybookSchema,
        bio: apocalypseWorldBioSchema,
        stats: apocalypseWorldStatsSchema,
        hx: Type.Array(apocalypseWorldHxSchema),
        harm: apocalypseWorldHarmSchema,
        experience: apocalypseWorldExperienceSchema,
        otherMoves: Type.Array(apocalypseWorldDetailedListItemSchema),
        hold: Type.String(),
        gearAndBarter: Type.String(),
        notes: Type.String(),
        // playbooks
        angel: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                stock: Type.String()
            },
            {
                additionalProperties: false
            }
        ),
        battleBabe: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                customWeapons: Type.String()
            },
            {
                additionalProperties: false
            }
        ),
        brainer: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                brainerGear: Type.Array(apocalypseWorldBasicListItemSchema)
            },
            {
                additionalProperties: false
            }
        ),
        chopper: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                gang: apocalypseWorldCharacterChopperGangSchema,
                bike: apocalypseWorldCharacterChopperBikeSchema
            },
            {
                additionalProperties: false
            }
        ),
        driver: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                cars: Type.Array(apocalypseWorldCharacterDriverCarSchema)
            },
            {
                additionalProperties: false
            }
        ),
        gunLugger: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                fuckOffBigGuns: Type.Array(apocalypseWorldBasicListItemSchema),
                seriousGuns: Type.Array(apocalypseWorldBasicListItemSchema),
                backupWeapons: Type.Array(apocalypseWorldBasicListItemSchema),
                weaponsArmor: Type.String()
            },
            {
                additionalProperties: false
            }
        ),
        hardHolder: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                holding: apocalypseWorldCharacterHardHolderHoldingSchema
            },
            {
                additionalProperties: false
            }
        ),
        hocus: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                followers: apocalypseWorldCharacterHocusFollowersSchema
            },
            {
                additionalProperties: false
            }
        ),
        operator: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                payingGigs: Type.Array(apocalypseWorldBasicListItemSchema),
                obligationGigs: Type.Array(apocalypseWorldBasicListItemSchema),
                crewContacts: Type.String()
            },
            {
                additionalProperties: false
            }
        ),
        savvyHead: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema)
            },
            {
                additionalProperties: false
            }
        ),
        skinner: Type.Object(
            {
                moves: Type.Array(apocalypseWorldBasicListItemSchema),
                improvements: Type.Array(apocalypseWorldImprovementSchema),
                graciousWeapons: Type.Array(apocalypseWorldBasicListItemSchema),
                luxeGear: Type.Array(apocalypseWorldBasicListItemSchema)
            },
            {
                additionalProperties: false
            }
        )
    },
    {
        additionalProperties: false
    }
);
