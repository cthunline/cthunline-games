import type { SeventhSeaCharacter } from './types.js';

export default {
    biography: {
        name: '',
        concept: '',
        nation: '',
        religion: '',
        reputations: '',
        wealth: 0
    },
    heroPoints: 0,
    arcana: {
        name: '',
        virtue: '',
        hubris: ''
    },
    backgrounds: [],
    stories: [],
    traits: {
        brawn: 0,
        finesse: 0,
        resolve: 0,
        wits: 0,
        panache: 0
    },
    skills: {
        aim: 0,
        athletics: 0,
        brawl: 0,
        convince: 0,
        empathy: 0,
        hide: 0,
        intimidate: 0,
        notice: 0,
        perform: 0,
        ride: 0,
        sailing: 0,
        scholarship: 0,
        tempt: 0,
        theft: 0,
        warfare: 0,
        weaponry: 0
    },
    deathSpiral: 0,
    advantages: [],
    items: '',
    notes: ''
} satisfies SeventhSeaCharacter;
