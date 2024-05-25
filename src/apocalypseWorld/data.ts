import { type ApocalypseWorldPlaybook } from './types.js';

type ApocalypseWorldData = Record<
    ApocalypseWorldPlaybook,
    {
        // common
        moves: string[];
        improvements: string[];
        // playbooks
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
    }
>;

export default {
    angel: {
        moves: [
            'sixthSense',
            'infirmary',
            'professionalCompassion',
            'battlefieldGrace',
            'healingTouch',
            'touchedByDeath'
        ],
        improvements: [
            'increaseSharp',
            'increaseCool',
            'increaseHard',
            'increaseHard',
            'increaseWeird',
            'angelMove',
            'angelMove',
            'twoGigsMoonlighting',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ]
    },
    battleBabe: {
        moves: [
            'dangerousSexy',
            'iceCold',
            'merciless',
            'visionsOfDeath',
            'perfectInstincts',
            'impossibleReflexes'
        ],
        improvements: [
            'increaseHard',
            'increaseHot',
            'increaseSharp',
            'increaseWeird',
            'battleBabeMove',
            'battleBabeMove',
            'twoGigsMoonlighting',
            'gangLeadership',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ]
    },
    brainer: {
        moves: [
            'unnaturalLustTransfixion',
            'casualBrainReceptivity',
            'preternaturalAtWillBrainAttunement',
            'deepBrainScan',
            'directBrainWhisperProjection',
            'inBrainPuppetStrings'
        ],
        improvements: [
            'increaseCool',
            'increaseSharp',
            'increaseHard',
            'increaseHard',
            'brainerMove',
            'brainerMove',
            'twoGigsMoonlighting',
            'holdingWealth',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        gear: [
            'implantSyringe',
            'brainRelay',
            'receptivityDrugs',
            'violationGlove',
            'painWaveProjector',
            'deepEarPlugs'
        ]
    },
    chopper: {
        moves: ['packAlpha', 'fuckingThieves'],
        improvements: [
            'increaseHard',
            'increaseCool',
            'increaseSharp',
            'increaseWeird',
            'increaseWeird',
            'gangOption',
            'twoGigsMoonlighting',
            'holdingWealth',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        advantages: [
            'medium',
            'wellArmed',
            'wellArmored',
            'wellDisciplined',
            'nomadic',
            'rich'
        ],
        problems: [
            'breakdown',
            'grounded',
            'desertion',
            'obligation',
            'disease'
        ]
    },
    driver: {
        moves: [
            'noShitDriver',
            'goodInTheClinch',
            'weatherEye',
            'daredevil',
            'collector',
            'otherCarIsTank'
        ],
        improvements: [
            'increaseCool',
            'increaseHard',
            'increaseHot',
            'increaseWeird',
            'driverMove',
            'driverMove',
            'twoGigsMoonlighting',
            'garageCrew',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ]
    },
    gunLugger: {
        moves: [
            'battleHardened',
            'fuckThisShit',
            'battlefieldInstincts',
            'insanoLikeDrano',
            'preparedForInevitable',
            'bloodcrazed',
            'notToBeFuckedWith'
        ],
        improvements: [
            'increaseCool',
            'increaseSharp',
            'increaseWeird',
            'gunLuggerMove',
            'gunLuggerMove',
            'twoGigsMoonlighting',
            'holdingWealth',
            'gangPackAlpha',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        fuckOffBigGuns: [
            'silencedSniper',
            'mg',
            'assaultRifle',
            'grenadeLauncher'
        ],
        seriousGuns: [
            'huntingRifle',
            'shotgun',
            'smg',
            'magnum',
            'grenadeTube',
            'apAmmo',
            'silencer'
        ],
        backupWeapons: [
            '9mm',
            'bigAssKnife',
            'machete',
            'manyKnives',
            'grenades'
        ]
    },
    hardHolder: {
        moves: ['leadership', 'wealth'],
        improvements: [
            'increaseHard',
            'increaseWeird',
            'increaseCool',
            'increaseHot',
            'increaseSharp',
            'holdingOption',
            'holdingOption',
            'eraseHoldingOption',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        advantages: [
            'largePopulation',
            'smallPopulation',
            'lucrativeRaiding',
            'protectionTribute',
            'manufactory',
            'market',
            'largeGang',
            'wellDisciplinedGang',
            'goodArmory',
            'goodCompound'
        ],
        problems: [
            'disease',
            'famine',
            'decadence',
            'holdingOwesTribute',
            'smallGang',
            'gangSavagery',
            'shitArmory',
            'shitCoumpound'
        ]
    },
    hocus: {
        moves: [
            'fortunes',
            'frenzy',
            'charismatic',
            'fuckingWacknut',
            'seeingSouls',
            'divineProtection'
        ],
        improvements: [
            'increaseCool',
            'increaseHard',
            'increaseSharp',
            'hocusMove',
            'hocusMove',
            'followersOption',
            'followersOption',
            'holdingWealth',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        types: ['cult', 'family', 'students', 'scene', 'staff', 'court'],
        advantages: [
            'dedicated',
            'fortune',
            'augury',
            'party',
            'insight',
            'hardWorking',
            'growth'
        ],
        problems: [
            'fewFollowers',
            'desertion',
            'desperation',
            'stupor',
            'disease',
            'violence',
            'savagery'
        ]
    },
    operator: {
        moves: [
            'moonlighting',
            'easyToTrust',
            'eyeOnTheDoor',
            'opportunistic',
            'reputation'
        ],
        improvements: [
            'increaseCool',
            'increaseHard',
            'increaseSharp',
            'operatorMove',
            'operatorMove',
            'gigCrew',
            'gigCrew',
            'removeObligationGig',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        payingGigs: [
            'bodyguarding',
            'surveillance',
            'raiding',
            'enforcement',
            'honestWork',
            'companionship',
            'deliveries',
            'infiltration',
            'scavenging',
            'brokeringDeals',
            'technicalWork',
            'fucking',
            'compoundDefense',
            'doingMurders'
        ],
        obligationGigs: [
            'avoidingSomeone',
            'payingDebts',
            'revenge',
            'protectingSomeone',
            'pursuingLuxury',
            'maintainingHonor',
            'seekingAnswers'
        ]
    },
    savvyHead: {
        moves: [
            'thingsSpeak',
            'bonefeel',
            'oftenerRight',
            'realityFrayingEdge',
            'spookyIntense',
            'deepInsights'
        ],
        improvements: [
            'increaseCool',
            'increaseHard',
            'increaseSharp',
            'savvyHeadMove',
            'savvyHeadMove',
            'twoGigsMoonlighting',
            'gangLeadership',
            'lifeSupport',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ]
    },
    skinner: {
        moves: [
            'breathtaking',
            'lost',
            'artfulGracious',
            'arrestingSkinner',
            'hypnotic'
        ],
        improvements: [
            'increaseCool',
            'increaseCool',
            'increaseHard',
            'increaseSharp',
            'skinnerMove',
            'skinnerMove',
            'twoGigsMoonlighting',
            'followersFortunes',
            'otherPlaybookMove',
            'otherPlaybookMove'
        ],
        graciousWeapons: [
            'sleevePistol',
            'ornateDagger',
            'hiddenKnives',
            'ornateSword',
            'antiqueHandgun'
        ],
        luxeGear: [
            'antiqueCoins',
            'eyeglasses',
            'longCoat',
            'spectacularTattoos',
            'skinHairKit',
            'pet'
        ]
    }
} as const satisfies ApocalypseWorldData;
