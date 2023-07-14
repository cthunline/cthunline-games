export declare const seventhSeaBiographySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    concept: import("@sinclair/typebox").TString;
    nation: import("@sinclair/typebox").TString;
    religion: import("@sinclair/typebox").TString;
    reputations: import("@sinclair/typebox").TString;
    wealth: import("@sinclair/typebox").TInteger;
}>;
export declare const seventhSeaArcanaSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    virtue: import("@sinclair/typebox").TString;
    hubris: import("@sinclair/typebox").TString;
}>;
export declare const seventhSeaBackgroundSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    quirk: import("@sinclair/typebox").TString;
}>;
export declare const seventhSeaStorySchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    goal: import("@sinclair/typebox").TString;
    reward: import("@sinclair/typebox").TString;
    steps: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const seventhSeaTraitsSchema: import("@sinclair/typebox").TObject<{
    brawn: import("@sinclair/typebox").TInteger;
    finesse: import("@sinclair/typebox").TInteger;
    resolve: import("@sinclair/typebox").TInteger;
    wits: import("@sinclair/typebox").TInteger;
    panache: import("@sinclair/typebox").TInteger;
}>;
export declare const seventhSeaSkillsSchema: import("@sinclair/typebox").TObject<{
    aim: import("@sinclair/typebox").TInteger;
    athletics: import("@sinclair/typebox").TInteger;
    brawl: import("@sinclair/typebox").TInteger;
    convince: import("@sinclair/typebox").TInteger;
    empathy: import("@sinclair/typebox").TInteger;
    hide: import("@sinclair/typebox").TInteger;
    intimidate: import("@sinclair/typebox").TInteger;
    notice: import("@sinclair/typebox").TInteger;
    perform: import("@sinclair/typebox").TInteger;
    ride: import("@sinclair/typebox").TInteger;
    sailing: import("@sinclair/typebox").TInteger;
    scholarship: import("@sinclair/typebox").TInteger;
    tempt: import("@sinclair/typebox").TInteger;
    theft: import("@sinclair/typebox").TInteger;
    warfare: import("@sinclair/typebox").TInteger;
    weaponry: import("@sinclair/typebox").TInteger;
}>;
export declare const seventhSeaAdvantageSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
}>;
export declare const seventhSeaCharacterSchema: import("@sinclair/typebox").TObject<{
    biography: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        concept: import("@sinclair/typebox").TString;
        nation: import("@sinclair/typebox").TString;
        religion: import("@sinclair/typebox").TString;
        reputations: import("@sinclair/typebox").TString;
        wealth: import("@sinclair/typebox").TInteger;
    }>;
    heroPoints: import("@sinclair/typebox").TInteger;
    arcana: import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        virtue: import("@sinclair/typebox").TString;
        hubris: import("@sinclair/typebox").TString;
    }>;
    backgrounds: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        quirk: import("@sinclair/typebox").TString;
    }>>;
    stories: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        goal: import("@sinclair/typebox").TString;
        reward: import("@sinclair/typebox").TString;
        steps: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>>;
    traits: import("@sinclair/typebox").TObject<{
        brawn: import("@sinclair/typebox").TInteger;
        finesse: import("@sinclair/typebox").TInteger;
        resolve: import("@sinclair/typebox").TInteger;
        wits: import("@sinclair/typebox").TInteger;
        panache: import("@sinclair/typebox").TInteger;
    }>;
    skills: import("@sinclair/typebox").TObject<{
        aim: import("@sinclair/typebox").TInteger;
        athletics: import("@sinclair/typebox").TInteger;
        brawl: import("@sinclair/typebox").TInteger;
        convince: import("@sinclair/typebox").TInteger;
        empathy: import("@sinclair/typebox").TInteger;
        hide: import("@sinclair/typebox").TInteger;
        intimidate: import("@sinclair/typebox").TInteger;
        notice: import("@sinclair/typebox").TInteger;
        perform: import("@sinclair/typebox").TInteger;
        ride: import("@sinclair/typebox").TInteger;
        sailing: import("@sinclair/typebox").TInteger;
        scholarship: import("@sinclair/typebox").TInteger;
        tempt: import("@sinclair/typebox").TInteger;
        theft: import("@sinclair/typebox").TInteger;
        warfare: import("@sinclair/typebox").TInteger;
        weaponry: import("@sinclair/typebox").TInteger;
    }>;
    deathSpiral: import("@sinclair/typebox").TInteger;
    advantages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
    }>>;
    items: import("@sinclair/typebox").TString;
    notes: import("@sinclair/typebox").TString;
}>;
