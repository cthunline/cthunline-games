import { WarhammerFantasyCharacter } from './types';

const defaultCharacteristic = {
    initial: 0,
    advances: 0,
    current: 0
};

const defaultBasicSkill = {
    characteristicScore: 0,
    advances: 0,
    skill: 0
};

export default {
    biography: {
        name: '',
        species: '',
        class: '',
        career: '',
        careerLevel: '',
        careerPath: '',
        status: '',
        age: '',
        height: '',
        hair: '',
        eyes: ''
    },
    characteristics: {
        weaponSkill: defaultCharacteristic,
        ballisticSkill: defaultCharacteristic,
        strength: defaultCharacteristic,
        toughness: defaultCharacteristic,
        initiative: defaultCharacteristic,
        agility: defaultCharacteristic,
        dexterity: defaultCharacteristic,
        intelligence: defaultCharacteristic,
        willpower: defaultCharacteristic,
        fellowship: defaultCharacteristic
    },
    fate: {
        fate: 0,
        fortune: 0
    },
    resilience: {
        resilience: 0,
        resolve: 0,
        motivation: 0
    },
    experience: {
        current: 0,
        spent: 0,
        total: 0
    },
    movement: {
        movement: 0,
        walk: 0,
        run: 0
    },
    basicSkills: {
        art: {
            characteristicName: 'dexterity',
            ...defaultBasicSkill
        },
        gossip: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        athletics: {
            characteristicName: 'agility',
            ...defaultBasicSkill
        },
        haggle: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        bribery: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        intimidate: {
            characteristicName: 'strength',
            ...defaultBasicSkill
        },
        charm: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        intuition: {
            characteristicName: 'initiative',
            ...defaultBasicSkill
        },
        charmAnimal: {
            characteristicName: 'willpower',
            ...defaultBasicSkill
        },
        leadership: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        climb: {
            characteristicName: 'strength',
            ...defaultBasicSkill
        },
        meleeBasic: {
            characteristicName: 'weaponSkill',
            ...defaultBasicSkill
        },
        cool: {
            characteristicName: 'willpower',
            ...defaultBasicSkill
        },
        melee: {
            characteristicName: 'weaponSkill',
            ...defaultBasicSkill
        },
        consumeAlcohol: {
            characteristicName: 'toughness',
            ...defaultBasicSkill
        },
        navigation: {
            characteristicName: 'initiative',
            ...defaultBasicSkill
        },
        dodge: {
            characteristicName: 'agility',
            ...defaultBasicSkill
        },
        outdoorSurvival: {
            characteristicName: 'intelligence',
            ...defaultBasicSkill
        },
        drive: {
            characteristicName: 'agility',
            ...defaultBasicSkill
        },
        perception: {
            characteristicName: 'initiative',
            ...defaultBasicSkill
        },
        endurance: {
            characteristicName: 'toughness',
            ...defaultBasicSkill
        },
        ride: {
            characteristicName: 'agility',
            ...defaultBasicSkill
        },
        entertain: {
            characteristicName: 'fellowship',
            ...defaultBasicSkill
        },
        row: {
            characteristicName: 'strength',
            ...defaultBasicSkill
        },
        gamble: {
            characteristicName: 'intelligence',
            ...defaultBasicSkill
        },
        stealth: {
            characteristicName: 'agility',
            ...defaultBasicSkill
        }
    },
    otherSkills: [],
    talents: [],
    ambitions: {
        shortTerm: '',
        longTerm: ''
    },
    party: {
        name: '',
        shortTerm: '',
        longTerm: '',
        members: ''
    },
    armour: [],
    armourPoints: {
        head: 0,
        rightArm: 0,
        leftArm: 0,
        body: 0,
        rightLeg: 0,
        leftLeg: 0,
        shield: 0
    },
    trappings: [],
    psychology: '',
    corruptionMutation: '',
    wealth: {
        brassPennies: 0,
        silverShillings: 0,
        goldCrowns: 0
    },
    encumbrance: {
        weapons: 0,
        armour: 0,
        trappings: 0,
        maximum: 0,
        total: 0
    },
    wounds: {
        strengthBonus: 0,
        twiceToughnessBonus: 0,
        willpowerBonus: 0,
        hardy: 0,
        wounds: 0,
        description: ''
    },
    weapons: [],
    spells: [],
    sin: 0
} satisfies WarhammerFantasyCharacter;
