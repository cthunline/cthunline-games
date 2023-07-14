export declare const cocBiographySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    birthPlace: import("@sinclair/typebox").TString;
    occupation: import("@sinclair/typebox").TString;
    residence: import("@sinclair/typebox").TString;
    age: import("@sinclair/typebox").TInteger;
}>;
export declare const cocCharacteristicSchema: import("@sinclair/typebox").TObject<{
    regular: import("@sinclair/typebox").TInteger;
    half: import("@sinclair/typebox").TInteger;
    fifth: import("@sinclair/typebox").TInteger;
}>;
export declare const cocPointSchema: import("@sinclair/typebox").TObject<{
    maximum: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
}>;
export declare const cocPointsSchema: import("@sinclair/typebox").TObject<{
    hitPoints: import("@sinclair/typebox").TObject<{
        maximum: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    magicPoints: import("@sinclair/typebox").TObject<{
        maximum: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const cocLuckSchema: import("@sinclair/typebox").TObject<{
    starting: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
}>;
export declare const cocSanitySchema: import("@sinclair/typebox").TObject<{
    starting: import("@sinclair/typebox").TInteger;
    maximum: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
}>;
export declare const cocCharacteristicsSchema: import("@sinclair/typebox").TObject<{
    strength: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    constitution: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    size: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    dexterity: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    appearance: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    intelligence: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    power: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
    education: import("@sinclair/typebox").TObject<{
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const cocStatusSchema: import("@sinclair/typebox").TObject<{
    temporaryInsanity: import("@sinclair/typebox").TBoolean;
    indefiniteInsanity: import("@sinclair/typebox").TBoolean;
    majorWound: import("@sinclair/typebox").TBoolean;
    unconscious: import("@sinclair/typebox").TBoolean;
    dying: import("@sinclair/typebox").TBoolean;
}>;
export declare const cocSkillSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    base: import("@sinclair/typebox").TString;
    development: import("@sinclair/typebox").TBoolean;
    developed: import("@sinclair/typebox").TBoolean;
    regular: import("@sinclair/typebox").TInteger;
    half: import("@sinclair/typebox").TInteger;
    fifth: import("@sinclair/typebox").TInteger;
}>;
export declare const cocCombatSchema: import("@sinclair/typebox").TObject<{
    move: import("@sinclair/typebox").TInteger;
    build: import("@sinclair/typebox").TString;
    damageBonus: import("@sinclair/typebox").TString;
}>;
export declare const cocWeaponSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    damage: import("@sinclair/typebox").TString;
    attacks: import("@sinclair/typebox").TString;
    range: import("@sinclair/typebox").TString;
    ammo: import("@sinclair/typebox").TString;
    malfunction: import("@sinclair/typebox").TString;
}>;
export declare const cocStorySchema: import("@sinclair/typebox").TObject<{
    story: import("@sinclair/typebox").TString;
    personalDescription: import("@sinclair/typebox").TString;
    ideologyAndBeliefs: import("@sinclair/typebox").TString;
    significantPeople: import("@sinclair/typebox").TString;
    meaningfulLocations: import("@sinclair/typebox").TString;
    treasuredPossessions: import("@sinclair/typebox").TString;
    traits: import("@sinclair/typebox").TString;
    injuriesAndScars: import("@sinclair/typebox").TString;
    phobiasAndManias: import("@sinclair/typebox").TString;
    arcaneTomesAndSpells: import("@sinclair/typebox").TString;
    encountersWithStrangeEntities: import("@sinclair/typebox").TString;
    gearAndPossessions: import("@sinclair/typebox").TString;
    fellowInvestigators: import("@sinclair/typebox").TString;
    spendingLevel: import("@sinclair/typebox").TString;
    cash: import("@sinclair/typebox").TString;
    assets: import("@sinclair/typebox").TString;
}>;
export declare const cocCharacterSchema: import("@sinclair/typebox").TObject<{
    biography: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        birthPlace: import("@sinclair/typebox").TString;
        occupation: import("@sinclair/typebox").TString;
        residence: import("@sinclair/typebox").TString;
        age: import("@sinclair/typebox").TInteger;
    }>;
    characteristics: import("@sinclair/typebox").TObject<{
        strength: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        constitution: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        size: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        dexterity: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        appearance: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        intelligence: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        power: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
        education: import("@sinclair/typebox").TObject<{
            regular: import("@sinclair/typebox").TInteger;
            half: import("@sinclair/typebox").TInteger;
            fifth: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    points: import("@sinclair/typebox").TObject<{
        hitPoints: import("@sinclair/typebox").TObject<{
            maximum: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        magicPoints: import("@sinclair/typebox").TObject<{
            maximum: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    luck: import("@sinclair/typebox").TObject<{
        starting: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    sanity: import("@sinclair/typebox").TObject<{
        starting: import("@sinclair/typebox").TInteger;
        maximum: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    status: import("@sinclair/typebox").TObject<{
        temporaryInsanity: import("@sinclair/typebox").TBoolean;
        indefiniteInsanity: import("@sinclair/typebox").TBoolean;
        majorWound: import("@sinclair/typebox").TBoolean;
        unconscious: import("@sinclair/typebox").TBoolean;
        dying: import("@sinclair/typebox").TBoolean;
    }>;
    skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        base: import("@sinclair/typebox").TString;
        development: import("@sinclair/typebox").TBoolean;
        developed: import("@sinclair/typebox").TBoolean;
        regular: import("@sinclair/typebox").TInteger;
        half: import("@sinclair/typebox").TInteger;
        fifth: import("@sinclair/typebox").TInteger;
    }>>;
    combat: import("@sinclair/typebox").TObject<{
        move: import("@sinclair/typebox").TInteger;
        build: import("@sinclair/typebox").TString;
        damageBonus: import("@sinclair/typebox").TString;
    }>;
    weapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        damage: import("@sinclair/typebox").TString;
        attacks: import("@sinclair/typebox").TString;
        range: import("@sinclair/typebox").TString;
        ammo: import("@sinclair/typebox").TString;
        malfunction: import("@sinclair/typebox").TString;
    }>>;
    story: import("@sinclair/typebox").TObject<{
        story: import("@sinclair/typebox").TString;
        personalDescription: import("@sinclair/typebox").TString;
        ideologyAndBeliefs: import("@sinclair/typebox").TString;
        significantPeople: import("@sinclair/typebox").TString;
        meaningfulLocations: import("@sinclair/typebox").TString;
        treasuredPossessions: import("@sinclair/typebox").TString;
        traits: import("@sinclair/typebox").TString;
        injuriesAndScars: import("@sinclair/typebox").TString;
        phobiasAndManias: import("@sinclair/typebox").TString;
        arcaneTomesAndSpells: import("@sinclair/typebox").TString;
        encountersWithStrangeEntities: import("@sinclair/typebox").TString;
        gearAndPossessions: import("@sinclair/typebox").TString;
        fellowInvestigators: import("@sinclair/typebox").TString;
        spendingLevel: import("@sinclair/typebox").TString;
        cash: import("@sinclair/typebox").TString;
        assets: import("@sinclair/typebox").TString;
    }>;
}>;
