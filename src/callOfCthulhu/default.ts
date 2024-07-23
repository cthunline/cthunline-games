import type { CoCCharacter } from './types.js';

const defaultCharacteristic = {
    regular: 0,
    half: 0,
    fifth: 0
};

export const cocDefault: CoCCharacter = {
    biography: {
        name: '',
        birthPlace: '',
        occupation: '',
        residence: '',
        age: 0
    },
    characteristics: {
        strength: { ...defaultCharacteristic },
        constitution: { ...defaultCharacteristic },
        size: { ...defaultCharacteristic },
        dexterity: { ...defaultCharacteristic },
        appearance: { ...defaultCharacteristic },
        education: { ...defaultCharacteristic },
        intelligence: { ...defaultCharacteristic },
        power: { ...defaultCharacteristic }
    },
    points: {
        hitPoints: {
            current: 0,
            maximum: 0
        },
        magicPoints: {
            current: 0,
            maximum: 0
        }
    },
    luck: {
        starting: 0,
        current: 0
    },
    sanity: {
        starting: 0,
        current: 0,
        maximum: 0
    },
    status: {
        temporaryInsanity: false,
        indefiniteInsanity: false,
        majorWound: false,
        unconscious: false,
        dying: false
    },
    skills: [],
    combat: {
        move: 0,
        build: '',
        damageBonus: ''
    },
    weapons: [],
    story: {
        story: '',
        personalDescription: '',
        ideologyAndBeliefs: '',
        significantPeople: '',
        meaningfulLocations: '',
        treasuredPossessions: '',
        traits: '',
        injuriesAndScars: '',
        phobiasAndManias: '',
        arcaneTomesAndSpells: '',
        encountersWithStrangeEntities: '',
        gearAndPossessions: '',
        fellowInvestigators: '',
        spendingLevel: '',
        cash: '',
        assets: ''
    }
};
