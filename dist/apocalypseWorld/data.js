export default {
    stats: ['cool', 'hard', 'hot', 'sharp', 'weird'],
    commonImprovements: [
        'increaseAnyStat',
        'retireCharacter',
        'secondCharacter',
        'newCharacterType',
        'advanceBasicMoves',
        'advanceOtherBasicMoves'
    ],
    playbooks: {
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
                'increaseSharpMax3',
                'increaseCoolMax2',
                'increaseHardMax2',
                'increaseHardMax2',
                'increaseWeirdMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseHardMax2',
                'increaseHotMax2',
                'increaseSharpMax2',
                'increaseWeirdMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseCoolMax2',
                'increaseSharpMax2',
                'increaseHardMax2',
                'increaseHardMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseHardMax3',
                'increaseCoolMax2',
                'increaseSharpMax2',
                'increaseWeirdMax2',
                'increaseWeirdMax2',
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
                'increaseCoolMax2',
                'increaseHardMax2',
                'increaseHotMax2',
                'increaseWeirdMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseCoolMax2',
                'increaseSharpMax2',
                'increaseWeirdMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseHardMax3',
                'increaseWeirdMax2',
                'increaseCoolMax2',
                'increaseHotMax2',
                'increaseSharpMax2',
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
                'increaseCoolMax2',
                'increaseHardMax2',
                'increaseSharpMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseCoolMax3',
                'increaseHardMax2',
                'increaseSharpMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
                'increaseCoolMax2',
                'increaseHardMax2',
                'increaseSharpMax2',
                'newPlaybookMove',
                'newPlaybookMove',
                'twoGigsMoonlighting',
                'gangLeadership',
                'lifeSupport',
                'otherPlaybookMove',
                'otherPlaybookMove'
            ],
            workspace: [
                'garage',
                'darkroom',
                'growingEnvironment',
                'skilledLabor',
                'junkyard',
                'truckVan',
                'electronica',
                'machiningTools',
                'transmittersReceivers',
                'provingRange',
                'relicGoldenAge',
                'boobyTraps'
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
                'increaseCoolMax2',
                'increaseCoolMax2',
                'increaseHardMax2',
                'increaseSharpMax2',
                'newPlaybookMove',
                'newPlaybookMove',
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
    }
};
