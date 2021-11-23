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
    }
  };

  export let sound = {
    // music 
    backgroundTheme: "./Music/Wake-Up.mp3" // Komma, falls noch eine Datei

  // sound
  click: "" // Hier Sound rein
  };


  // Hintergrund

  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./" // Hier Pfad rein
    }
  };

  // Charakter

  export let characters = {
    narrator: {
      name: "" // Kommt hier ein Komma hin?
    },
    seed: {
      name: "Seed",
      origin: ƒS.ORIGIN.BOTTOMCENTER // wo Charakter herkommt
    pose: {
        angry: "",
        happy: "",
        upset: "", // Pfad angeben
      }
    }
  };


  export let dataForSave = {
    
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];


    // Interface elemente abspeichern
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}