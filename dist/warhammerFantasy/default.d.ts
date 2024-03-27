declare const _default: {
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
        maximum: number;
        total: number;
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
export default _default;
