//namespace Template {
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