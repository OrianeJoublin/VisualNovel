namespace Template {
  export async function S1_IntroPart1(): ƒS.SceneReturn {
    console.log("S1_IntroPart1 starting");

    let text = { // Charaktere Texte
      narrator: {
        T0000: "<p> Somewhere very far away <br> On a little hill in May <br> Stood a miracle tree <br> Spreading its branches gleefully. </p>",
        T0001: "<p> During this happy spring event. <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
        T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> they would give birth."
      }
    };

    //Musik
    ƒS.Sound.fade(sound.wakeUp, 0.4, 0.5, true);

    //Animation auch während Text möglich
    let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, SwayDown());

    // Background, transitions and characters appear:
    await ƒS.Location.show(locations.TreeWithoutSeeds);
    //ƒS.update(transitions.Page.duration, transitions.Page.alpha, transitions.Page.edge);
    animationDone;
    
    //Novel Page

    ƒS.Text.setClass("startScreen"); 
    ƒS.Text.print("<p> Willkommen zu dieser Visual Novel! </p> <p> Um in den Szenen weiter zu kommen, <br> einfach auf den Bildschirm klicken. <br> Für ein besseres Erlebnis bitte wie <br> folgt in den Vollbildmodus wechseln: </p> <p> Windows: F11 <br> Mac: Ctrl - Cmd – F </p> <p> Dieselbe Tastenkombination dient <br> auch dazu, aus dem Vollbildmodus <br> auszusteigen. </p> <p> Viel Spaß! </p>");
   
    // Text pace
    ƒS.Speech.setTickerDelays(80, 500); //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht.

    //Text
    await ƒS.Speech.tell(null, null, true); //nur damit text erst nach erstem klick kommt wegen Novel Page 
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");

    // Animation endet
    ƒS.Character.hide (characters.ManySeeds);
    ƒS.Speech.clear();
  }
}