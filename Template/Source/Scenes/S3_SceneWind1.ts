namespace Template {

    export async function S3_SceneWind1(): ƒS.SceneReturn {
        console.log("S3_SceneWind1 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> And there came a gust <br> The seed had no chance <br> Against the force of its thrust. <br> Like in a dance <br> It soared up in the air <br> Hating the affair. </p>",
                T0001: "<p> Its screams and its crying <br> Where muffled by the whistling <br> Sound of the storm. <br> The seed felt forlorn. </p>",
                T0002: "<p> “Don’t be scared”, said the wind, <br> And still she grinned. <br> “I’m Anni, what’s your name?”, she asked. <br> The seed fulfilled the task. </p>",
                T0003: "Then, name X frowned a little <br> And opened its mouth:",
                TD101: "<p> “Please, help me, I don’t want, <br> To end on the ground!” </p>",
                TD102: "<p> “If that is you wish, <br> I won’t drop you, I promise. <br> I’ll get you to town <br> Where you can look around.” </p>",
                TD201: "<p> “You killed all my friends, you stupid wind!” </p>",
                TD202: "Thunder growled as Anni got angry: <br> “Is that so? <br> Well here you go! <br> See what I did to them, <br> And then thank me later!”",
                TD203: " by its stem <br> And with no restraint, <br> Anni thrust the seed down <br> Down down down <br> Towards the ground."
            }
        };

        //Sound
        ƒS.Sound.fade(sound.wind1, 0.2, 2, true)

        // Background and characters appear:
        await ƒS.Location.show(locations.WindGust);
        await ƒS.update(transitions.black.duration, transitions.black.alpha, transitions.black.edge);

        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();

        //Narrator Speech
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S3T1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + "“I'm ", true, "S3T2");

        //Input Feld (Müsste aber eigentlich innerhalb des Texts erscheinen)
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        console.log(dataForSave.nameProtagonist);

        ƒS.Speech.tell(characters.narrator, "”</p>" + "Then, " + dataForSave.nameProtagonist + " frowned a little <br> And opened its mouth:", true, "S3T2");

    //     let decisionS3ElementOptions = {
    //         iSayHelp: "Ask for help",
    //         iInsult: "Insult"
    //     };

    //     let decisionS3Element = await ƒS.Menu.getInput(decisionS3ElementOptions, "individualCSSClass");

    //     switch (decisionS3Element) {
    //         case decisionS3ElementOptions.iSayHelp:
    //             await ƒS.Speech.tell(characters.narrator, text.narrator.TD101 + text.narrator.TD102, true, "S3T1");
    //             return S4A_SceneWindCity();
    //         case decisionS3ElementOptions.iInsult:
    //            await ƒS.Speech.tell(characters.narrator, text.narrator.TD201 + text.narrator.TD202, true, "S3T1");
    //            await ƒS.Speech.tell(characters.narrator, "A new gust of wind grabbed " + dataForSave.nameProtagonist + text.narrator.TD203, true, "S3T1");
    //            ƒS.Sound.fade(sound.wind1, 0, 2)
    //            return S4B_SceneDogSit();
    //    };
    }
}