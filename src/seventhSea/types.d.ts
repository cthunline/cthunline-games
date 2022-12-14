declare module '@cthunline/games' {

    interface SeventhSeaCharacter {
        biography: SeventhSeaBiography;
        heroPoints: number;
        arcana: SeventhSeaArcana;
        backgrounds: SeventhSeaBackground[];
        stories: SeventhSeaStory[];
        traits: SeventhSeaTraits;
        skills: SeventhSeaSkills;
        deathSpiral: number;
        advantages: SeventhSeaAdvantage[];
        items: string;
        notes: string;
    }

    interface SeventhSeaBiography {
        name: string;
        concept: string;
        nation: string;
        religion: string;
        reputations: string;
        wealth: number;
    }

    interface SeventhSeaArcana {
        name: string;
        virtue: string;
        hubris: string;
    }

    interface SeventhSeaBackground {
        name: string;
        description: string;
        quirk: string;
    }

    interface SeventhSeaStory {
        name: string;
        goal: string;
        reward: string;
        steps: string[];
    }

    interface SeventhSeaTraits {
        brawn: number;
        finesse: number;
        resolve: number;
        wits: number;
        panache: number;
    }

    interface SeventhSeaSkills {
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
    }

    interface SeventhSeaAdvantage {
        name: string;
        description: string;
    }

}
