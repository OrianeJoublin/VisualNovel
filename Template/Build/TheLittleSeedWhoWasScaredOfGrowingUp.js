"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        nameProtagonist: "",
        points: 0,
        scoreSeed: 0, //für Meterbar eines bestimmten Charakters
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.inGameMenu, Template.buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben
        let scenes = [
            //Linear
            // { scene: S3_SceneWind1, name: "S3_SceneWind1" },
            // { scene: S7A_SceneDogCityRain, name: "S7A_SceneDogCityRain" },
            //{ scene: NovelPages, name: "NovelPages" },
            //{ scene: StartPage, name: "Start Page" },
            { scene: Template.S1_IntroPart1, name: "S1_IntroPart1" },
            { scene: Template.S2_IntroPart2, name: "S2_IntroPart2" },
            { scene: Template.S3_SceneWind1, name: "S3_SceneWind1" },
            //{ scene: S5C_SceneDogRun, name: "S5C_SceneDogRun" },
            //{ scene: S6A_SceneWindRain, name: "S6A_SceneWindRain" },
            //{ scene: S7A_SceneDogCityRain, name: "S7A_SceneDogCityRain" },
            { scene: Template.S10A_GoodEnding, name: "S10A_GoodEnding" },
            //{ id: "Einführung", scene: Scene, name: "Scene", next: "Ende"},  //man kann direkt die nächste szene hier definieren statt return in der Szene
            //{ scene: Scene2, name: "Scene Two"},
            //{ id: "Ende", scene: encodeURI, name: "The End"},
            //{ id: "Einführung2", scene: Scene, name: "Scene" } //selbe Szene kann mehrere IDs haben
        ];
        // Interface elemente abspeichern
        let uiElement = document.querySelector("[type=interface]"); //Meterbar CSS
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    //Animationen, die für alle Szenen gelten
    function jirkaAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.5) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.jirkaAnimation = jirkaAnimation;
    ;
    function fromLefttoRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLefttoRight = fromLefttoRight;
    ;
    function fromToptoCenter() {
        return {
            start: { translation: Template.ƒS.positions.topcenter },
            end: { translation: Template.ƒS.positions.center },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromToptoCenter = fromToptoCenter;
    ;
    function fromToplefttoTopcenter() {
        return {
            start: { translation: Template.ƒS.positions.topleft },
            end: { translation: Template.ƒS.positions.topcenter },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromToplefttoTopcenter = fromToplefttoTopcenter;
    ;
    //export function SwayDown(): ƒS.AnimationDefinition {
    //return {
    //start: { translation: ƒS.positionPercent(40, 45) },
    //end: { translation: ƒS.positionPercent(50, 50) },
    //duration: 30, // as long as you want
    //playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    // }
    // };
    function SwayDown() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 45) },
            end: { translation: Template.ƒS.positionPercent(80, 150) },
            duration: 110,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.SwayDown = SwayDown;
    ;
    function Sway() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 45) },
            end: { translation: Template.ƒS.positionPercent(50, 45) },
            duration: 30,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.Sway = Sway;
    ;
    function dogEnter() {
        return {
            start: { translation: Template.ƒS.positionPercent(10, 50) },
            end: { translation: Template.ƒS.positionPercent(50, 50) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.dogEnter = dogEnter;
    ;
    function dogExit() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 50) },
            end: { translation: Template.ƒS.positionPercent(180, 50) },
            duration: 4,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.dogExit = dogExit;
    ;
    function Rain() {
        return {
            start: { translation: Template.ƒS.positions.topcenter },
            end: { translation: Template.ƒS.positions.center },
            duration: 0.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.Rain = Rain;
    ;
    function flyDown() {
        return {
            start: { translation: Template.ƒS.positionPercent(10, 30) },
            end: { translation: Template.ƒS.positionPercent(50, 50) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.flyDown = flyDown;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Charaktere
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        alice: {
            name: "Alice",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Uebung/Charaktere/Alice_in_wonderland.png",
            }
        },
        snowWhite: {
            name: "Snow White",
            origin: Template.ƒS.ORIGIN.CENTERLEFT,
            pose: {
                neutral: "./Uebung/Charaktere/snowwhite_small.png",
            }
        },
        whiteRabbit: {
            name: "White Rabbit",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Uebung/Charaktere/Rabbit_small.png",
            }
        },
        sun: {
            name: "sun",
            origin: Template.ƒS.ORIGIN.TOPCENTER,
            pose: {
                neutral: "./Uebung/Charaktere/sun_small.png",
            }
        },
        teaCup: {
            name: "Tea Cup",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                neutral: "./Uebung/Charaktere/flying_cup.png",
            }
        },
        ManySeeds: {
            name: "Many Seeds",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                neutral: "./Characters/Seeds.png",
            }
        },
        Rain: {
            name: "Rain",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                neutral: "./Characters/Rain2.png",
            }
        },
        Dog: {
            name: "Dog",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                walk: "./Characters/Dog.png",
            }
        },
        Crow: {
            name: "Crow",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                flight: "./Characters/Crow.png",
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    //Items, die man erhält und zum Inventar zugefügt werden
    Template.items = {
        pen: {
            name: "Red Pen",
            description: "A red pen",
            image: "./Images/Items/redPen"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Hintergründe
    Template.locations = {
        TreeWithoutSeeds: {
            name: "1 Tree without seeds",
            background: "./Backgrounds/1TreeWithoutSeeds.png"
        },
        SeedGrippingBranch: {
            name: "2 Seed Gripping Branch",
            background: "./Backgrounds/2SeedGrippingBranch.png"
        },
        WindGust: {
            name: "3 Wind Gust",
            background: "./Backgrounds/3WindGust.png"
        },
        WindtoCity: {
            name: "4A Wind to City",
            background: "./Backgrounds/4AWindtoCity.png"
        },
        WindRain: {
            name: "4A Wind Rain",
            background: "./Backgrounds/4AWindRain.png"
        },
        MeetMable: {
            name: "4B Meet Mable",
            background: "./Backgrounds/4BMeetMable.png"
        },
        WithMabletoCity: {
            name: "5B With Mable to City",
            background: "./Backgrounds/5BWithMabletoCity.png"
        },
        CityWithMable: {
            name: "6B City With Mable",
            background: "./Backgrounds/6ACityWithMable.png"
        },
        CityWithMableRain: {
            name: "6B City With Mable Rain",
            background: "./Backgrounds/6BCityWithMableRain.png"
        },
        BirdCity: {
            name: "7 Bird City",
            background: "./Backgrounds/7BirdCity.png"
        },
        ArriveRoofTop: {
            name: "8 Arrive Roof Top",
            background: "./Backgrounds/8ArriveRoofTop.png"
        },
        AntAndSeedHide: {
            name: "9A Ant And Seed Hide",
            background: "./Backgrounds/9AAntAndSeedHide.png"
        },
        AntGetsEaten: {
            name: "9B Ant Gets Eaten",
            background: "./Backgrounds/9BAntGetsEaten.png"
        },
        MableJoins: {
            name: "10A Mable Joins",
            background: "./Backgrounds/10AMableJoins.png"
        },
        AntFalls: {
            name: "11B Ant Falls",
            background: "./Backgrounds/11BAntFalls.png"
        },
        SeedSavesAnt: {
            name: "11 Seed Saves Ant",
            background: "./Backgrounds/11SeedSavesAnt.png"
        },
        GoodEnding: {
            name: "12A Good Ending",
            background: "./Backgrounds/12AGoodEnding.png"
        },
        SeedAlone: {
            name: "12B Seed Alone",
            background: "./Backgrounds/12BSeedAlone.png"
        },
        BadEnding: {
            name: "13B Bad Ending",
            background: "./Backgrounds/13BBadEnding.png"
        },
        Black: {
            name: "Black",
            background: "./Backgrounds/starry.png"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        //close: "Close"
        credits: "Credits",
        // open: "Open"
        shortcuts: "Shortcuts"
    };
    function showCredits() {
        Template.ƒS.Text.setClass("credits");
        Template.ƒS.Text.print("<p> CREDITS </p> <p> Story by Oriane Joublin <br> Backgrounds and Characters by Oriane Joublin <br> Art by Oriane Joublin <br> Programming by Oriane Joublin </p> <p> MUSIC </p> <p> Adventure by Alexander Nakarada <br> Forest Walk by Alexander Nakarada <br> Wake Up by Scandinavianz </p> <p> SOUNDS </p> Sound effects from soundjay.com <br> Additional sound effects from zapsplat.com </p> <p> Made with FUDGEStory </p> <p> WITH SPECIAL THANKS <br> to Carina Spangenberger, Riem Yasin, Jirka Dell'Oro and <br> Frank Joublin for their support in programming questions and <br> to Iris Schnabel and Emily Pacey for improving the rhymes.</p>");
    }
    Template.showCredits = showCredits;
    ;
    function showShortcuts() {
        Template.ƒS.Text.setClass("shortcuts");
        Template.ƒS.Text.print("SHORTCUTS Explanation HERE");
    }
    Template.showShortcuts = showShortcuts;
    ;
    // true = offen; false = geschlossen
    Template.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.credits:
                showCredits();
                break;
            case Template.inGameMenu.shortcuts:
                showShortcuts();
                break;
            //case inGameMenu.close:
            //gameMenu.close();
            //menu = false;
            //break;
            //case inGameMenu.open:
            //gameMenu.open();
            //menu = true;
            //break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu) {
                    console.log("Schließen");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Öffnen");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
    Template.hndKeyPress = hndKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // music 
        //wakeUp: "./Music/WakeUp.mp3",
        wakeUp: "./Music/CombinedMusicMedium.wav",
        adventure: "./Music/Adventure.mp3",
        forestWalk: "./Music/ForestWalk.mp3",
        illusoryRealm: "./Music/IllusoryRealm.mp3",
        keysOfMoon: "./Music/keysOfMoonWhitePetals.mp3",
        // sound
        city: "./SoundEffects/ambience_city_london_uk_sirens_distant_constant_construction_pounding_wind_trees.mp3",
        rain1: "./SoundEffects/rain-03.mp3",
        rain2: "./SoundEffects/rain-06.mp3",
        rain3: "./SoundEffects/rain-07.mp3",
        crow: "./SoundEffects/Blastwave_FX_BirdCrowCawMultiple_SFXB.17.mp3",
        storm: "./SoundEffects/zapsplat_nature_ambience_approaching_thunderstorm_rain_wind_intensifies_blustery_rumbles_thunder_74166.mp3",
        wind1: "./SoundEffects/wind-breeze-01.mp3",
        wind2: "./SoundEffects/windy-forest-ambience-01.mp3",
        thunderStorm1: ".SoundEffects/zapsplat_nature_thunderstorm_approaching_distant_rumbles_rain_then_rain_heavier_at_2m50s_57911.mp3",
        thunderStorm2: "./SoundEffects/zapsplat_nature_rain_thunderstorm_close_rain_drips_yard_57904.mp3",
        dogBark1: "./SoundEffects/zapsplat_animals_dog_labrador_bark_slight_distance_echo_neighbourhood_11751.mp3",
        springWeather: "./spring-weather-1.wav",
        springBirds: "./Blastwave_FX_NatureBirdsCrickets_BW.1500"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // define transitions
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "./Transitions/jigsaw01.png",
            edge: 1 // harte Transition
        },
        new: {
            duration: 1,
            alpha: "./Transitions/001.jpg",
            edge: 1 // harte Transition
        },
        black: {
            duration: 1,
            alpha: "./Transitions/black.png",
            edge: 0.5
        },
        Splash: {
            duration: 1,
            alpha: "./Images/Splash.png",
            edge: 2
        },
        Page: {
            duration: 5,
            alpha: "./Transitions/Page1.png",
            edge: 2
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TestS1_IntroPart1() {
        console.log("S1_IntroPart1 starting");
        let text = {
            narrator: {
                T0000: "Somewhere far away <br> On a little hill in May <br> Stood a miracle tree <br> Spreading its branches gleefully",
                T0001: ""
            },
            seed: {
                T0000: "Hi",
                T0001: ""
            },
            snowWhite: {
                T0000: "Oh but our guest doesn't have any yet! Would you like some tea?",
                T0001: "Here you go!",
                T0002: "Because when the tea gets cold, the sun comes out. Do you want to wait for it or rather drink the tea?",
                T0003: "Right? But the sun only comes out for a few seconds and then leaves us again."
            },
            whiteRabbit: {
                T0000: "I wonder what time the tea will be cold.",
                T0001: "Fine, then lets start the timer and count the seconds.",
                T0002: "So, let's go home then, alright?"
            },
            alice: {
                T0000: "Yes, please!",
                T0001: "No, thanks.",
                T0002: "Why are you waiting for the tea to be cold?",
                T0003: "I'll wait.",
                T0004: "I'm not waiting for the tea to be cold, no way!",
                T0005: "That's so pretty!",
                T0006: "Actually, I'd like some tea now, if that's okay?"
            }
        };
        //Musik
        //ƒS.Sound.play(sound.backgroundTheme, 0.1, true);
        Template.ƒS.Sound.fade(Template.sound.adventure, 0.2, 2, true); // true = gelooped
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(1)]);
        //Text während Animation
        let animationDone = Template.ƒS.Character.animate(Template.characters.ManySeeds, Template.characters.ManySeeds.pose.neutral, Template.Sway());
        // Background and characters appear:
        await Template.ƒS.Location.show(Template.locations.TreeWithoutSeeds);
        //await ƒS.Location.show(locations.Teatime);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
        animationDone;
        //await ƒS.Character.show(characters.snowWhite, characters.snowWhite.pose.neutral, ƒS.positions.centerleft); // oder positionPercent, wo ich x und y Koordinaten eingeben kann
        //await ƒS.update(1); // transition Länge (hier eine Sekunde)
        //await ƒS.Character.show(characters.whiteRabbit, characters.whiteRabbit.pose.neutral, ƒS.positionPercent (70,80)); // oder positionPercent, wo ich x und y Koordinaten eingeben kann
        //await ƒS.update(1); // transition Länge (hier eine Sekunde)
        //await ƒS.Character.show(characters.alice, characters.alice.pose.neutral, ƒS.positions.bottomright); // oder positionPercent, wo ich x und y Koordinaten eingeben kann
        //await ƒS.update(1); // transition Länge (hier eine Sekunde)
        //await ƒS.Character.show(characters.ManySeeds, characters.ManySeeds.pose.neutral,ƒS.positions.center)
        //await ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, Sway());
        //await ƒS.Character.animate (characters.ManySeeds, characters.ManySeeds.pose.neutral, Sway());
        //await ƒS.Character.animate (characters.alice, characters.alice.pose.neutral, jirkaAnimation());
        //await ƒS.Character.animate (characters.whiteRabbit, characters.whiteRabbit.pose.neutral, fromLefttoRight ()); // animation
        await Template.ƒS.Character.animate(Template.characters.Rain, Template.characters.Rain.pose.neutral, Template.Rain());
        //Input Feld
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.nameProtagonist);
        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();
        //await ƒS.Speech.tell(chara)
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "introduction");
        await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0000 + " " + Template.dataForSave.nameProtagonist + " restlicher Text."); // wartet auf Nutzereingabe, für Text
        await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0000);
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameProtagonist, "Quatsch", true, "protagonist"); //letztes = css Klasse
        //await ƒS.Speech.tell(characters.snowWhite, "Hi2."); // für Auswahlmöglichkeiten
        //await ƒS.Character.hide(characters.seed);
        // Text pace
        Template.ƒS.Speech.setTickerDelays(20, 2); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile
        let firstDialogueElementOptions = {
            // iSayOk: "Okay.", // immer mit i anfangen weil perspektive des Spielers
            iSayYes: "Yes, please!",
            iSayNo: "No thanks."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); // Gestaltungsklassen mit CSS vergeben
        switch (firstDialogueElement) { //switch case springt zum jeweiligen case und breaked es/ springt raus
            // case firstDialogueElementOptions.iSayOk:
            //await ƒS.Speech.tell(characters.seed, "Hi2.");
            //break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.animate(Template.characters.teaCup, Template.characters.teaCup.pose.neutral, Template.fromToptoCenter());
                //await ƒS.Character.show(characters.teaCup, characters.teaCup.pose.neutral, ƒS.positions.center); //angenommen anderere charkter wäre deklariert dann was anderes als seed
                await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0001);
                await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0001);
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
                await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0002);
                break; //man kann aber auch in einer case eine case haben
            //man könnte auch hier return "szene"; machen
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10; //wenn Spieler so und so viele Punkte gesammelt hat, kommt x Szene
                await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0001);
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
                await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0002);
                break;
        }
        ;
        let secondDialogueElementOptions = {
            iSayWait: "I'll wait",
            iSayNotWait: "I'm not waiting for the tea to be cold, no way!"
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "individualCSSClass");
        switch (secondDialogueElement) {
            case secondDialogueElementOptions.iSayWait:
                await Template.ƒS.Character.animate(Template.characters.sun, Template.characters.sun.pose.neutral, Template.fromToplefttoTopcenter());
                //await ƒS.Character.show(characters.sun, characters.sun.pose.neutral, ƒS.positions.center); 
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0005);
                await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0003);
                await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0002);
                break;
            case secondDialogueElementOptions.iSayNotWait:
                await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0002);
                break;
        }
        ;
        //Musik Ausblenden
        Template.ƒS.Sound.fade(Template.sound.adventure, 0, 2);
        //if (dataForSave.points === 100) { //hier drei = weil noch number und string vertreten
        // return End(); //--> zB. wenn so viele Punkte erreicht, dann die szene, das wäre aber kein Punkteverteilungssystem (nur wenn Zieler gezielt im Konzept Punkte sammelt)
        // }
        //return "Ende"; (um auf ende zu gehen)
        //oder
        // return End(); 
    }
    Template.TestS1_IntroPart1 = TestS1_IntroPart1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function NovelPages() {
        console.log("Novel Pages");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            narrator: {
                T0000: "Novel pages können ganz unterschiedlich verwendet werden.",
                T0001: "Hier konntest du ein Beispiel sehen, bei dem man die Seiten, wie in einem Buch, umblättert."
            }
        };
        // document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
        // document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);
        // gameMenu.close();
        // menu = false;
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.AntFalls);
        // await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Crow, Template.characters.Crow.pose.flight, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        // await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000);
        // if (!dataForSave.started) {
        Template.ƒS.Text.addClass("contract");
        Template.ƒS.Speech.hide();
        let pages = ["<strong>Überschrift:</strong>blabla<br></br> \
          <br>Seite 1</br>", "<strong>Überschrift</strong>\
          <br>Seite 2</br>", "<strong>Überschrift</strong> \
          <br>test text test</br> text test text <br>test text test</br> text<br></br> Seite 3", "Seite 4", "Seite 5", "Seite 6", "Seite 7", "Seite 8"];
        let current = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice;
        Template.ƒS.Text.addClass("flip");
        do {
            Template.ƒS.Text.print(pages[current]);
            choice = await Template.ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    break;
                case flip.next:
                    current = Math.min(pages.length - 1, current + 1);
                    break;
                // case flip.back: current = Math.max(0, current - 1); break;
                // case flip.next: current = Math.min(2, current + 1); break;
            }
        } while (choice != flip.done);
        Template.ƒS.Text.close();
        // }
        // Delay reinmachen + testen
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0001);
        Template.ƒS.Text.print("Lies mich.");
        Template.ƒS.Text.setClass("text");
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Probier' es doch einmal selbst aus.");
        await Template.ƒS.Character.hide(Template.characters.Crow);
        await Template.ƒS.update(1);
    }
    Template.NovelPages = NovelPages;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function StartPage() {
        console.log("StartPage starting");
        // Background, transitions and characters appear:
        await Template.ƒS.Location.show(Template.locations.Black);
        //await ƒS.update(transitions.Page.duration, transitions.Page.alpha, transitions.Page.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
        //Novel Page
        Template.ƒS.Text.setClass("NovelPageKlassennameZumGestalten"); //addClass klasse hinzufügen vs. Set Class wo gestalterisches von alten Klass auch übernommen wird
        Template.ƒS.Text.print("Willkommen zu dieser Visual Novel xyz");
    }
    Template.StartPage = StartPage;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S10A_GoodEnding() {
        console.log("S10A_GoodEnding starting");
        let text = {
            narrator: {
                T0000: "<p> " + Template.dataForSave.nameProtagonist + " jumped with a scream <br> As if in a dream <br> Over the roof's edge <br> Its body stretched. </p>",
                T0001: "<p> The seed soared through the air <br> Living its greatest nightmare <br> Down there was the ant <br> " + Template.dataForSave.nameProtagonist + " stretched out its hand. <br> Annie, the wind picked them up lightly <br> Smiling widely. </p>",
                T0002: "<p> “I will drop you both to the ground <br> Destiny always comes round. <br> But first I’ll make a confession <br> For you gave me a lesson. </p>",
                T0003: "<p> You taught me that a detour <br> Can make you more mature! <br> So farewell my friend <br> I swear this is not the end!” </p>",
                T0004: "<p> Many seasons came around <br> And out of the ground <br> Just at the spot <br> Where the seed had dropped <br> Had grown a mighty tree. </p>",
                T0005: "<p> By its side was Mable chasing a flea. <br> The wind tickled its leaves <br> While Ralph told the seeds. <br> Don’t be scared of falling. <br> It’s the very beginning. </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.SeedSavesAnt);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        Template.ƒS.Sound.fade(Template.sound.wind1, 0.2, 2, true);
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.4, 2, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "S10AT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true, "S10AT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S10AT1");
        Template.ƒS.Sound.fade(Template.sound.wind1, 0, 2, true);
        Template.ƒS.Speech.clear();
        //New Background Healthy Tree
        await Template.ƒS.Location.show(Template.locations.GoodEnding);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        Template.ƒS.Sound.fade(Template.sound.wind2, 0.08, 2, true);
        Template.ƒS.Sound.fade(Template.sound.springBirds, 1, 2, true);
        Template.ƒS.Sound.fade(Template.sound.springWeather, 0.2, 2, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004, true, "S10AT2");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005, true, "S10AT2");
        Template.ƒS.Speech.clear();
        //Return Start or Credits? + Novel Page: Do you want to start over?
    }
    Template.S10A_GoodEnding = S10A_GoodEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S10B_BadEnding2() {
        console.log("S10B_BadEnding2 starting");
        let text = {
            narrator: {
                T0000: "<p> Too scared to face its greatest fear  <br>" + Template.dataForSave.nameProtagonist + " took a step back in tears. <br> “I can't save him, I just can't!” <br> The seed answered the demand. </p>",
                T0001: "<p> Mable and " + Template.dataForSave.nameProtagonist + " watched in horror <br> as the ant fell and like water <br> splashed onto the ground <br> without a sound. </p>",
                T0002: "<p> “I knew you were scared <br> I never thought you were selfish.” <br> Said Anni and glared <br> at " + Template.dataForSave.nameProtagonist + " without relish. </p>",
                T0003: "<p> “Go back then to where you belong! <br> After all, my friends never stay for long. <br> I'll be here on my own.” <br> said " + Template.dataForSave.nameProtagonist + " with a moan. </p>",
                T0004: "<p> No one ever talked to seed again <br> This had been the moment when <br> it could have shown some gratitude to all <br> who had helped it not to fall. </p>",
                T0005: "<p> " + Template.dataForSave.nameProtagonist + " had missed its chance, <br> now it sat down in trance. <br> On the roof that was to become its tomb <br> " + Template.dataForSave.nameProtagonist + " would never bloom. </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.AntFalls);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "S10BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001, true, "S10BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002, true, "S10BT1");
        Template.ƒS.Speech.clear();
        //New Background Seed Alone in Rain
        await Template.ƒS.Location.show(Template.locations.SeedAlone);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Animation Rain and Sound
        await Template.ƒS.Character.animate(Template.characters.Rain, Template.characters.Rain.pose.neutral, Template.Rain());
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.15, 2, true);
        Template.ƒS.Sound.fade(Template.sound.rain3, 1, 2, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003, true, "S10BT2");
        //Rain Animation and Sound Stop
        Template.ƒS.Sound.fade(Template.sound.rain3, 0, 4, true);
        Template.ƒS.Character.hide(Template.characters.Rain);
        Template.ƒS.Speech.clear();
        //New Background Bad Ending
        await Template.ƒS.Location.show(Template.locations.BadEnding);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        // Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004 + text.narrator.T0005, true, "S10BT3");
        Template.ƒS.Speech.clear();
        //Return Start or Credits? + Novel Page: Do you want to start over?
    }
    Template.S10B_BadEnding2 = S10B_BadEnding2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S1_IntroPart1() {
        console.log("S1_IntroPart1 starting");
        let text = {
            narrator: {
                T0000: "<p> Somewhere very far away <br> On a little hill in May <br> Stood a miracle tree <br> Spreading its branches gleefully. </p>",
                T0001: "<p> During this happy spring event. <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
                T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> they would give birth."
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.4, 0, true);
        //Animation auch während Text möglich
        let animationDone = Template.ƒS.Character.animate(Template.characters.ManySeeds, Template.characters.ManySeeds.pose.neutral, Template.SwayDown());
        // Background, transitions and characters appear:
        await Template.ƒS.Location.show(Template.locations.TreeWithoutSeeds);
        //ƒS.update(transitions.Page.duration, transitions.Page.alpha, transitions.Page.edge);
        animationDone;
        //Novel Page
        Template.ƒS.Text.setClass("startScreen");
        Template.ƒS.Text.print("<p> Willkommen zu dieser Visual Novel! </p> <p> Um in den Szenen weiter zu kommen, <br> einfach auf den Bildschirm klicken. <br> Für ein besseres Erlebnis bitte wie <br> folgt in den Vollbildmodus wechseln: </p> <p> Windows: F11 <br> Mac: Ctrl - Cmd – F </p> <p> Dieselbe Tastenkombination dient <br> auch dazu, aus dem Vollbildmodus <br> auszusteigen. </p> <p> Viel Spaß! </p>");
        // Text pace
        Template.ƒS.Speech.setTickerDelays(80, 500); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht.
        //Text
        await Template.ƒS.Speech.tell(null, null, true); //nur damit text erst nach erstem klick kommt wegen Novel Page 
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
        // Animation endet
        Template.ƒS.Character.hide(Template.characters.ManySeeds);
        Template.ƒS.Speech.clear();
    }
    Template.S1_IntroPart1 = S1_IntroPart1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S2_IntroPart2() {
        console.log("S2_IntroPart2 starting");
        let text = {
            narrator: {
                T0000: "<p> But one little seed hung on tightly <br> swearing quite impolitely <br> It was scared of falling to the ground <br> But no help could be found. </p>",
                T0001: "<p> “Don’t go, my friends. <br> Don’t leave me alone!” <br> The seed cried on its own. </p>",
                T0002: "Then spoke the wind <br> as she sheepishly grinned: <br> “Don’t be so scared little one, <br> The journey might be fun!” </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.SeedGrippingBranch);
        await Template.ƒS.update(Template.transitions.black.duration, Template.transitions.black.alpha, Template.transitions.black.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
        Template.ƒS.Speech.clear();
    }
    Template.S2_IntroPart2 = S2_IntroPart2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S3_SceneWind1() {
        console.log("S3_SceneWind1 starting");
        let text = {
            narrator: {
                T0000: "<p> And there came a gust <br> The seed had no chance <br> Against the force of its thrust. <br> Like in a dance <br> It soared up in the air <br> Hating the affair. </p>",
                T0001: "<p> The screams and the crying <br> of the seed feeling forlorn. <br> Where muffled by the whistling <br> sound of the storm.</p>",
                T0002: "<p> “Don’t be scared”, repeated the wind, <br> And still she grinned. <br> “I’m Anni, what’s your name?”, she said. <br> The seed replied with a nod of its head: </p>",
                T0003: "Then, name X frowned a little <br> And opened its mouth:",
                TD101: "<p> “Please, help me, I don’t want <br> To end on the ground!” </p>",
                TD102: "<p> “If that is you wish, <br> I won’t drop you, I promise. <br> I’ll get you to town <br> Where you can look around.” </p>",
                TD201: "<p> “You killed all my friends, you stupid wind!” </p>",
                TD202: "Thunder growled as Anni got angry: <br> “Is that so? <br> Well here you go! <br> See what I did to them, <br> And then thank me later!”",
                TD203: " by its stem <br> And with no restraint, <br> Anni thrust the seed down <br> Down down down <br> Towards the ground."
            }
        };
        //Sound
        Template.ƒS.Sound.fade(Template.sound.wind1, 0.2, 2, true);
        // Background and characters appear:
        await Template.ƒS.Location.show(Template.locations.WindGust);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();
        //Narrator Speech
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S3T1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + "<br> “I'm ", false, "S3T2");
        //Input Feld (Müsste aber eigentlich innerhalb des Texts erscheinen)
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.nameProtagonist);
        //let promiseName: Promise<string> = ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.narrator, "”</p>" + "Then, " + Template.dataForSave.nameProtagonist + " frowned a little <br> And opened its mouth:", false, "S3T2");
        //dataForSave.nameProtagonist = await promiseName;
        //console.log(dataForSave.nameProtagonist);
        let decisionS3ElementOptions = {
            iSayHelp: "Ask for help",
            iInsult: "Insult"
        };
        let decisionS3Element = await Template.ƒS.Menu.getInput(decisionS3ElementOptions, "decisionClass");
        switch (decisionS3Element) {
            case decisionS3ElementOptions.iSayHelp:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD101 + text.narrator.TD102, true, "S3T2");
                Template.ƒS.Speech.clear();
                return Template.S4A_SceneWindCity();
            case decisionS3ElementOptions.iInsult:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD201 + text.narrator.TD202, true, "S3T2");
                await Template.ƒS.Speech.tell(Template.characters.narrator, "A new gust of wind grabbed " + Template.dataForSave.nameProtagonist + text.narrator.TD203, true, "S3T2");
                Template.ƒS.Sound.fade(Template.sound.wind1, 0, 2);
                Template.ƒS.Speech.clear();
                return Template.S4B_SceneDogSit();
        }
        ;
    }
    Template.S3_SceneWind1 = S3_SceneWind1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S4A_SceneWindCity() {
        console.log("S4A_SceneWindCity starting");
        let text = {
            narrator: {
                T0000: "<p> And so the wind blew <br> And together they flew <br> To the next city <br> And arrived in a jiffy. </p>",
                T0001: " was excited <br> It had never seen anything so far from its tree. <br> The wind felt its glee <br> And said reprovingly: <br> “I have to warn you, so let it be said <br> That if you keep your wish, <br> you’re destined to be sad!”",
                TD101: "“I hope you are wrong <br> And we can move along <br> With your help I’m sure <br> I will find my own path.”",
                TD201: "“Of course I can, you liar! <br> I will fly higher! <br> Than all those friends <br> Who left me behind.”"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.WindtoCity);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "S3T1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dataForSave.nameProtagonist + text.narrator.T0001, true, "S3T1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.dataForSave.nameProtagonist + " answered, slightly on edge:", true, "S3T1");
        let decisionS4AElementOptions = {
            iBeNice: "Be nice",
            iBeAngry: "Get angry"
        };
        let decisionS4AElement = await Template.ƒS.Menu.getInput(decisionS4AElementOptions, "individualCSSClass");
        switch (decisionS4AElement) {
            case decisionS4AElementOptions.iBeNice:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD101, true, "S3T1");
                break;
            case decisionS4AElementOptions.iBeAngry:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD201, true, "S3T1");
                break;
        }
        ;
        Template.ƒS.Speech.clear();
        return Template.S6A_SceneWindRain();
    }
    Template.S4A_SceneWindCity = S4A_SceneWindCity;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S4B_SceneDogSit() {
        console.log("S4B_SceneDogSit starting");
        let text = {
            narrator: {
                T0000: "<p> With a sudden twirl <br>" + Template.dataForSave.nameProtagonist + " crashed upon the muzzle of a girl <br> It was Mabel the dog <br> Who was sitting in the fog. </p>",
                T0001: "The dog’s body trembled <br> Just as " + Template.dataForSave.nameProtagonist + " had settled <br> With a loud “Jeeez” <br> Mable sneezed.",
                T0002: "<p> “I almost died there”, <br> Said " + Template.dataForSave.nameProtagonist + " with prodruding hair. <br> “I’m sorry”, the dog said, “you tickled my nose!” <br> “You’re Mable, right? The dog in the shadows?”</p>",
                T0003: "Mable nodded and, taking the lead, <br> Asked “what is your name, little seed?” <br> " + Template.dataForSave.nameProtagonist + " replied and told its tale of woe: <br> “I lost my home, everything I've ever known!”",
                T0004: "The dog looked around at " + Template.dataForSave.nameProtagonist + ", her new friend <br> And assured it: “this won't be the end!” <br> Say, will you let me help you, <br> Get to where you want to?”",
                TD101: "<p> “No thanks, I don’t need another friend <br> Who will leave me in the end.” </p>",
                TD102: Template.dataForSave.nameProtagonist + " said goodbye <br> And jumped into the sky <br> Leaving Mable behind <br> Even though she’d been kind.",
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.MeetMable);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S4BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S4BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004 + "<p>" + Template.dataForSave.nameProtagonist + " said: </p>", true, "S4BT1");
        let decisionS4BElementOptions = {
            iSayYes: "Yes, please!",
            iSayNo: "No thanks!"
        };
        let decisionS4BElement = await Template.ƒS.Menu.getInput(decisionS4BElementOptions, "individualCSSClass");
        switch (decisionS4BElement) {
            case decisionS4BElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD101 + text.narrator.TD102, true, "S4BT1");
                Template.ƒS.Speech.clear();
                return Template.S5B_SceneWindCity();
            case decisionS4BElementOptions.iSayYes:
                Template.ƒS.Speech.clear();
                return Template.S5C_SceneDogRun();
        }
        ;
    }
    Template.S4B_SceneDogSit = S4B_SceneDogSit;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S5B_SceneWindCity() {
        console.log("S5B_SceneWindCity starting");
        let text = {
            narrator: {
                T0000: "<p> Higher and higher " + Template.dataForSave.nameProtagonist + " flew <br> Carried by the wind it knew <br> Anni was her name <br> And she wasn’t that tame. </p>",
                T0001: "“Back so soon? <br>  It’s not even noon! <br> I though you hated me! <br> Are you at least sorry?”",
                T0002: "<p> Together they travelled <br> As time unravelled <br> To the next city <br> Which was quite pretty <br> And so arrived dawn <br> as the morning yawned.</p>",
                T0003: Template.dataForSave.nameProtagonist + " finally responded <br> To the wind’s inquiery:",
                TD101: "<p> “You’re right to be offended <br> And yes I am sorry. <br> Does that mean you will help me?” </p>",
                TD201: "“I don’t want to be helped <br> and no I’m not sorry.”",
            }
        };
        //Sound
        Template.ƒS.Sound.fade(Template.sound.wind1, 0.2, 2, true);
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.WindtoCity);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S5BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S5BT1");
        let decisionS4BElementOptions = {
            iSaySorry: "Sorry",
            iSayNotSorry: "Not sorry"
        };
        let decisionS4BElement = await Template.ƒS.Menu.getInput(decisionS4BElementOptions, "individualCSSClass");
        switch (decisionS4BElement) {
            case decisionS4BElementOptions.iSaySorry:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD101, true, "S5BT1");
                Template.ƒS.Sound.fade(Template.sound.wind1, 0, 2);
                Template.ƒS.Speech.clear();
                return Template.S6A_SceneWindRain();
            case decisionS4BElementOptions.iSayNotSorry:
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.TD201, true, "S5BT1");
                Template.ƒS.Sound.fade(Template.sound.wind1, 0, 2);
                Template.ƒS.Speech.clear();
                return Template.S6A_SceneWindRain();
        }
        ;
    }
    Template.S5B_SceneWindCity = S5B_SceneWindCity;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S5C_SceneDogRun() {
        console.log("S5C_SceneDogRun starting");
        let text = {
            narrator: {
                T0000: "<p> “Of course I will!”, <br> And jumping with skill <br> Mable carried the seed <br> At top of speed <br> Down the hill, down, <br> Towards the next town. </p>",
                T0001: "“I’m hungry, you see. <br> But if you stay with me,” <br> Said Mable, so brave. <br> “I’ll make sure you stay safe!”",
                T0002: "<p> Together they travelled <br> As time unravelled <br> To the next city <br> Which was quite pretty <br> And so arrived dawn <br> as the morning yawned.</p>",
                T0003: "The city was loud <br> Though there was no crowd <br> For at this time of day <br> In bed most people lay.",
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.WithMabletoCity);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        await Template.ƒS.Character.animate(Template.characters.Dog, Template.characters.Dog.pose.walk, Template.dogEnter());
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S5CT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S5CT1");
        await Template.ƒS.Character.animate(Template.characters.Dog, Template.characters.Dog.pose.walk, Template.dogExit());
        Template.ƒS.Speech.clear();
        return Template.S7C_SceneDogCity();
    }
    Template.S5C_SceneDogRun = S5C_SceneDogRun;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S6A_SceneWindRain() {
        console.log("S6A_SceneWindRain starting");
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.1, 3, true);
        Template.ƒS.Sound.fade(Template.sound.wind1, 0.2, 0, true);
        Template.ƒS.Sound.fade(Template.sound.thunderStorm2, 1, 2, true);
        Template.ƒS.Sound.fade(Template.sound.rain3, 1, 2, true);
        let text = {
            narrator: {
                T0000: "<p> No sooner had it spoken <br> Than the sky had broken. <br> Through heavy clouds poured the rain, <br> " + Template.dataForSave.nameProtagonist + " cried in pain <br> As a huge drop caught it <br> And the sky was all lit. <br> The thunder growled <br> And the wind howled: </p>",
                T0001: "“I can’t carry you, I’m sorry! <br> You’re too wet and too heavy. <br> I hope you little seed <br> Find the end that you seek.”"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.WindRain);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        Template.ƒS.Character.show(Template.characters.Crow, Template.characters.Crow.pose.flight, Template.ƒS.positionPercent(0, 0));
        Template.ƒS.Character.animate(Template.characters.Rain, Template.characters.Rain.pose.neutral, Template.Rain());
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S6AT1");
        Template.ƒS.Speech.clear();
        return Template.S7A_SceneDogCityRain();
    }
    Template.S6A_SceneWindRain = S6A_SceneWindRain;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S7A_SceneDogCityRain() {
        console.log("S7A_SceneDogCityRain starting");
        let text = {
            narrator: {
                T0000: "<p> And with nerve-wracking speed, <br> pulled to the ground was the poor little seed <br> Until it arrived, lost and shaken <br> on top of a bin smelling of bacon. </p>",
                T0001: "The city was loud <br> Though there was no crowd <br> For at this time of day <br> In bed most people lay.",
                T0002: Template.dataForSave.nameProtagonist + " looked around <br> And was surprised that it found <br> On the pavement the dog Mable <br> who was chewing on a cable!",
                T0003: "<p> “Hello Mable!”, " + Template.dataForSave.nameProtagonist + " said. <br> But the timing was bad <br> Before the dog could reply <br> A bird dived out of the sky. </p>",
                T0004: "<p> As its claws snapped <br> The seed almost wept. <br> Why was the world so unkind? <br> So different from the one it left behind. </p>",
                T0005: "<p> And Mable barked and roared <br> But the bird had soared <br> Back into the air <br> Leaving behind the town square. </p>",
                T0006: "<p> The air rushed by " + Template.dataForSave.nameProtagonist + "'s cheeks <br> and the little seed shrieked. <br> It fought hard against the claws <br> as the bird cawed. </p>"
            }
        };
        //City Sound
        Template.ƒS.Sound.fade(Template.sound.city, 0.3, 2, true);
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.CityWithMable);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //await ƒS.Character.show(characters.Crow, characters.Crow.pose.flight, ƒS.positionPercent (0,70));
        //await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());
        //Text before bird
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S7AT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002, true, "S7AT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003, true, "S7AT1");
        //Bird flys in (hier wird der Vogel zum Teil durchsichtig)
        await Template.ƒS.Character.animate(Template.characters.Crow, Template.characters.Crow.pose.flight, Template.flyDown());
        // Text after bird
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004, true, "S7AT1");
        //Barking
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 1, 2, true);
        //Text while Barking
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005 + text.narrator.T0006, true, "S7AT1");
        //Fade Out Sound + City quieter
        Template.ƒS.Sound.fade(Template.sound.wind1, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.thunderStorm2, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.rain3, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.city, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 0, 2, true);
        Template.ƒS.Character.hide(Template.characters.Crow);
        Template.ƒS.Character.hide(Template.characters.Rain);
        Template.ƒS.Speech.clear();
        return Template.S8_SceneBirdRoof1();
    }
    Template.S7A_SceneDogCityRain = S7A_SceneDogCityRain;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S7C_SceneDogCity() {
        console.log("S7C_SceneDogCity starting");
        let text = {
            narrator: {
                T0000: "<p> Mable trotted to a bin <br> And she stuck her nose in <br> While " + Template.dataForSave.nameProtagonist + " climbed upon <br> The top of the bin.</p>",
                T0001: "<p> “What are you eating?”, " + Template.dataForSave.nameProtagonist + " said. <br> But the timing was rather bad <br> Before the dog could reply <br> A bird dived out of the sky. </p>",
                T0002: "<p> As its claws snapped <br> The seed almost wept. <br> Why was the world so unkind? <br> The question popped in its mind. </p>",
                T0003: "<p> And Mable barked and shushed <br> But the bird had rushed <br> Back into the air <br> Leaving behind the town square. </p> ",
                T0004: "The air rushed by " + Template.dataForSave.nameProtagonist + "'s cheeks <br> and the little seed shrieked. <br> It fought hard against the claws <br> as the bird cawed."
            }
        };
        //City Sound
        Template.ƒS.Sound.fade(Template.sound.city, 0.3, 2, true);
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.CityWithMable);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text before bird
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "S7AT1");
        //Bird flys in
        await Template.ƒS.Character.animate(Template.characters.Crow, Template.characters.Crow.pose.flight, Template.flyDown());
        // Text after bird
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001 + text.narrator.T0002, true, "S7AT1");
        //Barking
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 1, 2, true);
        //Text while Barking
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003 + text.narrator.T0004, true, "S7AT1");
        //Fade Out SoundEffects
        Template.ƒS.Sound.fade(Template.sound.city, 0, 3);
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 0, 2, true);
        Template.ƒS.Character.hide(Template.characters.Crow);
        Template.ƒS.Speech.clear();
        return Template.S8_SceneBirdRoof1();
    }
    Template.S7C_SceneDogCity = S7C_SceneDogCity;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S8_SceneBirdRoof1() {
        console.log("S8_SceneBirdRoof1 starting");
        let text = {
            narrator: {
                T0000: "<p> Finally, with a little hop <br> they landed on a roof top. <br> The bird let the seed go <br> " + Template.dataForSave.nameProtagonist + " saw it was a crow. </p>",
                T0001: "<p> It leaped around and looked <br> At the seed it had hooked. <br> " + Template.dataForSave.nameProtagonist + " froze in fear <br> As a whisper reached its ear: </p>",
                T0002: "<p> “Psst! Come here, I know a place <br> For you to be safe!” <br> And under a tile <br> Stood an ant with a smile. </p>",
                T0003: "<p> “Come here, be quick <br> Or you’ll be eaten with a flick <br> Of the crows head <br> And then you’d be dead!” </p>",
                T0004: "<p> “You won’t eat me, right?”, <br> asked the seed in fright. <br> “I promise, I will not!” <br> Said the ant on the spot. </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.ArriveRoofTop);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Musik
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.4, 2, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S8T1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S8T1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004, true, "S8T1");
        let decisionS8ElementOptions = {
            iTrust: "Trust",
            iDontTrust: "Don't trust"
        };
        let decisionS8Element = await Template.ƒS.Menu.getInput(decisionS8ElementOptions, "individualCSSClass");
        switch (decisionS8Element) {
            case decisionS8ElementOptions.iTrust:
                Template.ƒS.Speech.clear();
                return Template.S9A_SceneBirdRoof2();
            case decisionS8ElementOptions.iDontTrust:
                Template.ƒS.Speech.clear();
                return Template.S9B_BadEnding1();
        }
        ;
    }
    Template.S8_SceneBirdRoof1 = S8_SceneBirdRoof1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S9A_SceneBirdRoof2() {
        console.log("S9A_SceneBirdRoof2 starting");
        let text = {
            narrator: {
                T0000: "<p> “Thank you”, whispered the seed <br> and within a beat <br> next to the ant behind a rock <br> it hid in shock. </p>",
                T0001: "<p> The crow caught by surprise <br> Stuck its beak between the tiles to get her prize. <br>" + Template.dataForSave.nameProtagonist + " whispered: “Thank you for saving my life!” <br> “No worries, I’m Ralph.” </p>",
                T0002: "<p> “I’m " + Template.dataForSave.nameProtagonist + "”, said the seed <br> “I’m glad you freed <br> me from this crow!” <br> Then, with a stroke <br> The tile broke </p>",
                T0003: "<p> “Here here, an ant!” <br> Grinned the bird. <br> “On my land!” </p>",
                T0004: "<p> But all the seed heard <br> Was the boisterous barking <br> Of Mable the dog who was charging <br> Towards the little group <br> In a swoop. </p>",
                T0005: "<p> In the blink of an eye <br> The crow leaped to the sky <br> And kicked Ralph, " + Template.dataForSave.nameProtagonist + "'s new friend <br> Over the side of the roof to meet an early end. </p>",
                T0006: "<p> “You can save him if you jump down!” <br> Spoke Mable with a frown. <br> “But if I jump, I’ll touch the ground.” <br> “You will find a way around!” </p>",
                T0007: "<p> Annie smiled encouragingly. <br> " + Template.dataForSave.nameProtagonist + " thought of its tree. </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.AntAndSeedHide);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S9AT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002, true, "S9AT1");
        Template.ƒS.Speech.clear();
        //New Background:  
        await Template.ƒS.Location.show(Template.locations.AntGetsEaten);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003, true, "S9AT2");
        Template.ƒS.Speech.clear();
        //New Background - Mable appears
        await Template.ƒS.Location.show(Template.locations.MableJoins);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Sound
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 0.6, 2, true);
        Template.ƒS.Sound.fade(Template.sound.crow, 0.5, 2, true);
        Template.ƒS.Sound.fade(Template.sound.dogBark1, 0, 6, true);
        Template.ƒS.Sound.fade(Template.sound.crow, 0, 6, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004 + text.narrator.T0005, true, "S9AT3");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006 + text.narrator.T0007, true, "S9AT3");
        let decisionS9AElementOptions = {
            iJump: "Jump",
            iDontJump: "Don't jump"
        };
        let decisionS9AElement = await Template.ƒS.Menu.getInput(decisionS9AElementOptions, "individualCSSClass");
        switch (decisionS9AElement) {
            case decisionS9AElementOptions.iJump:
                Template.ƒS.Speech.clear();
                return Template.S10A_GoodEnding();
            case decisionS9AElementOptions.iDontJump:
                Template.ƒS.Speech.clear();
                return Template.S10B_BadEnding2();
        }
        ;
    }
    Template.S9A_SceneBirdRoof2 = S9A_SceneBirdRoof2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S9B_BadEnding1() {
        console.log("S9B_BadEnding1 starting");
        let text = {
            narrator: {
                T0000: "<p> “Thank you”, whispered the seed <br> and within a beat <br> it ran to the ant's hiding place <br> and pushed the ant into the bird’s space. </p>",
                T0001: "<p> Safe and sound " + Template.dataForSave.nameProtagonist + " stood hidden <br> while the screaming ant got bitten. <br> The crow chewed it up with a very loud crunch. <br> as the seed broke down in a hunch. </p>",
                T0002: "<p> Annie, the wind who had seen the whole affair <br> told the dog Mable in despair. </p>",
                T0003: "<p> No one ever talked to seed again <br> This had been the moment when <br> it could have shown some gratitude to all <br> who had helped it not to fall. </p>",
                T0004: "<p> " + Template.dataForSave.nameProtagonist + " had missed its chance, <br> now it sat down in trance. </p>",
                T0005: "<p> On the roof that was to become its tomb <br> " + Template.dataForSave.nameProtagonist + " would never bloom. </p>"
            }
        };
        //Background with transition and characters appear:
        await Template.ƒS.Location.show(Template.locations.AntGetsEaten);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000, true, "S9BT1");
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001 + text.narrator.T0002, true, "S9BT1");
        Template.ƒS.Speech.clear();
        //New Background Seed Alone in Rain
        await Template.ƒS.Location.show(Template.locations.SeedAlone);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //Animation Rain and Sound
        await Template.ƒS.Character.animate(Template.characters.Rain, Template.characters.Rain.pose.neutral, Template.Rain());
        Template.ƒS.Sound.fade(Template.sound.wakeUp, 0.15, 2, true);
        Template.ƒS.Sound.fade(Template.sound.rain3, 1, 2, true);
        //Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003 + text.narrator.T0004, true, "S9BT2");
        //Rain Animation and Sound Stop
        Template.ƒS.Sound.fade(Template.sound.rain3, 0, 4, true);
        Template.ƒS.Character.hide(Template.characters.Rain);
        Template.ƒS.Speech.clear();
        //New Background Bad Ending
        await Template.ƒS.Location.show(Template.locations.BadEnding);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        // Text
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005, true, "S9BT3");
        Template.ƒS.Speech.clear();
        //Return Start or Credits? + Novel Page: Do you want to start over?
    }
    Template.S9B_BadEnding1 = S9B_BadEnding1;
})(Template || (Template = {}));
//# sourceMappingURL=TheLittleSeedWhoWasScaredOfGrowingUp.js.map