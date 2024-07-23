import type { WarhammerFantasyBasicSkillName, WarhammerFantasyCharacteristicName } from './types.js';
type WarhammerFantasyData = {
    characteristicNames: WarhammerFantasyCharacteristicName[];
    basicSkillNames: WarhammerFantasyBasicSkillName[];
    basicSkillCharacteristics: Record<WarhammerFantasyBasicSkillName, WarhammerFantasyCharacteristicName>;
};
export declare const warhammerFantasyData: WarhammerFantasyData;
export {};
