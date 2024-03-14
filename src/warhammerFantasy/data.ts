import {
    type WarhammerFantasyBasicSkillName,
    type WarhammerFantasyCharacteristicName
} from './types';

interface WarhammerFantasyData {
    characteristicNames: WarhammerFantasyCharacteristicName[];
    basicSkillNames: WarhammerFantasyBasicSkillName[];
}

export default {
    characteristicNames: [
        'weaponSkill',
        'ballisticSkill',
        'strength',
        'toughness',
        'initiative',
        'agility',
        'dexterity',
        'intelligence',
        'willpower',
        'fellowship'
    ],
    basicSkillNames: [
        'art',
        'gossip',
        'athletics',
        'haggle',
        'bribery',
        'intimidate',
        'charm',
        'intuition',
        'charmAnimal',
        'leadership',
        'climb',
        'meleeBasic',
        'cool',
        'melee',
        'consumeAlcohol',
        'navigation',
        'dodge',
        'outdoorSurvival',
        'drive',
        'perception',
        'endurance',
        'ride',
        'entertain',
        'row',
        'gamble',
        'stealth'
    ]
} satisfies WarhammerFantasyData;
