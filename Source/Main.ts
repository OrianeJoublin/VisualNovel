namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");


  export let dataForSave = {
    nameProtagonist: "",
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {

    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben

    let scenes: ƒS.Scenes = [ //Linear
      { scene: S1_IntroPart1, name: "S1_IntroPart1" },
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  };
}