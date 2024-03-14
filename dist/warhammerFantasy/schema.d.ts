export declare const warhammerFantasyBiographySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    species: import("@sinclair/typebox").TString;
    class: import("@sinclair/typebox").TString;
    career: import("@sinclair/typebox").TString;
    careerLevel: import("@sinclair/typebox").TString;
    careerPath: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
    age: import("@sinclair/typebox").TString;
    height: import("@sinclair/typebox").TString;
    hair: import("@sinclair/typebox").TString;
    eyes: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyCharacteristicSchema: import("@sinclair/typebox").TObject<{
    initial: import("@sinclair/typebox").TInteger;
    advances: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyCharacteristicsSchema: import("@sinclair/typebox").TObject<{
    weaponSkill: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    ballisticSkill: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    strength: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    toughness: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    initiative: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    agility: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    dexterity: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    intelligence: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    willpower: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
    fellowship: import("@sinclair/typebox").TObject<{
        initial: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const warhammerFantasyCharacteristicName: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"strength">, import("@sinclair/typebox").TLiteral<"dexterity">, import("@sinclair/typebox").TLiteral<"intelligence">, import("@sinclair/typebox").TLiteral<"initiative">, import("@sinclair/typebox").TLiteral<"weaponSkill">, import("@sinclair/typebox").TLiteral<"ballisticSkill">, import("@sinclair/typebox").TLiteral<"toughness">, import("@sinclair/typebox").TLiteral<"agility">, import("@sinclair/typebox").TLiteral<"willpower">, import("@sinclair/typebox").TLiteral<"fellowship">]>;
export declare const warhammerFantasyFateSchema: import("@sinclair/typebox").TObject<{
    fate: import("@sinclair/typebox").TInteger;
    fortune: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyResilienceSchema: import("@sinclair/typebox").TObject<{
    resilience: import("@sinclair/typebox").TInteger;
    resolve: import("@sinclair/typebox").TInteger;
    motivation: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyExperienceSchema: import("@sinclair/typebox").TObject<{
    current: import("@sinclair/typebox").TInteger;
    spent: import("@sinclair/typebox").TInteger;
    total: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyMovementSchema: import("@sinclair/typebox").TObject<{
    movement: import("@sinclair/typebox").TInteger;
    walk: import("@sinclair/typebox").TInteger;
    run: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyBasicSkillsSchema: import("@sinclair/typebox").TObject<{
    art: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"dexterity">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    gossip: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    athletics: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    haggle: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    bribery: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    intimidate: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    charm: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    intuition: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    charmAnimal: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    leadership: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    climb: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    meleeBasic: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    cool: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    melee: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    consumeAlcohol: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    navigation: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    dodge: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    outdoorSurvival: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    drive: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    perception: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    endurance: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    ride: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    entertain: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    row: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    gamble: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
    stealth: import("@sinclair/typebox").TObject<{
        characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const warhammerFantasyBasicSkillName: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"athletics">, import("@sinclair/typebox").TLiteral<"perception">, import("@sinclair/typebox").TLiteral<"stealth">, import("@sinclair/typebox").TLiteral<"intimidate">, import("@sinclair/typebox").TLiteral<"ride">, import("@sinclair/typebox").TLiteral<"art">, import("@sinclair/typebox").TLiteral<"gossip">, import("@sinclair/typebox").TLiteral<"haggle">, import("@sinclair/typebox").TLiteral<"bribery">, import("@sinclair/typebox").TLiteral<"charm">, import("@sinclair/typebox").TLiteral<"intuition">, import("@sinclair/typebox").TLiteral<"charmAnimal">, import("@sinclair/typebox").TLiteral<"leadership">, import("@sinclair/typebox").TLiteral<"climb">, import("@sinclair/typebox").TLiteral<"meleeBasic">, import("@sinclair/typebox").TLiteral<"cool">, import("@sinclair/typebox").TLiteral<"melee">, import("@sinclair/typebox").TLiteral<"consumeAlcohol">, import("@sinclair/typebox").TLiteral<"navigation">, import("@sinclair/typebox").TLiteral<"dodge">, import("@sinclair/typebox").TLiteral<"outdoorSurvival">, import("@sinclair/typebox").TLiteral<"drive">, import("@sinclair/typebox").TLiteral<"endurance">, import("@sinclair/typebox").TLiteral<"entertain">, import("@sinclair/typebox").TLiteral<"row">, import("@sinclair/typebox").TLiteral<"gamble">]>;
export declare const warhammerFantasyOtherSkillSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    characteristicName: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"strength">, import("@sinclair/typebox").TLiteral<"dexterity">, import("@sinclair/typebox").TLiteral<"intelligence">, import("@sinclair/typebox").TLiteral<"initiative">, import("@sinclair/typebox").TLiteral<"weaponSkill">, import("@sinclair/typebox").TLiteral<"ballisticSkill">, import("@sinclair/typebox").TLiteral<"toughness">, import("@sinclair/typebox").TLiteral<"agility">, import("@sinclair/typebox").TLiteral<"willpower">, import("@sinclair/typebox").TLiteral<"fellowship">]>;
    characteristicScore: import("@sinclair/typebox").TInteger;
    advances: import("@sinclair/typebox").TInteger;
    skill: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyTalentSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    timesTaken: import("@sinclair/typebox").TInteger;
    description: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyAmbitionsSchema: import("@sinclair/typebox").TObject<{
    shortTerm: import("@sinclair/typebox").TString;
    longTerm: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyPartySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    shortTerm: import("@sinclair/typebox").TString;
    longTerm: import("@sinclair/typebox").TString;
    members: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyArmourSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    locations: import("@sinclair/typebox").TString;
    encumbrance: import("@sinclair/typebox").TString;
    armourPoints: import("@sinclair/typebox").TInteger;
    qualities: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyArmourPointsSchema: import("@sinclair/typebox").TObject<{
    head: import("@sinclair/typebox").TInteger;
    rightArm: import("@sinclair/typebox").TInteger;
    leftArm: import("@sinclair/typebox").TInteger;
    body: import("@sinclair/typebox").TInteger;
    rightLeg: import("@sinclair/typebox").TInteger;
    leftLeg: import("@sinclair/typebox").TInteger;
    shield: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyTrappingSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    encumbrance: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyWealthSchema: import("@sinclair/typebox").TObject<{
    brassPennies: import("@sinclair/typebox").TInteger;
    silverShillings: import("@sinclair/typebox").TInteger;
    goldCrowns: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyEncumbranceSchema: import("@sinclair/typebox").TObject<{
    weapons: import("@sinclair/typebox").TInteger;
    armour: import("@sinclair/typebox").TInteger;
    trappings: import("@sinclair/typebox").TInteger;
    maximum: import("@sinclair/typebox").TInteger;
    total: import("@sinclair/typebox").TInteger;
}>;
export declare const warhammerFantasyWoundsSchema: import("@sinclair/typebox").TObject<{
    strengthBonus: import("@sinclair/typebox").TInteger;
    twiceToughnessBonus: import("@sinclair/typebox").TInteger;
    willpowerBonus: import("@sinclair/typebox").TInteger;
    hardy: import("@sinclair/typebox").TBoolean;
    total: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
    notes: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyWeaponSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    group: import("@sinclair/typebox").TString;
    encumbrance: import("@sinclair/typebox").TString;
    rangeReach: import("@sinclair/typebox").TString;
    damage: import("@sinclair/typebox").TString;
    qualities: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasySpellsSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    castingNumber: import("@sinclair/typebox").TInteger;
    range: import("@sinclair/typebox").TString;
    target: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TString;
    effect: import("@sinclair/typebox").TString;
}>;
export declare const warhammerFantasyCharacterSchema: import("@sinclair/typebox").TObject<{
    biography: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        species: import("@sinclair/typebox").TString;
        class: import("@sinclair/typebox").TString;
        career: import("@sinclair/typebox").TString;
        careerLevel: import("@sinclair/typebox").TString;
        careerPath: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TString;
        age: import("@sinclair/typebox").TString;
        height: import("@sinclair/typebox").TString;
        hair: import("@sinclair/typebox").TString;
        eyes: import("@sinclair/typebox").TString;
    }>;
    characteristics: import("@sinclair/typebox").TObject<{
        weaponSkill: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        ballisticSkill: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        strength: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        toughness: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        initiative: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        agility: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        dexterity: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        intelligence: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        willpower: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
        fellowship: import("@sinclair/typebox").TObject<{
            initial: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    fate: import("@sinclair/typebox").TObject<{
        fate: import("@sinclair/typebox").TInteger;
        fortune: import("@sinclair/typebox").TInteger;
    }>;
    resilience: import("@sinclair/typebox").TObject<{
        resilience: import("@sinclair/typebox").TInteger;
        resolve: import("@sinclair/typebox").TInteger;
        motivation: import("@sinclair/typebox").TInteger;
    }>;
    experience: import("@sinclair/typebox").TObject<{
        current: import("@sinclair/typebox").TInteger;
        spent: import("@sinclair/typebox").TInteger;
        total: import("@sinclair/typebox").TInteger;
    }>;
    movement: import("@sinclair/typebox").TObject<{
        movement: import("@sinclair/typebox").TInteger;
        walk: import("@sinclair/typebox").TInteger;
        run: import("@sinclair/typebox").TInteger;
    }>;
    basicSkills: import("@sinclair/typebox").TObject<{
        art: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"dexterity">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        gossip: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        athletics: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        haggle: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        bribery: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        intimidate: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        charm: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        intuition: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        charmAnimal: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        leadership: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        climb: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        meleeBasic: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        cool: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        melee: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        consumeAlcohol: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        navigation: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        dodge: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        outdoorSurvival: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        drive: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        perception: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        endurance: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        ride: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        entertain: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        row: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        gamble: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
        stealth: import("@sinclair/typebox").TObject<{
            characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
            characteristicScore: import("@sinclair/typebox").TInteger;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    otherSkills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        characteristicName: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"strength">, import("@sinclair/typebox").TLiteral<"dexterity">, import("@sinclair/typebox").TLiteral<"intelligence">, import("@sinclair/typebox").TLiteral<"initiative">, import("@sinclair/typebox").TLiteral<"weaponSkill">, import("@sinclair/typebox").TLiteral<"ballisticSkill">, import("@sinclair/typebox").TLiteral<"toughness">, import("@sinclair/typebox").TLiteral<"agility">, import("@sinclair/typebox").TLiteral<"willpower">, import("@sinclair/typebox").TLiteral<"fellowship">]>;
        characteristicScore: import("@sinclair/typebox").TInteger;
        advances: import("@sinclair/typebox").TInteger;
        skill: import("@sinclair/typebox").TInteger;
    }>>;
    talents: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        timesTaken: import("@sinclair/typebox").TInteger;
        description: import("@sinclair/typebox").TString;
    }>>;
    ambitions: import("@sinclair/typebox").TObject<{
        shortTerm: import("@sinclair/typebox").TString;
        longTerm: import("@sinclair/typebox").TString;
    }>;
    party: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        shortTerm: import("@sinclair/typebox").TString;
        longTerm: import("@sinclair/typebox").TString;
        members: import("@sinclair/typebox").TString;
    }>;
    armour: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        locations: import("@sinclair/typebox").TString;
        encumbrance: import("@sinclair/typebox").TString;
        armourPoints: import("@sinclair/typebox").TInteger;
        qualities: import("@sinclair/typebox").TString;
    }>>;
    armourPoints: import("@sinclair/typebox").TObject<{
        head: import("@sinclair/typebox").TInteger;
        rightArm: import("@sinclair/typebox").TInteger;
        leftArm: import("@sinclair/typebox").TInteger;
        body: import("@sinclair/typebox").TInteger;
        rightLeg: import("@sinclair/typebox").TInteger;
        leftLeg: import("@sinclair/typebox").TInteger;
        shield: import("@sinclair/typebox").TInteger;
    }>;
    trappings: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        encumbrance: import("@sinclair/typebox").TString;
    }>>;
    psychology: import("@sinclair/typebox").TString;
    corruptionMutation: import("@sinclair/typebox").TString;
    wealth: import("@sinclair/typebox").TObject<{
        brassPennies: import("@sinclair/typebox").TInteger;
        silverShillings: import("@sinclair/typebox").TInteger;
        goldCrowns: import("@sinclair/typebox").TInteger;
    }>;
    encumbrance: import("@sinclair/typebox").TObject<{
        weapons: import("@sinclair/typebox").TInteger;
        armour: import("@sinclair/typebox").TInteger;
        trappings: import("@sinclair/typebox").TInteger;
        maximum: import("@sinclair/typebox").TInteger;
        total: import("@sinclair/typebox").TInteger;
    }>;
    wounds: import("@sinclair/typebox").TObject<{
        strengthBonus: import("@sinclair/typebox").TInteger;
        twiceToughnessBonus: import("@sinclair/typebox").TInteger;
        willpowerBonus: import("@sinclair/typebox").TInteger;
        hardy: import("@sinclair/typebox").TBoolean;
        total: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
        notes: import("@sinclair/typebox").TString;
    }>;
    weapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        group: import("@sinclair/typebox").TString;
        encumbrance: import("@sinclair/typebox").TString;
        rangeReach: import("@sinclair/typebox").TString;
        damage: import("@sinclair/typebox").TString;
        qualities: import("@sinclair/typebox").TString;
    }>>;
    spells: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        castingNumber: import("@sinclair/typebox").TInteger;
        range: import("@sinclair/typebox").TString;
        target: import("@sinclair/typebox").TString;
        duration: import("@sinclair/typebox").TString;
        effect: import("@sinclair/typebox").TString;
    }>>;
    sin: import("@sinclair/typebox").TInteger;
}>;
