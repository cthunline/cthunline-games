import type { ApocalypseWorldPlaybook } from './types.js';
type ApocalypseWorldData = {
    stats: string[];
    commonImprovements: string[];
    playbooks: Record<ApocalypseWorldPlaybook, {
        moves: string[];
        improvements: string[];
        gear?: string[];
        advantages?: string[];
        problems?: string[];
        types?: string[];
        payingGigs?: string[];
        obligationGigs?: string[];
        graciousWeapons?: string[];
        luxeGear?: string[];
        fuckOffBigGuns?: string[];
        seriousGuns?: string[];
        backupWeapons?: string[];
        workspace?: string[];
    }>;
};
export declare const apocalypseWorldData: ApocalypseWorldData;
export {};
