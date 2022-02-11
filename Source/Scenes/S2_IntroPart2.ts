namespace Template {

    export async function S2_IntroPart2(): ƒS.SceneReturn {
        console.log("S2_IntroPart2 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> But one little seed hung on tightly <br> swearing quite impolitely <br> It was scared of falling to the ground <br> But no help could be found. </p>",
                T0001: "<p> “Don’t go, my friends. <br> Don’t leave me alone!” <br> The seed cried on its own. </p>",
                T0002: "Then spoke the wind <br> as she sheepishly grinned: <br> “Don’t be so scared little one, <br> The journey might be fun!” </p>"
            }
        };

        //sound
        ƒS.Sound.play(sound.pageFlip, 0.4, false);

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.SeedGrippingBranch);
        ƒS.update(1);
        //await ƒS.update(transitions.black.duration, transitions.black.alpha, transitions.black.edge); 

        //Text
        await ƒS.Sound.play(sound.s2, 1.6, false); 
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");
       
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.s2, 0, 0);
        return S3_SceneWind1();
    }
}