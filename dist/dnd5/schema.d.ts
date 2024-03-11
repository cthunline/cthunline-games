export declare const dnd5BiographySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    class: import("@sinclair/typebox").TString;
    level: import("@sinclair/typebox").TInteger;
    background: import("@sinclair/typebox").TString;
    race: import("@sinclair/typebox").TString;
    alignment: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
}>;
export declare const dnd5StorySchema: import("@sinclair/typebox").TObject<{
    backstory: import("@sinclair/typebox").TString;
    personalityTraits: import("@sinclair/typebox").TString;
    ideals: import("@sinclair/typebox").TString;
    bonds: import("@sinclair/typebox").TString;
    flaws: import("@sinclair/typebox").TString;
    alliesAndOrganizations: import("@sinclair/typebox").TString;
}>;
export declare const dnd5StatisticsSchema: import("@sinclair/typebox").TObject<{
    experiencePoints: import("@sinclair/typebox").TInteger;
    inspiration: import("@sinclair/typebox").TInteger;
    proficiencyBonus: import("@sinclair/typebox").TInteger;
    passiveWisdom: import("@sinclair/typebox").TInteger;
}>;
export declare const dnd5AbilitySchema: import("@sinclair/typebox").TObject<{
    modifier: import("@sinclair/typebox").TInteger;
    score: import("@sinclair/typebox").TInteger;
}>;
export declare const dnd5AbilitiesSchema: import("@sinclair/typebox").TObject<{
    strength: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
    dexterity: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
    constitution: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
    intelligence: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
    wisdom: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
    charisma: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        score: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const dnd5SkillSchema: import("@sinclair/typebox").TObject<{
    modifier: import("@sinclair/typebox").TInteger;
    proficient: import("@sinclair/typebox").TBoolean;
}>;
export declare const dnd5SavingThrowsSchema: import("@sinclair/typebox").TObject<{
    strength: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    constitution: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    dexterity: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    intelligence: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    wisdom: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    charisma: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const dnd5SkillsSchema: import("@sinclair/typebox").TObject<{
    acrobatics: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    animalHandling: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    arcana: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    athletics: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    deception: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    history: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    insight: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    intimidation: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    investigation: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    medicine: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    nature: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    perception: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    performance: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    persuasion: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    religion: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    sleightOfHand: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    stealth: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
    survival: import("@sinclair/typebox").TObject<{
        modifier: import("@sinclair/typebox").TInteger;
        proficient: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const dnd5HitPointsSchema: import("@sinclair/typebox").TObject<{
    maximum: import("@sinclair/typebox").TInteger;
    current: import("@sinclair/typebox").TInteger;
    temporary: import("@sinclair/typebox").TInteger;
}>;
export declare const dnd5DeathSavesSchema: import("@sinclair/typebox").TObject<{
    successes: import("@sinclair/typebox").TInteger;
    failures: import("@sinclair/typebox").TInteger;
}>;
export declare const dnd5CombatSchema: import("@sinclair/typebox").TObject<{
    armorClass: import("@sinclair/typebox").TInteger;
    initiative: import("@sinclair/typebox").TInteger;
    speed: import("@sinclair/typebox").TInteger;
    hitPoints: import("@sinclair/typebox").TObject<{
        maximum: import("@sinclair/typebox").TInteger;
        current: import("@sinclair/typebox").TInteger;
        temporary: import("@sinclair/typebox").TInteger;
    }>;
    hitDice: import("@sinclair/typebox").TString;
    deathSaves: import("@sinclair/typebox").TObject<{
        successes: import("@sinclair/typebox").TInteger;
        failures: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const dnd5AttackSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    attackBonus: import("@sinclair/typebox").TInteger;
    damage: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TString;
}>;
export declare const dnd5FeaturesSchema: import("@sinclair/typebox").TObject<{
    featuresAndTraits: import("@sinclair/typebox").TString;
    proficienciesAndLanguages: import("@sinclair/typebox").TString;
}>;
export declare const dnd5MoneySchema: import("@sinclair/typebox").TObject<{
    copper: import("@sinclair/typebox").TInteger;
    silver: import("@sinclair/typebox").TInteger;
    electrum: import("@sinclair/typebox").TInteger;
    gold: import("@sinclair/typebox").TInteger;
    platinum: import("@sinclair/typebox").TInteger;
}>;
export declare const dnd5EquipmentSchema: import("@sinclair/typebox").TObject<{
    money: import("@sinclair/typebox").TObject<{
        copper: import("@sinclair/typebox").TInteger;
        silver: import("@sinclair/typebox").TInteger;
        electrum: import("@sinclair/typebox").TInteger;
        gold: import("@sinclair/typebox").TInteger;
        platinum: import("@sinclair/typebox").TInteger;
    }>;
    items: import("@sinclair/typebox").TString;
    treasure: import("@sinclair/typebox").TString;
}>;
export declare const dnd5SpellSchema: import("@sinclair/typebox").TObject<{
    prepared: import("@sinclair/typebox").TBoolean;
    name: import("@sinclair/typebox").TString;
}>;
export declare const dnd5SpellLevelSchema: import("@sinclair/typebox").TObject<{
    level: import("@sinclair/typebox").TInteger;
    slotsTotal: import("@sinclair/typebox").TInteger;
    slotsExpended: import("@sinclair/typebox").TInteger;
    spells: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        prepared: import("@sinclair/typebox").TBoolean;
        name: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const dnd5SpellcastingSchema: import("@sinclair/typebox").TObject<{
    class: import("@sinclair/typebox").TString;
    spellAbility: import("@sinclair/typebox").TInteger;
    spellSaveDC: import("@sinclair/typebox").TInteger;
    spellAttackBonus: import("@sinclair/typebox").TInteger;
    cantrips: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    levels: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        level: import("@sinclair/typebox").TInteger;
        slotsTotal: import("@sinclair/typebox").TInteger;
        slotsExpended: import("@sinclair/typebox").TInteger;
        spells: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            prepared: import("@sinclair/typebox").TBoolean;
            name: import("@sinclair/typebox").TString;
        }>>;
    }>>;
}>;
export declare const dnd5CharacterSchema: import("@sinclair/typebox").TObject<{
    biography: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        class: import("@sinclair/typebox").TString;
        level: import("@sinclair/typebox").TInteger;
        background: import("@sinclair/typebox").TString;
        race: import("@sinclair/typebox").TString;
        alignment: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
    }>;
    story: import("@sinclair/typebox").TObject<{
        backstory: import("@sinclair/typebox").TString;
        personalityTraits: import("@sinclair/typebox").TString;
        ideals: import("@sinclair/typebox").TString;
        bonds: import("@sinclair/typebox").TString;
        flaws: import("@sinclair/typebox").TString;
        alliesAndOrganizations: import("@sinclair/typebox").TString;
    }>;
    statistics: import("@sinclair/typebox").TObject<{
        experiencePoints: import("@sinclair/typebox").TInteger;
        inspiration: import("@sinclair/typebox").TInteger;
        proficiencyBonus: import("@sinclair/typebox").TInteger;
        passiveWisdom: import("@sinclair/typebox").TInteger;
    }>;
    abilities: import("@sinclair/typebox").TObject<{
        strength: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
        dexterity: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
        constitution: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
        intelligence: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
        wisdom: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
        charisma: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            score: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    savingThrows: import("@sinclair/typebox").TObject<{
        strength: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        constitution: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        dexterity: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        intelligence: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        wisdom: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        charisma: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
    }>;
    skills: import("@sinclair/typebox").TObject<{
        acrobatics: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        animalHandling: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        arcana: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        athletics: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        deception: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        history: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        insight: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        intimidation: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        investigation: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        medicine: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        nature: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        perception: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        performance: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        persuasion: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        religion: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        sleightOfHand: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        stealth: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
        survival: import("@sinclair/typebox").TObject<{
            modifier: import("@sinclair/typebox").TInteger;
            proficient: import("@sinclair/typebox").TBoolean;
        }>;
    }>;
    combat: import("@sinclair/typebox").TObject<{
        armorClass: import("@sinclair/typebox").TInteger;
        initiative: import("@sinclair/typebox").TInteger;
        speed: import("@sinclair/typebox").TInteger;
        hitPoints: import("@sinclair/typebox").TObject<{
            maximum: import("@sinclair/typebox").TInteger;
            current: import("@sinclair/typebox").TInteger;
            temporary: import("@sinclair/typebox").TInteger;
        }>;
        hitDice: import("@sinclair/typebox").TString;
        deathSaves: import("@sinclair/typebox").TObject<{
            successes: import("@sinclair/typebox").TInteger;
            failures: import("@sinclair/typebox").TInteger;
        }>;
    }>;
    attacks: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        attackBonus: import("@sinclair/typebox").TInteger;
        damage: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TString;
    }>>;
    features: import("@sinclair/typebox").TObject<{
        featuresAndTraits: import("@sinclair/typebox").TString;
        proficienciesAndLanguages: import("@sinclair/typebox").TString;
    }>;
    spellcasting: import("@sinclair/typebox").TObject<{
        class: import("@sinclair/typebox").TString;
        spellAbility: import("@sinclair/typebox").TInteger;
        spellSaveDC: import("@sinclair/typebox").TInteger;
        spellAttackBonus: import("@sinclair/typebox").TInteger;
        cantrips: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        levels: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            level: import("@sinclair/typebox").TInteger;
            slotsTotal: import("@sinclair/typebox").TInteger;
            slotsExpended: import("@sinclair/typebox").TInteger;
            spells: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                prepared: import("@sinclair/typebox").TBoolean;
                name: import("@sinclair/typebox").TString;
            }>>;
        }>>;
    }>;
    equipment: import("@sinclair/typebox").TObject<{
        money: import("@sinclair/typebox").TObject<{
            copper: import("@sinclair/typebox").TInteger;
            silver: import("@sinclair/typebox").TInteger;
            electrum: import("@sinclair/typebox").TInteger;
            gold: import("@sinclair/typebox").TInteger;
            platinum: import("@sinclair/typebox").TInteger;
        }>;
        items: import("@sinclair/typebox").TString;
        treasure: import("@sinclair/typebox").TString;
    }>;
}>;
