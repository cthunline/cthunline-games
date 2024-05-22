import { type ApocalypseWorldCharacter } from './apocalypseWorld/types.js';
import { type CoCCharacter } from './callOfCthulhu/types.js';
import { type DnD5Character } from './dnd5/types.js';
import { type SeventhSeaCharacter } from './seventhSea/types.js';
import { type SWD6Character } from './starWarsD6/types.js';
import { type WarhammerFantasyCharacter } from './warhammerFantasy/types.js';
export * from './apocalypseWorld/types.js';
export * from './callOfCthulhu/types.js';
export * from './dnd5/types.js';
export * from './seventhSea/types.js';
export * from './starWarsD6/types.js';
export * from './warhammerFantasy/types.js';
export type Character = ApocalypseWorldCharacter | CoCCharacter | DnD5Character | SeventhSeaCharacter | SWD6Character | WarhammerFantasyCharacter;
export declare const apocalypseWorld: {
    schema: import("@sinclair/typebox").TObject<{
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
            value: import("@sinclair/typebox").TInteger;
        }>>;
        special: import("@sinclair/typebox").TString;
        harm: import("@sinclair/typebox").TObject<{
            countdown: import("@sinclair/typebox").TInteger;
            stabilized: import("@sinclair/typebox").TBoolean;
            shattered: import("@sinclair/typebox").TBoolean;
            crippled: import("@sinclair/typebox").TBoolean;
            disfigured: import("@sinclair/typebox").TBoolean;
            broken: import("@sinclair/typebox").TBoolean;
        }>;
        moves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        otherMoves: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            title: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            enabled: import("@sinclair/typebox").TBoolean;
        }>>;
        hold: import("@sinclair/typebox").TString;
        gearAndBarter: import("@sinclair/typebox").TString;
        angel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            stock: import("@sinclair/typebox").TString;
        }>>;
        battleBabe: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            customWeapons: import("@sinclair/typebox").TString;
        }>>;
        brainer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            brainerGear: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            customWeapons: import("@sinclair/typebox").TString;
        }>>;
        chopper: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            gang: import("@sinclair/typebox").TObject<{
                size: import("@sinclair/typebox").TString;
                harm: import("@sinclair/typebox").TString;
                armor: import("@sinclair/typebox").TString;
                tags: import("@sinclair/typebox").TString;
                advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
                problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
            }>;
            bike: import("@sinclair/typebox").TObject<{
                strengths: import("@sinclair/typebox").TString;
                looks: import("@sinclair/typebox").TString;
                weaknesses: import("@sinclair/typebox").TString;
            }>;
        }>>;
        driver: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            cars: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                frame: import("@sinclair/typebox").TString;
                power: import("@sinclair/typebox").TString;
                looks: import("@sinclair/typebox").TString;
                armor: import("@sinclair/typebox").TString;
                weak: import("@sinclair/typebox").TString;
                tags: import("@sinclair/typebox").TString;
            }>>;
        }>>;
        gunLugger: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            weapons: import("@sinclair/typebox").TString;
            armor: import("@sinclair/typebox").TString;
        }>>;
        hardHolder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
                problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
            }>;
        }>>;
        hocus: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            followers: import("@sinclair/typebox").TObject<{
                description: import("@sinclair/typebox").TString;
                surplus: import("@sinclair/typebox").TString;
                barter: import("@sinclair/typebox").TString;
                fortune: import("@sinclair/typebox").TString;
                want: import("@sinclair/typebox").TString;
                type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
                advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
                problems: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    title: import("@sinclair/typebox").TString;
                    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    enabled: import("@sinclair/typebox").TBoolean;
                }>>;
            }>;
        }>>;
        operator: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            payingGigs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            obligationGigs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            crewContacts: import("@sinclair/typebox").TString;
        }>>;
        skinner: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            graciousWeapons: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
            luxeGear: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                enabled: import("@sinclair/typebox").TBoolean;
            }>>;
        }>>;
    }>;
    default: {
        playbook: "angel";
        bio: {
            name: string;
            look: string;
        };
        stats: {
            cool: {
                value: string;
                highlighted: false;
            };
            hard: {
                value: string;
                highlighted: false;
            };
            hot: {
                value: string;
                highlighted: false;
            };
            sharp: {
                value: string;
                highlighted: false;
            };
            weird: {
                value: string;
                highlighted: false;
            };
        };
        hx: never[];
        special: string;
        harm: {
            countdown: number;
            stabilized: false;
            shattered: false;
            crippled: false;
            disfigured: false;
            broken: false;
        };
        moves: never[];
        otherMoves: never[];
        hold: string;
        gearAndBarter: string;
    };
    data: {
        readonly angel: {
            readonly moves: ["sixthSense", "infirmary", "professionalCompassion", "battlefieldGrace", "healingTouch", "touchedByDeath"];
            readonly improvements: ["increaseSharp", "increaseCool", "increaseHard", "increaseHard", "increaseWeird", "angelMove", "angelMove", "twoGigsMoonlighting", "otherPlaybookMove", "otherPlaybookMove"];
        };
        readonly battleBabe: {
            readonly moves: ["dangerousSexy", "iceCold", "merciless", "visionsOfDeath", "perfectInstincts", "impossibleReflexes"];
            readonly improvements: ["increaseHard", "increaseHot", "increaseSharp", "increaseWeird", "battleBabeMove", "battleBabeMove", "twoGigsMoonlighting", "gangLeadership", "otherPlaybookMove", "otherPlaybookMove"];
        };
        readonly brainer: {
            readonly moves: ["unnaturalLustTransfixion", "casualBrainReceptivity", "preternaturalAtWillBrainAttunement", "deepBrainScan", "directBrainWhisperProjection", "inBrainPuppetStrings"];
            readonly improvements: ["increaseCool", "increaseSharp", "increaseHard", "increaseHard", "brainerMove", "brainerMove", "twoGigsMoonlighting", "hodlingWealth", "otherPlaybookMove", "otherPlaybookMove"];
            readonly gear: ["implantSyringe", "brainRelay", "receptivityDrugs", "violationGlove", "painWaveProjector", "deepEarPlugs"];
        };
        readonly chopper: {
            readonly moves: ["packAlpha", "fuckingThieves"];
            readonly improvements: ["increaseHard", "increaseCool", "increaseSharp", "increaseWeird", "increaseWeird", "gangOption", "twoGigsMoonlighting", "holdingWealth", "otherPlaybookMove", "otherPlaybookMove"];
            readonly advantages: ["medium", "wellArmed", "wellArmored", "wellDisciplined", "nomadic", "rich"];
            readonly problems: ["breakdown", "grounded", "desertion", "obligation", "disease"];
        };
        readonly driver: {
            readonly moves: ["noShitDriver", "goodInTheClinch", "weatherEye", "daredevil", "collector", "otherCarIsTank"];
            readonly improvements: ["increaseCool", "increaseHard", "increaseHot", "increaseWeird", "driverMove", "driverMove", "twoGigsMoonlighting", "garageCrew", "otherPlaybookMove", "otherPlaybookMove"];
        };
        readonly gunLugger: {
            readonly moves: ["battleHardened", "fuckThisShit", "battlefieldInstincts", "insanoLikeDrano", "preparedForInevitable", "bloodcrazed", "notToBeFuckedWith"];
            readonly improvements: ["increaseCool", "increaseSharp", "increaseWeird", "gunLuggerMove", "gunLuggerMove", "twoGigsMoonlighting", "holdingWealth", "gangPackAlpha", "otherPlaybookMove", "otherPlaybookMove"];
        };
        readonly hardHolder: {
            readonly moves: ["leadership", "wealth"];
            readonly improvements: ["increaseHard", "increaseWeird", "increaseCool", "increaseHot", "increaseSharp", "holdingOption", "holdingOption", "eraseHoldingOption", "otherPlaybookMove", "otherPlaybookMove"];
            readonly advantages: ["largePopulation", "smallPopulation", "lucrativeRaiding", "protectionTribute", "manufactory", "market", "largeGang", "wellDisciplinedGang", "goodArmory", "goodCompound"];
            readonly problems: ["disease", "famine", "decadence", "holdingOwesTribute", "smallGang", "gangSavagery", "shitArmory", "shitCoumpound"];
        };
        readonly hocus: {
            readonly moves: ["fortunes", "frenzy", "charismatic", "fuckingWacknut", "seeingSouls", "divineProtection"];
            readonly improvements: ["increaseCool", "increaseHard", "increaseSharp", "hocusMove", "hocusMove", "followersOption", "followersOption", "holdingWealth", "otherPlaybookMove", "otherPlaybookMove"];
            readonly types: ["cult", "family", "students", "scene", "staff", "court"];
            readonly advantages: ["dedicated", "fortune", "augury", "party", "insight", "hardWorking", "growth"];
            readonly problems: ["fewFollowers", "desertion", "desperation", "stupor", "disease", "violence", "savagery"];
        };
        readonly operator: {
            readonly moves: ["moonlighting", "easyToTrust", "eyeOnTheDoor", "opportunistic", "reputation"];
            readonly improvements: ["increaseCool", "increaseHard", "increaseSharp", "operatorMove", "operatorMove", "gigCrew", "gigCrew", "removeObligationGig", "otherPlaybookMove", "otherPlaybookMove"];
            readonly payingGigs: ["bodyguarding", "surveillance", "raiding", "enforcement", "honestWork", "companionship", "deliveries", "infiltration", "scavenging", "brokeringDeals", "technicalWork", "fucking", "compoundDefense", "doingMurders"];
            readonly obligationGigs: ["avoidingSomeone", "payingDebts", "revenge", "protectingSomeone", "pursuingLuxury", "maintainingHonor", "seekingAnswers"];
        };
        readonly savvyHead: {
            readonly moves: ["thingsSpeak", "bonefeel", "oftenerRight", "realityFrayingEdge", "spookyIntense", "deepInsights"];
            readonly improvements: ["increaseCool", "increaseHard", "increaseSharp", "savvyHeadMove", "savvyHeadMove", "twoGigsMoonlighting", "gangLeadership", "lifeSupport", "otherPlaybookMove", "otherPlaybookMove"];
        };
        readonly skinner: {
            readonly moves: ["breathtaking", "lost", "artfulGracious", "arrestingSkinner", "hypnotic"];
            readonly improvements: ["increaseCool", "increaseCool", "increaseHard", "increaseSharp", "skinnerMove", "skinnerMove", "twoGigsMoonlighting", "followersFortunes", "otherPlaybookMove", "otherPlaybookMove"];
            readonly graciousWeapons: ["sleevePistol", "ornateDagger", "hiddenKnives", "ornateSword", "antiqueHandgun"];
            readonly luxeGear: ["antiqueCoins", "eyeglasses", "longCoat", "spectacularTattoos", "skinHairKit", "pet"];
        };
    };
};
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
            temporaryInsanity: false;
            indefiniteInsanity: false;
            majorWound: false;
            unconscious: false;
            dying: false;
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
            forceSensitive: false;
            forcePoints: number;
            darkSidePoints: number;
            characterPoints: number;
        };
        woundStatus: {
            stunned: false;
            wounded: false;
            doublyWounded: false;
            incapacitated: false;
            mortallyWounded: false;
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
export declare const warhammerFantasy: {
    schema: import("@sinclair/typebox").TObject<{
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
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            ballisticSkill: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            strength: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            toughness: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            initiative: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            agility: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            dexterity: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            intelligence: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            willpower: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            fellowship: import("@sinclair/typebox").TObject<{
                initial: import("@sinclair/typebox").TInteger;
                advances: import("@sinclair/typebox").TInteger;
                current: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
        }>;
        fate: import("@sinclair/typebox").TObject<{
            fate: import("@sinclair/typebox").TInteger;
            fortune: import("@sinclair/typebox").TInteger;
        }>;
        resilience: import("@sinclair/typebox").TObject<{
            resilience: import("@sinclair/typebox").TInteger;
            resolve: import("@sinclair/typebox").TInteger;
            motivation: import("@sinclair/typebox").TString;
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
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            gossip: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            athletics: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            haggle: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            bribery: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            intimidate: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            charm: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            intuition: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            charmAnimal: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            leadership: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            climb: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            meleeBasic: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            cool: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"willpower">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            melee: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"weaponSkill">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            consumeAlcohol: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            navigation: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            dodge: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            outdoorSurvival: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            drive: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            perception: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"initiative">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            endurance: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"toughness">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            ride: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            entertain: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"fellowship">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            row: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"strength">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            gamble: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"intelligence">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
            stealth: import("@sinclair/typebox").TObject<{
                characteristicName: import("@sinclair/typebox").TLiteral<"agility">;
                advances: import("@sinclair/typebox").TInteger;
                skill: import("@sinclair/typebox").TInteger;
                careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
            }>;
        }>;
        otherSkills: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            characteristicName: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"strength">, import("@sinclair/typebox").TLiteral<"dexterity">, import("@sinclair/typebox").TLiteral<"intelligence">, import("@sinclair/typebox").TLiteral<"initiative">, import("@sinclair/typebox").TLiteral<"weaponSkill">, import("@sinclair/typebox").TLiteral<"ballisticSkill">, import("@sinclair/typebox").TLiteral<"toughness">, import("@sinclair/typebox").TLiteral<"agility">, import("@sinclair/typebox").TLiteral<"willpower">, import("@sinclair/typebox").TLiteral<"fellowship">]>;
            advances: import("@sinclair/typebox").TInteger;
            skill: import("@sinclair/typebox").TInteger;
            careerLevel: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
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
            encumbrance: import("@sinclair/typebox").TInteger;
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
            encumbrance: import("@sinclair/typebox").TInteger;
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
            total: import("@sinclair/typebox").TInteger;
            maximumBonus: import("@sinclair/typebox").TInteger;
            maximum: import("@sinclair/typebox").TInteger;
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
            encumbrance: import("@sinclair/typebox").TInteger;
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
        advantage: import("@sinclair/typebox").TInteger;
    }>;
    default: {
        biography: {
            name: string;
            species: string;
            class: string;
            career: string;
            careerLevel: string;
            careerPath: string;
            status: string;
            age: string;
            height: string;
            hair: string;
            eyes: string;
        };
        characteristics: {
            weaponSkill: {
                initial: number;
                advances: number;
                current: number;
            };
            ballisticSkill: {
                initial: number;
                advances: number;
                current: number;
            };
            strength: {
                initial: number;
                advances: number;
                current: number;
            };
            toughness: {
                initial: number;
                advances: number;
                current: number;
            };
            initiative: {
                initial: number;
                advances: number;
                current: number;
            };
            agility: {
                initial: number;
                advances: number;
                current: number;
            };
            dexterity: {
                initial: number;
                advances: number;
                current: number;
            };
            intelligence: {
                initial: number;
                advances: number;
                current: number;
            };
            willpower: {
                initial: number;
                advances: number;
                current: number;
            };
            fellowship: {
                initial: number;
                advances: number;
                current: number;
            };
        };
        fate: {
            fate: number;
            fortune: number;
        };
        resilience: {
            resilience: number;
            resolve: number;
            motivation: string;
        };
        experience: {
            current: number;
            spent: number;
            total: number;
        };
        movement: {
            movement: number;
            walk: number;
            run: number;
        };
        basicSkills: {
            art: {
                advances: number;
                skill: number;
                characteristicName: "dexterity";
            };
            athletics: {
                advances: number;
                skill: number;
                characteristicName: "agility";
            };
            bribery: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            charm: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            charmAnimal: {
                advances: number;
                skill: number;
                characteristicName: "willpower";
            };
            climb: {
                advances: number;
                skill: number;
                characteristicName: "strength";
            };
            cool: {
                advances: number;
                skill: number;
                characteristicName: "willpower";
            };
            consumeAlcohol: {
                advances: number;
                skill: number;
                characteristicName: "toughness";
            };
            drive: {
                advances: number;
                skill: number;
                characteristicName: "agility";
            };
            endurance: {
                advances: number;
                skill: number;
                characteristicName: "toughness";
            };
            entertain: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            gamble: {
                advances: number;
                skill: number;
                characteristicName: "intelligence";
            };
            gossip: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            haggle: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            intimidate: {
                advances: number;
                skill: number;
                characteristicName: "strength";
            };
            intuition: {
                advances: number;
                skill: number;
                characteristicName: "initiative";
            };
            leadership: {
                advances: number;
                skill: number;
                characteristicName: "fellowship";
            };
            meleeBasic: {
                advances: number;
                skill: number;
                characteristicName: "weaponSkill";
            };
            melee: {
                advances: number;
                skill: number;
                characteristicName: "weaponSkill";
            };
            navigation: {
                advances: number;
                skill: number;
                characteristicName: "initiative";
            };
            dodge: {
                advances: number;
                skill: number;
                characteristicName: "agility";
            };
            outdoorSurvival: {
                advances: number;
                skill: number;
                characteristicName: "intelligence";
            };
            perception: {
                advances: number;
                skill: number;
                characteristicName: "initiative";
            };
            ride: {
                advances: number;
                skill: number;
                characteristicName: "agility";
            };
            row: {
                advances: number;
                skill: number;
                characteristicName: "strength";
            };
            stealth: {
                advances: number;
                skill: number;
                characteristicName: "agility";
            };
        };
        otherSkills: never[];
        talents: never[];
        ambitions: {
            shortTerm: string;
            longTerm: string;
        };
        party: {
            name: string;
            shortTerm: string;
            longTerm: string;
            members: string;
        };
        armour: never[];
        armourPoints: {
            head: number;
            rightArm: number;
            leftArm: number;
            body: number;
            rightLeg: number;
            leftLeg: number;
            shield: number;
        };
        trappings: never[];
        psychology: string;
        corruptionMutation: string;
        wealth: {
            brassPennies: number;
            silverShillings: number;
            goldCrowns: number;
        };
        encumbrance: {
            weapons: number;
            armour: number;
            trappings: number;
            total: number;
            maximumBonus: number;
            maximum: number;
        };
        wounds: {
            strengthBonus: number;
            twiceToughnessBonus: number;
            willpowerBonus: number;
            hardy: false;
            total: number;
            current: number;
            notes: string;
        };
        weapons: never[];
        spells: never[];
        sin: number;
        advantage: number;
    };
    data: {
        characteristicNames: ("strength" | "dexterity" | "intelligence" | "initiative" | "weaponSkill" | "ballisticSkill" | "toughness" | "agility" | "willpower" | "fellowship")[];
        basicSkillNames: ("cool" | "leadership" | "athletics" | "perception" | "stealth" | "intimidate" | "ride" | "art" | "gossip" | "haggle" | "bribery" | "charm" | "intuition" | "charmAnimal" | "climb" | "meleeBasic" | "melee" | "consumeAlcohol" | "navigation" | "dodge" | "outdoorSurvival" | "drive" | "endurance" | "entertain" | "row" | "gamble")[];
        basicSkillCharacteristics: {
            art: "dexterity";
            gossip: "fellowship";
            athletics: "agility";
            haggle: "fellowship";
            bribery: "fellowship";
            intimidate: "strength";
            charm: "fellowship";
            intuition: "initiative";
            charmAnimal: "willpower";
            leadership: "fellowship";
            climb: "strength";
            meleeBasic: "weaponSkill";
            cool: "willpower";
            melee: "weaponSkill";
            consumeAlcohol: "toughness";
            navigation: "initiative";
            dodge: "agility";
            outdoorSurvival: "intelligence";
            drive: "agility";
            perception: "initiative";
            endurance: "toughness";
            ride: "agility";
            entertain: "fellowship";
            row: "strength";
            gamble: "intelligence";
            stealth: "agility";
        };
    };
};
