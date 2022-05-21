declare module 'cthunline-games' {

    interface SWD6Character {
        portrait: string;
        biography: SWD6Biography;
        attributes: SWD6Attributes;
        abilities: string[];
        statistics: SWD6Statistics;
        woundStatus: SWD6WoundStatus;
        weapons: SWD6Weapon[];
        story: SWD6Story;
    }

    interface SWD6Biography {
        name: string;
        occupation: string;
        species: string;
        age: number;
        height: string;
        weight: string;
        description: string;
    }

    interface SWD6Attributes {
        dexterity: SWD6Attribute;
        knowledge: SWD6Attribute;
        mechanical: SWD6Attribute;
        perception: SWD6Attribute;
        strength: SWD6Attribute;
        technical: SWD6Attribute;
    }

    interface SWD6Attribute {
        value: string;
        skills: SWD6Skill[];
    }

    interface SWD6Skill {
        name: string;
        value: string;
    }

    interface SWD6Statistics {
        move: number;
        forceSensitive: boolean;
        forcePoints: number;
        darkSidePoints: number;
        characterPoints: number;
    }

    interface SWD6WoundStatus {
        stunned: boolean;
        wounded: boolean;
        doublyWounded: boolean;
        incapacitated: boolean;
        mortallyWounded: boolean;
    }

    interface SWD6Story {
        equipment: string;
        background: string;
        personality: string;
        objectives: string;
        quote: string;
        connections: string;
    }

    interface SWD6Weapon {
        name: string;
        damage: string;
        shortRange: string;
        mediumRange: string;
        longRange: string;
        ammo: string;
    }

}
