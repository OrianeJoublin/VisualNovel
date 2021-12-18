namespace Template {

    export async function S2_IntroPart2(): ƒS.SceneReturn {
        console.log("S2_IntroPart2 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> But one little seed hung on tightly <br> It was swearing impolitely <br> So scared of falling <br> For help it was calling. </p>",
                T0001: "<p> “Don’t go, my friends. <br> Don’t leave me alone!” <br> But no one came back. <br> The seed cried on its own. </p>",
                T0002: "Then spoke the wind <br> as she sheepishly grinned: <br> “Don’t be so scared little one, <br> The journey might be fun!” </p>"
            }
        };

        //Musik
        ƒS.Sound.fade(sound.adventure, 0.2, 2, true)

        // Background and characters appear:
        await ƒS.Location.show(locations.SeedGrippingBranch);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge); 

        //await ƒS.Speech.tell(chara)
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");

        // Text pace
        ƒS.Speech.setTickerDelays(20, 2) //die 2 ist delay zwei sekunden warten, bevor bei paragraf weitergeht. <p> </p> paragraph innerhalb der anführungszeichen von text oder <br> für neue Zeile


        //return S2_IntroPart2();
    }
}