namespace Template {

    export async function S3_SceneWind1(): ƒS.SceneReturn {
        console.log("S3_SceneWind1 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> And there came a gust <br> The seed had no chance <br> Against the force of its thrust. <br> Like in a dance <br> It soared up in the air <br> Hating the affair. </p>",
                T0001: "<p> Its screams and its crying <br> Where muffled by the whistling <br> Sound of the storm. <br> The seed felt forlorn. </p>",
                T0002: "“Don’t be scared”, said the wind, <br> And still she grinned. <br> “I’m Anni, what’s your name?”, she asked. <br> The seed fulfilled the task."
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