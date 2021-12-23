declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
    };
}
declare namespace Template {
    function jirkaAnimation(): ƒS.AnimationDefinition;
    function fromLefttoRight(): ƒS.AnimationDefinition;
    function fromToptoCenter(): ƒS.AnimationDefinition;
    function fromToplefttoTopcenter(): ƒS.AnimationDefinition;
    function SwayDown(): ƒS.AnimationDefinition;
    function Sway(): ƒS.AnimationDefinition;
    function Rain(): ƒS.AnimationDefinition;
    function dogEnter(): ƒS.AnimationDefinition;
    function dogExit(): ƒS.AnimationDefinition;
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
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Template {
    let locations: {
        TreeWithoutSeeds: {
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
    };
}
declare namespace Template {
    let menu: boolean;
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
    };
    let gameMenu: ƒS.Menu;
    function buttonFunctionalities(_option: string): Promise<void>;
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
    };
}
declare namespace Template {
    function TestS1_IntroPart1(): ƒS.SceneReturn;
}
declare namespace Template {
    function S10A_GoodEnding(): ƒS.SceneReturn;
}
declare namespace Template {
    function S10B_BadEnding2(): ƒS.SceneReturn;
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
