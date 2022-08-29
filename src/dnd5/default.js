const defaultAbility = {
    modifier: 0,
    score: 10
};

const defaultSkill = {
    modifier: 0,
    proficient: false
};

module.exports = {
    biography: {
        name: '',
        class: '',
        level: 1,
        background: '',
        race: '',
        alignment: '',
        description: ''
    },
    story: {
        backstory: '',
        personalityTraits: '',
        ideals: '',
        bonds: '',
        flaws: '',
        alliesAndOrganizations: ''
    },
    statistics: {
        experiencePoints: 0,
        inspiration: 0,
        proficiencyBonus: 0,
        passiveWisdom: 0
    },
    abilities: {
        strength: { ...defaultAbility },
        dexterity: { ...defaultAbility },
        constitution: { ...defaultAbility },
        intelligence: { ...defaultAbility },
        wisdom: { ...defaultAbility },
        charisma: { ...defaultAbility }
    },
    savingThrows: {
        strength: { ...defaultSkill },
        dexterity: { ...defaultSkill },
        constitution: { ...defaultSkill },
        intelligence: { ...defaultSkill },
        wisdom: { ...defaultSkill },
        charisma: { ...defaultSkill }
    },
    skills: {
        acrobatics: { ...defaultSkill },
        animalHandling: { ...defaultSkill },
        arcana: { ...defaultSkill },
        athletics: { ...defaultSkill },
        deception: { ...defaultSkill },
        history: { ...defaultSkill },
        insight: { ...defaultSkill },
        intimidation: { ...defaultSkill },
        investigation: { ...defaultSkill },
        medicine: { ...defaultSkill },
        nature: { ...defaultSkill },
        perception: { ...defaultSkill },
        performance: { ...defaultSkill },
        persuasion: { ...defaultSkill },
        religion: { ...defaultSkill },
        sleightOfHand: { ...defaultSkill },
        stealth: { ...defaultSkill },
        survival: { ...defaultSkill }
    },
    combat: {
        armorClass: 0,
        initiative: 0,
        speed: 0,
        hitPoints: {
            maximum: 0,
            current: 0,
            temporary: 0
        },
        hitDice: '',
        deathSaves: {
            successes: 0,
            failures: 0
        }
    },
    attacks: [],
    equipment: {
        money: {
            copper: 0,
            silver: 0,
            electrum: 0,
            gold: 0,
            platinum: 0
        },
        items: '',
        treasure: ''
    },
    features: {
        featuresAndTraits: '',
        proficienciesAndLanguages: ''
    },
    spellcasting: {
        class: '',
        spellAbility: 0,
        spellSaveDC: 0,
        spellAttackBonus: 0,
        cantrips: [],
        levels: []
    }
};
