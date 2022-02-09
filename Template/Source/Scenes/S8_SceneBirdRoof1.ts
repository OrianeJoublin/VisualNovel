namespace Template {

    export async function S8_SceneBirdRoof1(): ƒS.SceneReturn {
        console.log("S8_SceneBirdRoof1 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Finally, with a little hop <br> they landed on a roof top. <br> The bird let the seed go <br> " + dataForSave.nameProtagonist + " saw it was a crow. </p>",
                T0001: "<p> It leaped around and looked <br> At the seed it had hooked. <br> " + dataForSave.nameProtagonist + " froze in fear <br> As a whisper reached its ear: </p>",
                T0002: "<p> “Psst! Come here, I know a place <br> For you to be safe!” <br> And under a tile <br> Stood an ant with a smile. </p>",
                T0003: "<p> “Come here, be quick <br> Or you’ll be eaten with a flick <br> Of the crows head <br> And then you’d be dead!” </p>",
                T0004: "<p> “You won’t eat me, right?”, <br> asked the seed in fright. <br> “I promise, I will not!” <br> Said the ant on the spot. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.ArriveRoofTop);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge); 
        
        //Musik
        ƒS.Sound.fade(sound.wakeUp, 0.4, 2, true);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S8T1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S8T1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004, true, "S8T1");

        let decisionS8ElementOptions = {
            iTrust: "Trust",
            iDontTrust: "Don't trust"
        };

        let decisionS8Element = await ƒS.Menu.getInput(decisionS8ElementOptions, "decisionClass");

        switch (decisionS8Element) {
            case decisionS8ElementOptions.iTrust:
                ƒS.Speech.clear();
                return S9A_SceneBirdRoof2();
            case decisionS8ElementOptions.iDontTrust:
                ƒS.Speech.clear();
                return S9B_BadEnding1();
        };
    }
}