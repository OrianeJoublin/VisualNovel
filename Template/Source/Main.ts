namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");


  export let dataForSave = {
    nameProtagonist: "",
    points: 0 //hier kann man neues Attribut anlegen, z.B. points
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben


    let scenes: ƒS.Scenes = [
      //Linear
      { scene: S1_IntroPart1, name: "S1_IntroPart1" },
      { scene: S2_IntroPart2, name: "S2_IntroPart2" },
      //{ id: "Einführung", scene: Scene, name: "Scene", next: "Ende"},  //man kann direkt die nächste szene hier definieren statt return in der Szene
      //{ scene: Scene2, name: "Scene Two"},
      //{ id: "Ende", scene: encodeURI, name: "The End"},
      //{ id: "Einführung2", scene: Scene, name: "Scene" } //selbe Szene kann mehrere IDs haben
    ];

    // Interface elemente abspeichern
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  };


}