namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");


  export let dataForSave = {
    nameProtagonist: "",
    points: 0, //hier kann man neues Attribut anlegen, z.B. points
    scoreSeed: 0, //für Meterbar eines bestimmten Charakters
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu"); //hier CSS Klasse angeben

    let scenes: ƒS.Scenes = [
      //Linear
      // { scene: S3_SceneWind1, name: "S3_SceneWind1" },
      // { scene: S7A_SceneDogCityRain, name: "S7A_SceneDogCityRain" },
      //{ scene: NovelPages, name: "NovelPages" },
      //{ scene: StartAgainScreen, name: "StartAgainScreen" },
      { scene: S1_IntroPart1, name: "S1_IntroPart1" },
      { scene: S2_IntroPart2, name: "S2_IntroPart2" },
      { scene: S3_SceneWind1, name: "S3_SceneWind1" }, 
      //{ scene: S5C_SceneDogRun, name: "S5C_SceneDogRun" },
      //{ scene: S6A_SceneWindRain, name: "S6A_SceneWindRain" },
      //{ scene: S7A_SceneDogCityRain, name: "S7A_SceneDogCityRain" },
      { scene: S10A_GoodEnding, name: "S10A_GoodEnding" }
      
      

      //{ id: "Einführung", scene: Scene, name: "Scene", next: "Ende"},  //man kann direkt die nächste szene hier definieren statt return in der Szene
      //{ scene: Scene2, name: "Scene Two"},
      //{ id: "Ende", scene: encodeURI, name: "The End"},
      //{ id: "Einführung2", scene: Scene, name: "Scene" } //selbe Szene kann mehrere IDs haben
    ];

    // Interface elemente abspeichern
    let uiElement: HTMLElement = document.querySelector("[type=interface]"); //Meterbar CSS
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  };


}