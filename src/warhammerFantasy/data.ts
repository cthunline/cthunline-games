import {
    type WarhammerFantasyBasicSkillName,
    type WarhammerFantasyCharacteristicName
} from './types.js';

interface WarhammerFantasyData {
    characteristicNames: WarhammerFantasyCharacteristicName[];
    basicSkillNames: WarhammerFantasyBasicSkillName[];
    basicSkillCharacteristics: Record<
        WarhammerFantasyBasicSkillName,
        WarhammerFantasyCharacteristicName
    >;
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
    ],
    basicSkillCharacteristics: {
        art: 'dexterity',
        gossip: 'fellowship',
        athletics: 'agility',
        haggle: 'fellowship',
        bribery: 'fellowship',
        intimidate: 'strength',
        charm: 'fellowship',
        intuition: 'initiative',
        charmAnimal: 'willpower',
        leadership: 'fellowship',
        climb: 'strength',
        meleeBasic: 'weaponSkill',
        cool: 'willpower',
        melee: 'weaponSkill',
        consumeAlcohol: 'toughness',
        navigation: 'initiative',
        dodge: 'agility',
        outdoorSurvival: 'intelligence',
        drive: 'agility',
        perception: 'initiative',
        endurance: 'toughness',
        ride: 'agility',
        entertain: 'fellowship',
        row: 'strength',
        gamble: 'intelligence',
        stealth: 'agility'
    }
} satisfies WarhammerFantasyData;
