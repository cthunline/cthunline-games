export * from './callOfCthulhu/types';
export * from './dnd5/types';
export * from './seventhSea/types';
export * from './starWarsD6/types';
export declare const callOfCthulhu: {
    schema: import("@sinclair/typebox").TObject<{
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
    default: {
        biography: {
            name: string;
            birthPlace: string;
            occupation: string;
            residence: string;
            age: number;
        };
        characteristics: {
            strength: {
                regular: number;
                half: number;
                fifth: number;
            };
            constitution: {
                regular: number;
                half: number;
                fifth: number;
            };
            size: {
                regular: number;
                half: number;
                fifth: number;
            };
            dexterity: {
                regular: number;
                half: number;
                fifth: number;
            };
            appearance: {
                regular: number;
                half: number;
                fifth: number;
            };
            education: {
                regular: number;
                half: number;
                fifth: number;
            };
            intelligence: {
                regular: number;
                half: number;
                fifth: number;
            };
            power: {
                regular: number;
                half: number;
                fifth: number;
            };
        };
        points: {
            hitPoints: {
                current: number;
                maximum: number;
            };
            magicPoints: {
                current: number;
                maximum: number;
            };
        };
        luck: {
            starting: number;
            current: number;
        };
        sanity: {
            starting: number;
            current: number;
            maximum: number;
        };
        status: {
            temporaryInsanity: boolean;
            indefiniteInsanity: boolean;
            majorWound: boolean;
            unconscious: boolean;
            dying: boolean;
        };
        skills: never[];
        combat: {
            move: number;
            build: string;
            damageBonus: string;
        };
        weapons: never[];
        story: {
            story: string;
            personalDescription: string;
            ideologyAndBeliefs: string;
            significantPeople: string;
            meaningfulLocations: string;
            treasuredPossessions: string;
            traits: string;
            injuriesAndScars: string;
            phobiasAndManias: string;
            arcaneTomesAndSpells: string;
            encountersWithStrangeEntities: string;
            gearAndPossessions: string;
            fellowInvestigators: string;
            spendingLevel: string;
            cash: string;
            assets: string;
        };
    };
};
export declare const dnd5: {
    schema: import("@sinclair/typebox").TObject<{
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
    default: {
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
};
export declare const seventhSea: {
    schema: import("@sinclair/typebox").TObject<{
        biography: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            concept: import("@sinclair/typebox").TString;
            nation: import("@sinclair/typebox").TString;
            religion: import("@sinclair/typebox").TString;
            reputations: import("@sinclair/typebox").TString;
            wealth: import("@sinclair/typebox").TInteger;
        }>;
        heroPoints: import("@sinclair/typebox").TInteger;
        arcana: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            virtue: import("@sinclair/typebox").TString;
            hubris: import("@sinclair/typebox").TString;
        }>;
        backgrounds: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TString;
            quirk: import("@sinclair/typebox").TString;
        }>>;
        stories: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            goal: import("@sinclair/typebox").TString;
            reward: import("@sinclair/typebox").TString;
            steps: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        traits: import("@sinclair/typebox").TObject<{
            brawn: import("@sinclair/typebox").TInteger;
            finesse: import("@sinclair/typebox").TInteger;
            resolve: import("@sinclair/typebox").TInteger;
            wits: import("@sinclair/typebox").TInteger;
            panache: import("@sinclair/typebox").TInteger;
        }>;
        skills: import("@sinclair/typebox").TObject<{
            aim: import("@sinclair/typebox").TInteger;
            athletics: import("@sinclair/typebox").TInteger;
            brawl: import("@sinclair/typebox").TInteger;
            convince: import("@sinclair/typebox").TInteger;
            empathy: import("@sinclair/typebox").TInteger;
            hide: import("@sinclair/typebox").TInteger;
            intimidate: import("@sinclair/typebox").TInteger;
            notice: import("@sinclair/typebox").TInteger;
            perform: import("@sinclair/typebox").TInteger;
            ride: import("@sinclair/typebox").TInteger;
            sailing: import("@sinclair/typebox").TInteger;
            scholarship: import("@sinclair/typebox").TInteger;
            tempt: import("@sinclair/typebox").TInteger;
            theft: import("@sinclair/typebox").TInteger;
            warfare: import("@sinclair/typebox").TInteger;
            weaponry: import("@sinclair/typebox").TInteger;
        }>;
        deathSpiral: import("@sinclair/typebox").TInteger;
        advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TString;
        }>>;
        items: import("@sinclair/typebox").TString;
        notes: import("@sinclair/typebox").TString;
    }>;
    default: {
        biography: {
            name: string;
            concept: string;
            nation: string;
            religion: string;
            reputations: string;
            wealth: number;
        };
        heroPoints: number;
        arcana: {
            name: string;
            virtue: string;
            hubris: string;
        };
        backgrounds: never[];
        stories: never[];
        traits: {
            brawn: number;
            finesse: number;
            resolve: number;
            wits: number;
            panache: number;
        };
        skills: {
            aim: number;
            athletics: number;
            brawl: number;
            convince: number;
            empathy: number;
            hide: number;
            intimidate: number;
            notice: number;
            perform: number;
            ride: number;
            sailing: number;
            scholarship: number;
            tempt: number;
            theft: number;
            warfare: number;
            weaponry: number;
        };
        deathSpiral: number;
        advantages: never[];
        items: string;
        notes: string;
    };
};
export declare const starWarsD6: {
    schema: import("@sinclair/typebox").TObject<{
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
    default: {
        biography: {
            name: string;
            occupation: string;
            species: string;
            age: number;
            height: string;
            weight: string;
            description: string;
        };
        attributes: {
            dexterity: {
                value: string;
                skills: never[];
            };
            knowledge: {
                value: string;
                skills: never[];
            };
            mechanical: {
                value: string;
                skills: never[];
            };
            perception: {
                value: string;
                skills: never[];
            };
            strength: {
                value: string;
                skills: never[];
            };
            technical: {
                value: string;
                skills: never[];
            };
        };
        abilities: never[];
        statistics: {
            move: number;
            forceSensitive: boolean;
            forcePoints: number;
            darkSidePoints: number;
            characterPoints: number;
        };
        woundStatus: {
            stunned: boolean;
            wounded: boolean;
            doublyWounded: boolean;
            incapacitated: boolean;
            mortallyWounded: boolean;
        };
        weapons: never[];
        story: {
            equipment: string;
            background: string;
            personality: string;
            objectives: string;
            quote: string;
            connections: string;
        };
    };
};
