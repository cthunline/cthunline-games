export declare const apocalypseWorldPlaybookSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"angel">, import("@sinclair/typebox").TLiteral<"battleBabe">, import("@sinclair/typebox").TLiteral<"brainer">, import("@sinclair/typebox").TLiteral<"chopper">, import("@sinclair/typebox").TLiteral<"driver">, import("@sinclair/typebox").TLiteral<"gunLugger">, import("@sinclair/typebox").TLiteral<"hardHolder">, import("@sinclair/typebox").TLiteral<"hocus">, import("@sinclair/typebox").TLiteral<"operator">, import("@sinclair/typebox").TLiteral<"savvyHead">, import("@sinclair/typebox").TLiteral<"skinner">]>;
export declare const apocalypseWorldBioSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    look: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldStatSchema: import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TString;
    highlighted: import("@sinclair/typebox").TBoolean;
}>;
export declare const apocalypseWorldStatsSchema: import("@sinclair/typebox").TObject<{
    cool: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        highlighted: import("@sinclair/typebox").TBoolean;
    }>;
    hard: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        highlighted: import("@sinclair/typebox").TBoolean;
    }>;
    hot: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        highlighted: import("@sinclair/typebox").TBoolean;
    }>;
    sharp: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        highlighted: import("@sinclair/typebox").TBoolean;
    }>;
    weird: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        highlighted: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const apocalypseWorldHxSchema: import("@sinclair/typebox").TObject<{
    character: import("@sinclair/typebox").TString;
    value: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldHarmSchema: import("@sinclair/typebox").TObject<{
    countdown: import("@sinclair/typebox").TInteger;
    stabilized: import("@sinclair/typebox").TBoolean;
    shattered: import("@sinclair/typebox").TBoolean;
    crippled: import("@sinclair/typebox").TBoolean;
    disfigured: import("@sinclair/typebox").TBoolean;
    broken: import("@sinclair/typebox").TBoolean;
}>;
export declare const apocalypseWorldImprovementSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enabled: import("@sinclair/typebox").TBoolean;
}>;
export declare const apocalypseWorldExperienceSchema: import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TInteger;
    commonImprovements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export declare const apocalypseWorldBasicListItemSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enabled: import("@sinclair/typebox").TBoolean;
}>;
export declare const apocalypseWorldDetailedListItemSchema: import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    enabled: import("@sinclair/typebox").TBoolean;
}>;
export declare const apocalypseWorldCharacterChopperGangSchema: import("@sinclair/typebox").TObject<{
    size: import("@sinclair/typebox").TString;
    harm: import("@sinclair/typebox").TString;
    armor: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TString;
    advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
    problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export declare const apocalypseWorldCharacterChopperBikeSchema: import("@sinclair/typebox").TObject<{
    strengths: import("@sinclair/typebox").TString;
    looks: import("@sinclair/typebox").TString;
    weaknesses: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldCharacterDriverCarSchema: import("@sinclair/typebox").TObject<{
    frame: import("@sinclair/typebox").TString;
    power: import("@sinclair/typebox").TString;
    looks: import("@sinclair/typebox").TString;
    armor: import("@sinclair/typebox").TString;
    weak: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldCharacterHardHolderHoldingStatsSchema: import("@sinclair/typebox").TObject<{
    size: import("@sinclair/typebox").TString;
    surplus: import("@sinclair/typebox").TString;
    barter: import("@sinclair/typebox").TString;
    gigs: import("@sinclair/typebox").TString;
    want: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldCharacterHardHolderGangSchema: import("@sinclair/typebox").TObject<{
    size: import("@sinclair/typebox").TString;
    harm: import("@sinclair/typebox").TString;
    armor: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TString;
}>;
export declare const apocalypseWorldCharacterHardHolderHoldingSchema: import("@sinclair/typebox").TObject<{
    holdingStats: import("@sinclair/typebox").TObject<{
        size: import("@sinclair/typebox").TString;
        surplus: import("@sinclair/typebox").TString;
        barter: import("@sinclair/typebox").TString;
        gigs: import("@sinclair/typebox").TString;
        want: import("@sinclair/typebox").TString;
    }>;
    gang: import("@sinclair/typebox").TObject<{
        size: import("@sinclair/typebox").TString;
        harm: import("@sinclair/typebox").TString;
        armor: import("@sinclair/typebox").TString;
        tags: import("@sinclair/typebox").TString;
    }>;
    advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
    problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export declare const apocalypseWorldCharacterHocusFollowersSchema: import("@sinclair/typebox").TObject<{
    description: import("@sinclair/typebox").TString;
    surplus: import("@sinclair/typebox").TString;
    barter: import("@sinclair/typebox").TString;
    fortune: import("@sinclair/typebox").TString;
    want: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
    advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
    problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export declare const apocalypseWorldCharacterSchema: import("@sinclair/typebox").TObject<{
    playbook: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"angel">, import("@sinclair/typebox").TLiteral<"battleBabe">, import("@sinclair/typebox").TLiteral<"brainer">, import("@sinclair/typebox").TLiteral<"chopper">, import("@sinclair/typebox").TLiteral<"driver">, import("@sinclair/typebox").TLiteral<"gunLugger">, import("@sinclair/typebox").TLiteral<"hardHolder">, import("@sinclair/typebox").TLiteral<"hocus">, import("@sinclair/typebox").TLiteral<"operator">, import("@sinclair/typebox").TLiteral<"savvyHead">, import("@sinclair/typebox").TLiteral<"skinner">]>;
    bio: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        look: import("@sinclair/typebox").TString;
    }>;
    stats: import("@sinclair/typebox").TObject<{
        cool: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            highlighted: import("@sinclair/typebox").TBoolean;
        }>;
        hard: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            highlighted: import("@sinclair/typebox").TBoolean;
        }>;
        hot: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            highlighted: import("@sinclair/typebox").TBoolean;
        }>;
        sharp: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            highlighted: import("@sinclair/typebox").TBoolean;
        }>;
        weird: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            highlighted: import("@sinclair/typebox").TBoolean;
        }>;
    }>;
    hx: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        character: import("@sinclair/typebox").TString;
        value: import("@sinclair/typebox").TString;
    }>>;
    harm: import("@sinclair/typebox").TObject<{
        countdown: import("@sinclair/typebox").TInteger;
        stabilized: import("@sinclair/typebox").TBoolean;
        shattered: import("@sinclair/typebox").TBoolean;
        crippled: import("@sinclair/typebox").TBoolean;
        disfigured: import("@sinclair/typebox").TBoolean;
        broken: import("@sinclair/typebox").TBoolean;
    }>;
    experience: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TInteger;
        commonImprovements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
    otherMoves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        enabled: import("@sinclair/typebox").TBoolean;
    }>>;
    hold: import("@sinclair/typebox").TString;
    gearAndBarter: import("@sinclair/typebox").TString;
    notes: import("@sinclair/typebox").TString;
    angel: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        stock: import("@sinclair/typebox").TString;
    }>;
    battleBabe: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        customWeapons: import("@sinclair/typebox").TString;
    }>;
    brainer: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        brainerGear: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
    chopper: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        gang: import("@sinclair/typebox").TObject<{
            size: import("@sinclair/typebox").TString;
            harm: import("@sinclair/typebox").TString;
            armor: import("@sinclair/typebox").TString;
            tags: import("@sinclair/typebox").TString;
            advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
        }>;
        bike: import("@sinclair/typebox").TObject<{
            strengths: import("@sinclair/typebox").TString;
            looks: import("@sinclair/typebox").TString;
            weaknesses: import("@sinclair/typebox").TString;
        }>;
    }>;
    driver: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        cars: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            frame: import("@sinclair/typebox").TString;
            power: import("@sinclair/typebox").TString;
            looks: import("@sinclair/typebox").TString;
            armor: import("@sinclair/typebox").TString;
            weak: import("@sinclair/typebox").TString;
            tags: import("@sinclair/typebox").TString;
        }>>;
    }>;
    gunLugger: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        fuckOffBigGuns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        seriousGuns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        backupWeapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        weaponsArmor: import("@sinclair/typebox").TString;
    }>;
    hardHolder: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        holding: import("@sinclair/typebox").TObject<{
            holdingStats: import("@sinclair/typebox").TObject<{
                size: import("@sinclair/typebox").TString;
                surplus: import("@sinclair/typebox").TString;
                barter: import("@sinclair/typebox").TString;
                gigs: import("@sinclair/typebox").TString;
                want: import("@sinclair/typebox").TString;
            }>;
            gang: import("@sinclair/typebox").TObject<{
                size: import("@sinclair/typebox").TString;
                harm: import("@sinclair/typebox").TString;
                armor: import("@sinclair/typebox").TString;
                tags: import("@sinclair/typebox").TString;
            }>;
            advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
        }>;
    }>;
    hocus: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        followers: import("@sinclair/typebox").TObject<{
            description: import("@sinclair/typebox").TString;
            surplus: import("@sinclair/typebox").TString;
            barter: import("@sinclair/typebox").TString;
            fortune: import("@sinclair/typebox").TString;
            want: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
        }>;
    }>;
    operator: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        payingGigs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        obligationGigs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        crewContacts: import("@sinclair/typebox").TString;
    }>;
    savvyHead: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
    skinner: import("@sinclair/typebox").TObject<{
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        improvements: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        graciousWeapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        luxeGear: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
}>;
