export declare const swd6BiographySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    occupation: import("@sinclair/typebox").TString;
    species: import("@sinclair/typebox").TString;
    age: import("@sinclair/typebox").TInteger;
    height: import("@sinclair/typebox").TString;
    weight: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
}>;
export declare const swd6SkillSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    value: import("@sinclair/typebox").TString;
}>;
export declare const swd6AttributeDataSchema: import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TString;
    skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        value: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const swd6AttributesSchema: import("@sinclair/typebox").TObject<{
    dexterity: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
    knowledge: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
    mechanical: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
    perception: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
    strength: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
    technical: import("@sinclair/typebox").TObject<{
        value: import("@sinclair/typebox").TString;
        skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            value: import("@sinclair/typebox").TString;
        }>>;
    }>;
}>;
export declare const swd6StatisticsSchema: import("@sinclair/typebox").TObject<{
    move: import("@sinclair/typebox").TInteger;
    forceSensitive: import("@sinclair/typebox").TBoolean;
    forcePoints: import("@sinclair/typebox").TInteger;
    darkSidePoints: import("@sinclair/typebox").TInteger;
    characterPoints: import("@sinclair/typebox").TInteger;
}>;
export declare const swd6WoundStatusSchema: import("@sinclair/typebox").TObject<{
    stunned: import("@sinclair/typebox").TBoolean;
    wounded: import("@sinclair/typebox").TBoolean;
    doublyWounded: import("@sinclair/typebox").TBoolean;
    incapacitated: import("@sinclair/typebox").TBoolean;
    mortallyWounded: import("@sinclair/typebox").TBoolean;
}>;
export declare const swd6StorySchema: import("@sinclair/typebox").TObject<{
    equipment: import("@sinclair/typebox").TString;
    background: import("@sinclair/typebox").TString;
    personality: import("@sinclair/typebox").TString;
    objectives: import("@sinclair/typebox").TString;
    quote: import("@sinclair/typebox").TString;
    connections: import("@sinclair/typebox").TString;
}>;
export declare const swd6WeaponSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    damage: import("@sinclair/typebox").TString;
    shortRange: import("@sinclair/typebox").TString;
    mediumRange: import("@sinclair/typebox").TString;
    longRange: import("@sinclair/typebox").TString;
    ammo: import("@sinclair/typebox").TString;
}>;
export declare const swd6CharacterSchema: import("@sinclair/typebox").TObject<{
    biography: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        occupation: import("@sinclair/typebox").TString;
        species: import("@sinclair/typebox").TString;
        age: import("@sinclair/typebox").TInteger;
        height: import("@sinclair/typebox").TString;
        weight: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
    }>;
    attributes: import("@sinclair/typebox").TObject<{
        dexterity: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
        knowledge: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
        mechanical: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
        perception: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
        strength: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
        technical: import("@sinclair/typebox").TObject<{
            value: import("@sinclair/typebox").TString;
            skills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>>;
        }>;
    }>;
    abilities: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    statistics: import("@sinclair/typebox").TObject<{
        move: import("@sinclair/typebox").TInteger;
        forceSensitive: import("@sinclair/typebox").TBoolean;
        forcePoints: import("@sinclair/typebox").TInteger;
        darkSidePoints: import("@sinclair/typebox").TInteger;
        characterPoints: import("@sinclair/typebox").TInteger;
    }>;
    woundStatus: import("@sinclair/typebox").TObject<{
        stunned: import("@sinclair/typebox").TBoolean;
        wounded: import("@sinclair/typebox").TBoolean;
        doublyWounded: import("@sinclair/typebox").TBoolean;
        incapacitated: import("@sinclair/typebox").TBoolean;
        mortallyWounded: import("@sinclair/typebox").TBoolean;
    }>;
    weapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        damage: import("@sinclair/typebox").TString;
        shortRange: import("@sinclair/typebox").TString;
        mediumRange: import("@sinclair/typebox").TString;
        longRange: import("@sinclair/typebox").TString;
        ammo: import("@sinclair/typebox").TString;
    }>>;
    story: import("@sinclair/typebox").TObject<{
        equipment: import("@sinclair/typebox").TString;
        background: import("@sinclair/typebox").TString;
        personality: import("@sinclair/typebox").TString;
        objectives: import("@sinclair/typebox").TString;
        quote: import("@sinclair/typebox").TString;
        connections: import("@sinclair/typebox").TString;
    }>;
}>;
