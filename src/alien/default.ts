import type { AlienCharacter } from './types.js';

export const alienDefault: AlienCharacter = {
    biography: {
        name: '',
        career: '',
        appearance: ''
    },
    relationships: {
        buddy: '',
        rival: ''
    },
    attributes: {
        agility: {
            value: 0,
            skills: {
                mobility: 0,
                piloting: 0,
                rangedCombat: 0
            }
        },
        empathy: {
            value: 0,
            skills: {
                command: 0,
                manipulation: 0,
                medicalAid: 0
            }
        },
        strength: {
            value: 0,
            skills: {
                closeCombat: 0,
                heavyMachinery: 0,
                stamina: 0
            }
        },
        wits: {
            value: 0,
            skills: {
                comtech: 0,
                observation: 0,
                survival: 0
            }
        }
    },
    talents: [],
    status: {
        stressLevel: 0,
        health: 0,
        radiation: 0,
        criticalInjuries: '',
        conditions: {
            starving: false,
            dehydrated: false,
            exhausted: false,
            freezing: false
        }
    },
    consumables: {
        air: 0,
        food: 0,
        power: 0,
        water: 0
    },
    equipment: {
        armor: {
            name: '',
            rating: 0
        },
        weapons: [],
        encumbrance: 0,
        gear: '',
        signatureItem: '',
        tinyItems: ''
    },
    experience: {
        experiencePoints: 0,
        storyPoints: 0
    },
    agenda: {
        personalAgenda: '',
        objectives: ''
    }
};
