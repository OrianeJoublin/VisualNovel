"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "./Transitions/jigsaw01.png",
            edge: 1 // harte Transition
        },
    };
    Template.sound = {
        // music 
        wakeUp: "./Music/WakeUp.mp3",
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
        wind2: "./SoundEffects/windy-forest-ambience-01.mp3"
    };
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
            background: "./Backgrounds/6BCityWithMable.png"
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
    };
    // Charaktere
    Template.characters = {
        narrator: {
            name: "" // Komma?
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
                neutral: "./Characters/Rain.png",
            }
        }
    };
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
    function SwayDown() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 45) },
            end: { translation: Template.ƒS.positionPercent(50, 50) },
            duration: 30,
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
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.Sway = Sway;
    ;
    function Rain() {
        return {
            start: { translation: Template.ƒS.positions.topcenter },
            end: { translation: Template.ƒS.positions.bottomcenter },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.Rain = Rain;
    ;
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // Interface elemente abspeichern
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
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
        //await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());
        //Input Feld
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.nameProtagonist);
        //await ƒS.Speech.tell(chara)
        await Template.ƒS.Speech.tell(Template.characters.whiteRabbit, text.whiteRabbit.T0000 + " " + Template.dataForSave.nameProtagonist + " restlicher Text."); // wartet auf Nutzereingabe, für Text
        await Template.ƒS.Speech.tell(Template.characters.snowWhite, text.snowWhite.T0000);
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.dataForSave.nameProtagonist, "Quatsch", true, "protagonist"); //letztes = css Klasse
        //await ƒS.Speech.tell(characters.snowWhite, "Hi2."); // für Auswahlmöglichkeiten
        //await ƒS.Character.hide(characters.seed);
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
            case firstDialogueElementOptions.iSayNo:
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
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map