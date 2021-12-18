namespace Template {
  export async function IntroPart1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = { // Charaktere Texte
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
    ƒS.Sound.fade(sound.adventure, 0.2, 2, true) // true = gelooped

    //Delay
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);

    //Text während Animation
    let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, Sway());
    
    // Background and characters appear:
    await ƒS.Location.show(locations.TreeWithoutSeeds);
    //await ƒS.Location.show(locations.Teatime);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
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
    await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());
    //Input Feld
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    console.log(dataForSave.nameProtagonist);


    //Inventar
    //ƒS.Inventory.add(items.pen);
    //await ƒS.Inventory.open();

    //await ƒS.Speech.tell(chara)
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "introduction");
    await ƒS.Speech.tell(characters.whiteRabbit, text.whiteRabbit.T0000 + " " + dataForSave.nameProtagonist + " restlicher Text."); // wartet auf Nutzereingabe, für Text
    await ƒS.Speech.tell(characters.snowWhite, text.snowWhite.T0000);
    await signalDelay();
    await ƒS.Speech.tell(dataForSave.nameProtagonist, "Quatsch", true, "protagonist") //letztes = css Klasse

    //await ƒS.Speech.tell(characters.snowWhite, "Hi2."); // für Auswahlmöglichkeiten
    //await ƒS.Character.hide(characters.seed);


    // Text pace
    ƒS.Speech.setTickerDelays(20,2) //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile

    let firstDialogueElementOptions = { // bitte sinnvoll benennen
      // iSayOk: "Okay.", // immer mit i anfangen weil perspektive des Spielers
      iSayYes: "Yes, please!",
      iSayNo: "No thanks."
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); // Gestaltungsklassen mit CSS vergeben

    switch (firstDialogueElement) { //switch case springt zum jeweiligen case und breaked es/ springt raus
     // case firstDialogueElementOptions.iSayOk:
        //await ƒS.Speech.tell(characters.seed, "Hi2.");
        //break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Character.animate (characters.teaCup, characters.teaCup.pose.neutral, fromToptoCenter ());
        //await ƒS.Character.show(characters.teaCup, characters.teaCup.pose.neutral, ƒS.positions.center); //angenommen anderere charkter wäre deklariert dann was anderes als seed
        await ƒS.Speech.tell(characters.snowWhite, text.snowWhite.T0001);
        await ƒS.Speech.tell (characters.whiteRabbit, text.whiteRabbit.T0001);
        await ƒS.Speech.tell (characters.alice, text.alice.T0002);
        await ƒS.Speech.tell (characters.snowWhite, text.snowWhite.T0002);
        break; //man kann aber auch in einer case eine case haben
        //man könnte auch hier return "szene"; machen
      case  firstDialogueElementOptions.iSayNo:
        //dataForSave.points += 10; //wenn Spieler so und so viele Punkte gesammelt hat, kommt x Szene
        await ƒS.Speech.tell (characters.whiteRabbit, text.whiteRabbit.T0001);
        await ƒS.Speech.tell (characters.alice, text.alice.T0002);
        await ƒS.Speech.tell (characters.snowWhite, text.snowWhite.T0002);
        break;
    };

    let secondDialogueElementOptions = { 
      iSayWait: "I'll wait",
      iSayNotWait: "I'm not waiting for the tea to be cold, no way!"
    };

    let secondDialogueElement = await ƒS.Menu.getInput (secondDialogueElementOptions, "individualCSSClass");

    switch (secondDialogueElement) { 
       case secondDialogueElementOptions.iSayWait:
         await ƒS.Character.animate (characters.sun, characters.sun.pose.neutral, fromToplefttoTopcenter ());
         //await ƒS.Character.show(characters.sun, characters.sun.pose.neutral, ƒS.positions.center); 
         await ƒS.Speech.tell(characters.alice, text.alice.T0005);
         await ƒS.Speech.tell (characters.snowWhite, text.snowWhite.T0003);
         await ƒS.Speech.tell (characters.whiteRabbit, text.whiteRabbit.T0002);
         break; 
       case  secondDialogueElementOptions.iSayNotWait:
         await ƒS.Speech.tell (characters.whiteRabbit, text.whiteRabbit.T0002);
         break;
     };

     //Musik Ausblenden
     ƒS.Sound.fade(sound.adventure, 0, 2)

     //if (dataForSave.points === 100) { //hier drei = weil noch number und string vertreten
      // return End(); //--> zB. wenn so viele Punkte erreicht, dann die szene, das wäre aber kein Punkteverteilungssystem (nur wenn Zieler gezielt im Konzept Punkte sammelt)
    // }

     //return "Ende"; (um auf ende zu gehen)
     //oder
     // return End(); 

  }
}