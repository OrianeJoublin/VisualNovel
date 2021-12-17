namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {
    clock: {
      duration: 1,
      alpha: "./Transitions/jigsaw01.png",
      edge: 1 // harte Transition
    },
  };

  export let sound = {
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

  //Items, die man erhält und zum Inventar zugefügt werden
  export let items = {
  pen: {
      name: "Red Pen", 
      description: "A red pen",
      image: "./Images/Items/redPen"
    }
  };

  // Hintergründe

  export let locations = {
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
  }


  // Charaktere

  export let characters = {
    narrator: {
      name: "" // Komma?
    },
    alice: {
      name: "Alice",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Uebung/Charaktere/Alice_in_wonderland.png",
      }
    },
    snowWhite: {
      name: "Snow White",
      origin: ƒS.ORIGIN.CENTERLEFT,
      pose: {
        neutral: "./Uebung/Charaktere/snowwhite_small.png",
      }
    },
    whiteRabbit: {
      name: "White Rabbit",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Uebung/Charaktere/Rabbit_small.png",
      }
    },
    sun: {
      name: "sun",
      origin: ƒS.ORIGIN.TOPCENTER,
      pose: {
        neutral: "./Uebung/Charaktere/sun_small.png",
      }
    },
    teaCup: {
      name: "Tea Cup",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        neutral: "./Uebung/Charaktere/flying_cup.png",
      }
    },

    ManySeeds: {
      name: "Many Seeds",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        neutral: "./Characters/Seeds.png",
      }
    },
    Rain: {
      name: "Rain",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        neutral: "./Characters/Rain2.png",
      }
    }
  };

  //Animationen, die für alle Szenen gelten

  export function jirkaAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.5) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    }
  };

  export function fromLefttoRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positions.bottomright },
      duration: 1, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  };

  export function fromToptoCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.topcenter },
      end: { translation: ƒS.positions.center },
      duration: 1, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  };

  export function fromToplefttoTopcenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.topleft },
      end: { translation: ƒS.positions.topcenter },
      duration: 1, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }
  };

  export function SwayDown(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(40, 45) },
      end: { translation: ƒS.positionPercent(50, 50) },
      duration: 30, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    }
  };

  export function Sway(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(40, 45) },
      end: { translation: ƒS.positionPercent(50, 45) },
      duration: 30, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    }
  };

  export function Rain(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.topcenter },
      end: { translation: ƒS.positions.center },
      duration: 0.5, // as long as you want
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    }
  };

  export let dataForSave = {
    nameProtagonist: "",
    points: 0 //hier kann man neues Attribut anlegen, z.B. points
  };


  //Menü
  let menu: boolean = true; //true heißt Menü ist offen, false wäre geschlossen

  let inGameMenu = {
    save: "Save", //hier kommen Buttons rein, die angezeigt werden sollen plus string um CSS zu gestalten mit jeweiliger ID
    load: "Load",
    close: "Close",
    // open: "Open" //anschließend kann hier auch Credits rein
  };

  let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option); //auf Console ausgeben, ob gespeichetr oder geladen, hilfestellung zum debuggen
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      //case inGameMenu.close:
       // gameMenu.open();
       // menu = true;
       // break;
    }
  }


// Shortcuts für's Menü bzw. Shortcuts generell hier rein
document.addEventListener("keydown", hndKeyPress);
async function hndKeyPress(_event: KeyboardEvent): Promise <void> {
  switch (_event.code) {
    case ƒ.KEYBOARD_CODE.F8: //hier englische tastatur also z und y berpcksichtigen
      console.log("Save");
      await ƒS.Progress.save();
      break;
    case ƒ.KEYBOARD_CODE.F9:
      console.log("Load");
      await ƒS.Progress.load();
      break;
    case ƒ.KEYBOARD_CODE.M: //Buchstabe für Close Menü
      if (menu) {
        console.log("Close");
        gameMenu.close();
        menu = false;
      }
      else{
        console.log("Open");
        gameMenu.open();
        menu = true;
      }
      break;
  }
}
    


  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben


    let scenes: ƒS.Scenes = [
      //Linear
      { scene: Scene, name: "Scene" },
      { id: "Einführung", scene: Scene, name: "Scene", next: "Ende"},  //man kann direkt die nächste szene hier definieren statt return in der Szene
      //{ scene: Scene2, name: "Scene Two"},
      //{ id: "Ende", scene: encodeURI, name: "The End"},
      { id: "Einführung2", scene: Scene, name: "Scene" } //selbe Szene kann mehrere IDs haben



    ];


    // Interface elemente abspeichern
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  };


}