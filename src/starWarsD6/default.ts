const defaultAttribute = {
    value: '',
    skills: []
};

export default {
    biography: {
        name: '',
        occupation: '',
        species: '',
        age: 0,
        height: '',
        weight: '',
        description: ''
    },
    attributes: {
        dexterity: { ...defaultAttribute },
        knowledge: { ...defaultAttribute },
        mechanical: { ...defaultAttribute },
        perception: { ...defaultAttribute },
        strength: { ...defaultAttribute },
        technical: { ...defaultAttribute }
    },
    abilities: [],
    statistics: {
        move: 0,
        forceSensitive: false,
        forcePoints: 0,
        darkSidePoints: 0,
        characterPoints: 0
    },
    woundStatus: {
        stunned: false,
        wounded: false,
        doublyWounded: false,
        incapacitated: false,
        mortallyWounded: false
    },
    weapons: [],
    story: {
        equipment: '',
        background: '',
        personality: '',
        objectives: '',
        quote: '',
        connections: ''
    }
};
