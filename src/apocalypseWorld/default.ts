import { type ApocalypseWorldCharacter } from './types.js';

export default {
    playbook: 'angel',
    bio: {
        name: '',
        look: ''
    },
    stats: {
        cool: {
            value: '',
            highlighted: false
        },
        hard: {
            value: '',
            highlighted: false
        },
        hot: {
            value: '',
            highlighted: false
        },
        sharp: {
            value: '',
            highlighted: false
        },
        weird: {
            value: '',
            highlighted: false
        }
    },
    hx: [],
    harm: {
        countdown: 0,
        stabilized: false,
        shattered: false,
        crippled: false,
        disfigured: false,
        broken: false
    },
    otherMoves: [],
    hold: '',
    gearAndBarter: '',
    notes: '',
    angel: {
        moves: [
            { name: 'sixthSense', enabled: false },
            { name: 'infirmary', enabled: false },
            { name: 'professionalCompassion', enabled: false },
            { name: 'battlefieldGrace', enabled: false },
            { name: 'healingTouch', enabled: false },
            { name: 'touchedByDeath', enabled: false }
        ],
        improvements: [
            { name: 'increaseSharp', enabled: false },
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'angelMove', enabled: false },
            { name: 'angelMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        stock: ''
    },
    battleBabe: {
        moves: [
            { name: 'dangerousSexy', enabled: false },
            { name: 'iceCold', enabled: false },
            { name: 'merciless', enabled: false },
            { name: 'visionsOfDeath', enabled: false },
            { name: 'perfectInstincts', enabled: false },
            { name: 'impossibleReflexes', enabled: false }
        ],
        improvements: [
            { name: 'increaseHard', enabled: false },
            { name: 'increaseHot', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'battleBabeMove', enabled: false },
            { name: 'battleBabeMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'gangLeadership', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        customWeapons: ''
    },
    brainer: {
        moves: [
            { name: 'unnaturalLustTransfixion', enabled: false },
            { name: 'casualBrainReceptivity', enabled: false },
            { name: 'preternaturalAtWillBrainAttunement', enabled: false },
            { name: 'deepBrainScan', enabled: false },
            { name: 'directBrainWhisperProjection', enabled: false },
            { name: 'inBrainPuppetStrings', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'brainerMove', enabled: false },
            { name: 'brainerMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'holdingWealth', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        brainerGear: [
            { name: 'implantSyringe', enabled: false },
            { name: 'brainRelay', enabled: false },
            { name: 'receptivityDrugs', enabled: false },
            { name: 'violationGlove', enabled: false },
            { name: 'painWaveProjector', enabled: false },
            { name: 'deepEarPlugs', enabled: false }
        ],
        customWeapons: ''
    },
    chopper: {
        moves: [
            { name: 'packAlpha', enabled: false },
            { name: 'fuckingThieves', enabled: false }
        ],
        improvements: [
            { name: 'increaseHard', enabled: false },
            { name: 'increaseCool', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'gangOption', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'holdingWealth', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        gang: {
            size: '',
            harm: '',
            armor: '',
            tags: '',
            advantages: [
                { name: 'medium', enabled: false },
                { name: 'wellArmed', enabled: false },
                { name: 'wellArmored', enabled: false },
                { name: 'wellDisciplined', enabled: false },
                { name: 'nomadic', enabled: false },
                { name: 'rich', enabled: false }
            ],
            problems: [
                { name: 'breakdown', enabled: false },
                { name: 'grounded', enabled: false },
                { name: 'desertion', enabled: false },
                { name: 'obligation', enabled: false },
                { name: 'disease', enabled: false }
            ]
        },
        bike: {
            strengths: '',
            looks: '',
            weaknesses: ''
        }
    },
    driver: {
        moves: [
            { name: 'noShitDriver', enabled: false },
            { name: 'goodInTheClinch', enabled: false },
            { name: 'weatherEye', enabled: false },
            { name: 'daredevil', enabled: false },
            { name: 'collector', enabled: false },
            { name: 'otherCarIsTank', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseHot', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'driverMove', enabled: false },
            { name: 'driverMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'garageCrew', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        cars: []
    },
    gunLugger: {
        moves: [
            { name: 'battleHardened', enabled: false },
            { name: 'fuckThisShit', enabled: false },
            { name: 'battlefieldInstincts', enabled: false },
            { name: 'insanoLikeDrano', enabled: false },
            { name: 'preparedForInevitable', enabled: false },
            { name: 'bloodcrazed', enabled: false },
            { name: 'notToBeFuckedWith', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'gunLuggerMove', enabled: false },
            { name: 'gunLuggerMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'holdingWealth', enabled: false },
            { name: 'gangPackAlpha', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        fuckOffBigGuns: [
            { name: 'silencedSniper', enabled: false },
            { name: 'mg', enabled: false },
            { name: 'assaultRifle', enabled: false },
            { name: 'grenadeLauncher', enabled: false }
        ],
        seriousGuns: [
            { name: 'huntingRifle', enabled: false },
            { name: 'shotgun', enabled: false },
            { name: 'smg', enabled: false },
            { name: 'magnum', enabled: false },
            { name: 'grenadeTube', enabled: false },
            { name: 'apAmmo', enabled: false },
            { name: 'silencer', enabled: false }
        ],
        backupWeapons: [
            { name: '9mm', enabled: false },
            { name: 'bigAssKnife', enabled: false },
            { name: 'machete', enabled: false },
            { name: 'manyKnives', enabled: false },
            { name: 'grenades', enabled: false }
        ],
        armor: ''
    },
    hardHolder: {
        moves: [
            { name: 'leadership', enabled: false },
            { name: 'wealth', enabled: false }
        ],
        improvements: [
            { name: 'increaseHard', enabled: false },
            { name: 'increaseWeird', enabled: false },
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHot', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'holdingOption', enabled: false },
            { name: 'holdingOption', enabled: false },
            { name: 'eraseHoldingOption', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        holding: {
            holdingStats: {
                size: '',
                surplus: '',
                barter: '',
                gigs: '',
                want: ''
            },
            gang: {
                size: '',
                harm: '',
                armor: '',
                tags: ''
            },
            advantages: [
                { name: 'largePopulation', enabled: false },
                { name: 'smallPopulation', enabled: false },
                { name: 'lucrativeRaiding', enabled: false },
                { name: 'protectionTribute', enabled: false },
                { name: 'manufactory', enabled: false },
                { name: 'market', enabled: false },
                { name: 'largeGang', enabled: false },
                { name: 'wellDisciplinedGang', enabled: false },
                { name: 'goodArmory', enabled: false },
                { name: 'goodCompound', enabled: false }
            ],
            problems: [
                { name: 'disease', enabled: false },
                { name: 'famine', enabled: false },
                { name: 'decadence', enabled: false },
                { name: 'holdingOwesTribute', enabled: false },
                { name: 'smallGang', enabled: false },
                { name: 'gangSavagery', enabled: false },
                { name: 'shitArmory', enabled: false },
                { name: 'shitCoumpound', enabled: false }
            ]
        }
    },
    hocus: {
        moves: [
            { name: 'fortunes', enabled: false },
            { name: 'frenzy', enabled: false },
            { name: 'charismatic', enabled: false },
            { name: 'fuckingWacknut', enabled: false },
            { name: 'seeingSouls', enabled: false },
            { name: 'divineProtection', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'hocusMove', enabled: false },
            { name: 'hocusMove', enabled: false },
            { name: 'followersOption', enabled: false },
            { name: 'followersOption', enabled: false },
            { name: 'holdingWealth', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        followers: {
            description: '',
            surplus: '',
            barter: '',
            fortune: '',
            want: '',
            type: [
                { name: 'cult', enabled: false },
                { name: 'family', enabled: false },
                { name: 'students', enabled: false },
                { name: 'scene', enabled: false },
                { name: 'staff', enabled: false },
                { name: 'court', enabled: false }
            ],
            advantages: [
                { name: 'dedicated', enabled: false },
                { name: 'fortune', enabled: false },
                { name: 'augury', enabled: false },
                { name: 'party', enabled: false },
                { name: 'insight', enabled: false },
                { name: 'hardWorking', enabled: false },
                { name: 'growth', enabled: false }
            ],
            problems: [
                { name: 'fewFollowers', enabled: false },
                { name: 'desertion', enabled: false },
                { name: 'desperation', enabled: false },
                { name: 'stupor', enabled: false },
                { name: 'disease', enabled: false },
                { name: 'violence', enabled: false },
                { name: 'savagery', enabled: false }
            ]
        }
    },
    operator: {
        moves: [
            { name: 'moonlighting', enabled: false },
            { name: 'easyToTrust', enabled: false },
            { name: 'eyeOnTheDoor', enabled: false },
            { name: 'opportunistic', enabled: false },
            { name: 'reputation', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'operatorMove', enabled: false },
            { name: 'operatorMove', enabled: false },
            { name: 'gigCrew', enabled: false },
            { name: 'gigCrew', enabled: false },
            { name: 'removeObligationGig', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        payingGigs: [
            { name: 'bodyguarding', enabled: false },
            { name: 'surveillance', enabled: false },
            { name: 'raiding', enabled: false },
            { name: 'enforcement', enabled: false },
            { name: 'honestWork', enabled: false },
            { name: 'companionship', enabled: false },
            { name: 'deliveries', enabled: false },
            { name: 'infiltration', enabled: false },
            { name: 'scavenging', enabled: false },
            { name: 'brokeringDeals', enabled: false },
            { name: 'technicalWork', enabled: false },
            { name: 'fucking', enabled: false },
            { name: 'compoundDefense', enabled: false },
            { name: 'doingMurders', enabled: false }
        ],
        obligationGigs: [
            { name: 'avoidingSomeone', enabled: false },
            { name: 'payingDebts', enabled: false },
            { name: 'revenge', enabled: false },
            { name: 'protectingSomeone', enabled: false },
            { name: 'pursuingLuxury', enabled: false },
            { name: 'maintainingHonor', enabled: false },
            { name: 'seekingAnswers', enabled: false }
        ],
        crewContacts: ''
    },
    savvyHead: {
        moves: [
            { name: 'thingsSpeak', enabled: false },
            { name: 'bonefeel', enabled: false },
            { name: 'oftenerRight', enabled: false },
            { name: 'realityFrayingEdge', enabled: false },
            { name: 'spookyIntense', enabled: false },
            { name: 'deepInsights', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'savvyHeadMove', enabled: false },
            { name: 'savvyHeadMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'gangLeadership', enabled: false },
            { name: 'lifeSupport', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ]
    },
    skinner: {
        moves: [
            { name: 'breathtaking', enabled: false },
            { name: 'lost', enabled: false },
            { name: 'artfulGracious', enabled: false },
            { name: 'arrestingSkinner', enabled: false },
            { name: 'hypnotic', enabled: false }
        ],
        improvements: [
            { name: 'increaseCool', enabled: false },
            { name: 'increaseCool', enabled: false },
            { name: 'increaseHard', enabled: false },
            { name: 'increaseSharp', enabled: false },
            { name: 'skinnerMove', enabled: false },
            { name: 'skinnerMove', enabled: false },
            { name: 'twoGigsMoonlighting', enabled: false },
            { name: 'followersFortunes', enabled: false },
            { name: 'otherPlaybookMove', enabled: false },
            { name: 'otherPlaybookMove', enabled: false }
        ],
        graciousWeapons: [
            { name: 'sleevePistol', enabled: false },
            { name: 'ornateDagger', enabled: false },
            { name: 'hiddenKnives', enabled: false },
            { name: 'ornateSword', enabled: false },
            { name: 'antiqueHandgun', enabled: false }
        ],
        luxeGear: [
            { name: 'antiqueCoins', enabled: false },
            { name: 'eyeglasses', enabled: false },
            { name: 'longCoat', enabled: false },
            { name: 'spectacularTattoos', enabled: false },
            { name: 'skinHairKit', enabled: false },
            { name: 'pet', enabled: false }
        ]
    }
} satisfies ApocalypseWorldCharacter;
