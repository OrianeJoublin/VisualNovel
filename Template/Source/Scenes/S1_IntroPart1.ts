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
    ƒS.Sound.fade(sound.wakeUp, 0.4, 0, true);

    //Animation auch während Text möglich
    let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, SwayDown());

    // Background, transitions and characters appear:
    await ƒS.Location.show(locations.TreeWithoutSeeds);
    await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
    animationDone;

    //Inventar
    //ƒS.Inventory.add(items.pen);
    //await ƒS.Inventory.open();

    //Novel Page

    ƒS.Text.setClass("NovelPageKlassennameZumGestalten"); //addClass klasse hinzufügen vs. Set Class wo gestalterisches von alten Klass auch übernommen wird
    ƒS.Text.print("Willkommen zu dieser Visual Novel xyz");

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