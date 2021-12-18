"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        nameProtagonist: "",
        points: 0 //hier kann man neues Attribut anlegen, z.B. points
    };
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.inGameMenu, Template.buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben
        let scenes = [
            //Linear
            { scene: Template.S1_IntroPart1, name: "S1_IntroPart1" },
            { scene: Template.S2_IntroPart2, name: "S2_IntroPart2" },
            //{ id: "Einführung", scene: Scene, name: "Scene", next: "Ende"},  //man kann direkt die nächste szene hier definieren statt return in der Szene
            //{ scene: Scene2, name: "Scene Two"},
            //{ id: "Ende", scene: encodeURI, name: "The End"},
            //{ id: "Einführung2", scene: Scene, name: "Scene" } //selbe Szene kann mehrere IDs haben
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
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.Sway = Sway;
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
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Charaktere
    Template.characters = {
        narrator: {
            name: "Narrator" // Komma?
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
})(Template || (Template = {}));
var Template;
(function (Template) {
    //Menü
    Template.menu = true; //true heißt Menü ist offen, false wäre geschlossen
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        // open: "Open" //anschließend kann hier auch Credits rein
    };
    async function buttonFunctionalities(_option) {
        console.log(_option); //auf Console ausgeben, ob gespeichetr oder geladen, hilfestellung zum debuggen
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menu = false;
                break;
            //case inGameMenu.close:
            // gameMenu.open();
            // menu = true;
            // break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts für's Menü bzw. Shortcuts generell hier rein
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8: //hier englische tastatur also z und y berpcksichtigen
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M: //Buchstabe für Close Menü
                if (Template.menu) {
                    console.log("Close");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
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
        test: {
            duration: 1,
            alpha: "./Transitions/black.png",
            edge: 5 // harte Transition
        },
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
    async function S1_IntroPart1() {
        console.log("S1_IntroPart1 starting");
        let text = {
            narrator: {
                T0000: "<p> Somewhere far away <br> On a little hill in May <br> Stood a miracle tree <br> Spreading its branches gleefully </p>",
                T0001: "<p> During this happy spring event. <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
                T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> they would give birth."
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.sound.adventure, 0.2, 2, true);
        //Text während Animation
        let animationDone = Template.ƒS.Character.animate(Template.characters.ManySeeds, Template.characters.ManySeeds.pose.neutral, Template.SwayDown());
        // Background and characters appear:
        await Template.ƒS.Location.show(Template.locations.TreeWithoutSeeds);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
        animationDone;
        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();
        //await ƒS.Speech.tell(chara)
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
        // Text pace
        Template.ƒS.Speech.setTickerDelays(20, 2); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile
        animationDone;
        return Template.S2_IntroPart2();
    }
    Template.S1_IntroPart1 = S1_IntroPart1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S2_IntroPart2() {
        console.log("S2_IntroPart2 starting");
        let text = {
            narrator: {
                T0000: "<p> But one little seed hung on tightly <br> It was swearing impolitely <br> So scared of falling <br> For help it was calling. </p>",
                T0001: "<p> “Don’t go, my friends. <br> Don’t leave me alone!” <br> But no one came back. <br> The seed cried on its own. </p>",
                T0002: "Then spoke the wind <br> as she sheepishly grinned: <br> “Don’t be so scared little one, <br> The journey might be fun!” </p>"
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.sound.adventure, 0.2, 2, true);
        // Background and characters appear:
        await Template.ƒS.Location.show(Template.locations.SeedGrippingBranch);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge);
        //await ƒS.Speech.tell(chara)
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
        // Text pace
        Template.ƒS.Speech.setTickerDelays(20, 2); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile
        //return S2_IntroPart2();
    }
    Template.S2_IntroPart2 = S2_IntroPart2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function S3_SceneWind1() {
        console.log("S3_SceneWind1 starting");
        let text = {
            narrator: {
                T0000: "<p> New Scene </p>",
                T0001: "<p> During this happy spring event. <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
                T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> they would give birth."
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.sound.adventure, 0.2, 2, true);
        //Text während Animation
        //let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, Sway());
        // Background and characters appear:
        await Template.ƒS.Location.show(Template.locations.SeedGrippingBranch);
        await Template.ƒS.update(Template.transitions.new.duration, Template.transitions.new.alpha, Template.transitions.new.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
        //animationDone;
        //Input Feld
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();
        //await ƒS.Speech.tell(chara)
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
        // Text pace
        Template.ƒS.Speech.setTickerDelays(20, 2); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile
        //return S2_IntroPart2();
    }
    Template.S3_SceneWind1 = S3_SceneWind1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map