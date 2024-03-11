declare const _default: {
    biography: {
        name: string;
        class: string;
        level: number;
        background: string;
        race: string;
        alignment: string;
        description: string;
    };
    story: {
        backstory: string;
        personalityTraits: string;
        ideals: string;
        bonds: string;
        flaws: string;
        alliesAndOrganizations: string;
    };
    statistics: {
        experiencePoints: number;
        inspiration: number;
        proficiencyBonus: number;
        passiveWisdom: number;
    };
    abilities: {
        strength: {
            modifier: number;
            score: number;
        };
        dexterity: {
            modifier: number;
            score: number;
        };
        constitution: {
            modifier: number;
            score: number;
        };
        intelligence: {
            modifier: number;
            score: number;
        };
        wisdom: {
            modifier: number;
            score: number;
        };
        charisma: {
            modifier: number;
            score: number;
        };
    };
    savingThrows: {
        strength: {
            modifier: number;
            proficient: boolean;
        };
        dexterity: {
            modifier: number;
            proficient: boolean;
        };
        constitution: {
            modifier: number;
            proficient: boolean;
        };
        intelligence: {
            modifier: number;
            proficient: boolean;
        };
        wisdom: {
            modifier: number;
            proficient: boolean;
        };
        charisma: {
            modifier: number;
            proficient: boolean;
        };
    };
    skills: {
        acrobatics: {
            modifier: number;
            proficient: boolean;
        };
        animalHandling: {
            modifier: number;
            proficient: boolean;
        };
        arcana: {
            modifier: number;
            proficient: boolean;
        };
        athletics: {
            modifier: number;
            proficient: boolean;
        };
        deception: {
            modifier: number;
            proficient: boolean;
        };
        history: {
            modifier: number;
            proficient: boolean;
        };
        insight: {
            modifier: number;
            proficient: boolean;
        };
        intimidation: {
            modifier: number;
            proficient: boolean;
        };
        investigation: {
            modifier: number;
            proficient: boolean;
        };
        medicine: {
            modifier: number;
            proficient: boolean;
        };
        nature: {
            modifier: number;
            proficient: boolean;
        };
        perception: {
            modifier: number;
            proficient: boolean;
        };
        performance: {
            modifier: number;
            proficient: boolean;
        };
        persuasion: {
            modifier: number;
            proficient: boolean;
        };
        religion: {
            modifier: number;
            proficient: boolean;
        };
        sleightOfHand: {
            modifier: number;
            proficient: boolean;
        };
        stealth: {
            modifier: number;
            proficient: boolean;
        };
        survival: {
            modifier: number;
            proficient: boolean;
        };
    };
    combat: {
        armorClass: number;
        initiative: number;
        speed: number;
        hitPoints: {
            maximum: number;
            current: number;
            temporary: number;
        };
        hitDice: string;
        deathSaves: {
            successes: number;
            failures: number;
        };
    };
    attacks: never[];
    equipment: {
        money: {
            copper: number;
            silver: number;
            electrum: number;
            gold: number;
            platinum: number;
        };
        items: string;
        treasure: string;
    };
    features: {
        featuresAndTraits: string;
        proficienciesAndLanguages: string;
    };
    spellcasting: {
        class: string;
        spellAbility: number;
        spellSaveDC: number;
        spellAttackBonus: number;
        cantrips: never[];
        levels: never[];
    };
};
export default _default;
