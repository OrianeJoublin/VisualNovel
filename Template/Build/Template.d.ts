declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
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
    };
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
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
    };
    function jirkaAnimation(): ƒS.AnimationDefinition;
    function fromLefttoRight(): ƒS.AnimationDefinition;
    function fromToptoCenter(): ƒS.AnimationDefinition;
    function fromToplefttoTopcenter(): ƒS.AnimationDefinition;
    function SwayDown(): ƒS.AnimationDefinition;
    function Sway(): ƒS.AnimationDefinition;
    function Rain(): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare module "Source/Transitions" {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
