namespace Template {

    export async function S2_IntroPart2(): ƒS.SceneReturn {
        console.log("S2_IntroPart2 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> New Scene </p>",
                T0001: "<p> During this happy spring event. <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
                T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> they would give birth."
            }
        };

        //Musik
        ƒS.Sound.fade(sound.adventure, 0.2, 2, true)

        //Text während Animation
        //let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, Sway());

        // Background and characters appear:
        await ƒS.Location.show(locations.SeedGrippingBranch);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)
        //animationDone;

        //Input Feld
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);


        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();

        //await ƒS.Speech.tell(chara)
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");

        // Text pace
        ƒS.Speech.setTickerDelays(20, 2) //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile


        //return S2_IntroPart2();
    }
}