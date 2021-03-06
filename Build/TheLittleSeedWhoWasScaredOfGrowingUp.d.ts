declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function fromLefttoRight(): ƒS.AnimationDefinition;
    function fromToptoCenter(): ƒS.AnimationDefinition;
    function fromToplefttoTopcenter(): ƒS.AnimationDefinition;
    function SwayDown(): ƒS.AnimationDefinition;
    function Sway(): ƒS.AnimationDefinition;
    function dogEnter(): ƒS.AnimationDefinition;
    function dogExit(): ƒS.AnimationDefinition;
    function Rain(): ƒS.AnimationDefinition;
    function flyDown(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let characters: {
        narrator: {
            name: string;
        };
        alice: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        snowWhite: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        whiteRabbit: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        sun: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        teaCup: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        ManySeeds: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Rain: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Dog: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                walk: string;
            };
        };
        Crow: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                flight: string;
            };
        };
    };
}
declare namespace Template {
    let locations: {
        TreeWithoutSeeds: {
            name: string;
            background: string;
        };
        TreeWithoutSeeds2: {
            name: string;
            background: string;
        };
        SeedGrippingBranch: {
            name: string;
            background: string;
        };
        WindGust: {
            name: string;
            background: string;
        };
        WindtoCity: {
            name: string;
            background: string;
        };
        WindRain: {
            name: string;
            background: string;
        };
        MeetMable: {
            name: string;
            background: string;
        };
        WithMabletoCity: {
            name: string;
            background: string;
        };
        CityWithMable: {
            name: string;
            background: string;
        };
        CityWithMableRain: {
            name: string;
            background: string;
        };
        BirdCity: {
            name: string;
            background: string;
        };
        ArriveRoofTop: {
            name: string;
            background: string;
        };
        AntAndSeedHide: {
            name: string;
            background: string;
        };
        AntGetsEaten: {
            name: string;
            background: string;
        };
        MableJoins: {
            name: string;
            background: string;
        };
        AntFalls: {
            name: string;
            background: string;
        };
        SeedSavesAnt: {
            name: string;
            background: string;
        };
        GoodEnding: {
            name: string;
            background: string;
        };
        SeedAlone: {
            name: string;
            background: string;
        };
        BadEnding: {
            name: string;
            background: string;
        };
        Black: {
            name: string;
            background: string;
        };
        FinalGood: {
            name: string;
            background: string;
        };
        FinalBad: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let volume: number;
    function incrementSound(): void;
    function decrementSound(): void;
    let inGameMenu: {
        save: string;
        load: string;
        credits: string;
        shortcuts: string;
        turnUpVolume: string;
        turnDownVolume: string;
    };
    let gameMenu: ƒS.Menu;
    function showCredits(): void;
    function showShortcuts(): void;
    let menu: boolean;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
    let sound: {
        wakeUp: string;
        adventure: string;
        forestWalk: string;
        illusoryRealm: string;
        keysOfMoon: string;
        city: string;
        rain1: string;
        rain2: string;
        rain3: string;
        crow: string;
        storm: string;
        wind1: string;
        wind2: string;
        thunderStorm1: string;
        thunderStorm2: string;
        dogBark1: string;
        springWeather: string;
        springBirds: string;
        pageFlip: string;
        s1: string;
        s2: string;
        s3_1: string;
        s3_2: string;
        s3_3: string;
        s3_3_Choices: string;
        s3_4_iInsult: string;
        s3_4_iInsult2: string;
        s3_4_iSayHelp: string;
        s4A_1: string;
        s4A_2: string;
        s4A_3: string;
        s4A_3_Choices: string;
        S4A_4_iBeAngry: string;
        S4A_4_iBeNice: string;
        s4B_1: string;
        s4B_2: string;
        s4B_3: string;
        s4B_3_Choices: string;
        s4B_4_iSayNo: string;
        s5B_1: string;
        s5B_2: string;
        s5B_2_Choices: string;
        s5B_3_iSayNotSorry: string;
        s5B_3_iSaySorry: string;
        s5C_1: string;
        s5C_2: string;
        s6A: string;
        s7A_1: string;
        s7A_2: string;
        s7A_3: string;
        s7A_4: string;
        s7A_5: string;
        s7C_1: string;
        s7C_2: string;
        s7C_2_2: string;
        s7C_3: string;
        s8_1: string;
        s8_2: string;
        s8_3: string;
        s8_3_Choices: string;
        s9A_1: string;
        s9A_2: string;
        s9A_3: string;
        s9A_4: string;
        s9A_5: string;
        s9A_5_Choices: string;
        s9B_1: string;
        s9B_2: string;
        s9B_3: string;
        s9B_4: string;
        s10A_1: string;
        s10A_2: string;
        s10A_3: string;
        s10A_4: string;
        s10A_5: string;
        s10B_1: string;
        s10B_2: string;
        s10B_3: string;
        s10B_4: string;
        s10B_5: string;
        startAgainScreen: string;
        badEnding: string;
        goodEnding: string;
    };
}
declare namespace Template {
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        new: {
            duration: number;
            alpha: string;
            edge: number;
        };
        black: {
            duration: number;
            alpha: string;
            edge: number;
        };
        Splash: {
            duration: number;
            alpha: string;
            edge: number;
        };
        Page: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function S10A_GoodEnding(): ƒS.SceneReturn;
}
declare namespace Template {
    function S10B_BadEnding2(): ƒS.SceneReturn;
}
declare namespace Template {
    function StartAgainScreen(): ƒS.SceneReturn;
}
declare namespace Template {
    function EndOfNovel(): ƒS.SceneReturn;
}
declare namespace Template {
    function S1_IntroPart1(): ƒS.SceneReturn;
}
declare namespace Template {
    function S2_IntroPart2(): ƒS.SceneReturn;
}
declare namespace Template {
    function S3_SceneWind1(): ƒS.SceneReturn;
}
declare namespace Template {
    function S4A_SceneWindCity(): ƒS.SceneReturn;
}
declare namespace Template {
    function S4B_SceneDogSit(): ƒS.SceneReturn;
}
declare namespace Template {
    function S5B_SceneWindCity(): ƒS.SceneReturn;
}
declare namespace Template {
    function S5C_SceneDogRun(): ƒS.SceneReturn;
}
declare namespace Template {
    function S6A_SceneWindRain(): ƒS.SceneReturn;
}
declare namespace Template {
    function S7A_SceneDogCityRain(): ƒS.SceneReturn;
}
declare namespace Template {
    function S7C_SceneDogCity(): ƒS.SceneReturn;
}
declare namespace Template {
    function S8_SceneBirdRoof1(): ƒS.SceneReturn;
}
declare namespace Template {
    function S9A_SceneBirdRoof2(): ƒS.SceneReturn;
}
declare namespace Template {
    function S9B_BadEnding1(): ƒS.SceneReturn;
}
