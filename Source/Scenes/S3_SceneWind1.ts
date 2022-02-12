namespace Template {

    export async function S3_SceneWind1(): ƒS.SceneReturn {
        console.log("S3_SceneWind1 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> And there came a gust. <br> The seed had no chance <br> Against the force of its thrust. <br> Like in a dance <br> It soared up in the air <br> Hating the affair. </p>",
                T0001: "<p> The screams and the crying <br> Of the seed feeling forlorn. <br> Where muffled by the whistling <br> Sound of the storm.</p>",
                T0002: "<p> “Don’t be scared”, repeated the wind, <br> And still she grinned. <br> “I’m Anni, what’s your name?”, she asked.</p>",
                T0003: "<p> “I’m ",
                T0004: "”, the seed replied with of nod of its head. <br> It frowned a little and then said: </p>",
                TD101: "<p> “Please, help me, I really don't want <br> To end on the ground!” </p>",
                TD102: "<p> “If that is your wish, <br> I won’t drop you, I promise. <br> I’ll get you to town <br> Where you can look around.” </p>",
                TD201: "<p> “You killed all my friends, you stupid wind!” </p>",
                TD202: "Thunder growled as Anni got angry: <br> “Is that so? <br> Well here you go! <br> See what I did to them, <br> And then thank me later!”",
                TD203: " by its stem <br> And with no restraint, <br> Anni thrust the seed down <br> Down down down <br> Towards the ground."
            }
        };

        //Sound
        ƒS.Sound.fade(sound.wind1, 0.07, 2, true);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);

        // Background and characters appear:
        await ƒS.Location.show(locations.WindGust);
        ƒS.update(1);
        //await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

        //Inventar
        //ƒS.Inventory.add(items.pen);
        //await ƒS.Inventory.open();

        //Narrator Speech
        await ƒS.Sound.play(sound.s3_1, 1.6, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S3T1");
        ƒS.Sound.fade(sound.s3_1, 0, 0);
        await ƒS.Sound.play(sound.s3_2, 1.9, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + "Choose a name: ", false, "S3T2");

        //Input Feld (Müsste aber eigentlich innerhalb des Texts erscheinen)
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        console.log(dataForSave.nameProtagonist);
        //let promiseName: Promise<string> = ƒS.Speech.getInput();

        ƒS.Sound.fade(sound.s3_2, 0, 0);
        await ƒS.Sound.play(sound.s3_3, 1.6, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003 + dataForSave.nameProtagonist + text.narrator.T0004, true, "S3T2");

        //dataForSave.nameProtagonist = await promiseName;
        //console.log(dataForSave.nameProtagonist);

        let decisionS3ElementOptions = {
            iSayHelp: "Ask for help",
            iInsult: "Insult"
        };

        ƒS.Sound.fade(sound.s3_3, 0, 0);
        await ƒS.Sound.play(sound.s3_3_Choices, 1.6, false);

        let decisionS3Element = await ƒS.Menu.getInput(decisionS3ElementOptions, "decisionClass");

        switch (decisionS3Element) {
            case decisionS3ElementOptions.iSayHelp:
                ƒS.Sound.fade(sound.s3_3_Choices, 0, 0);
                await ƒS.Sound.play(sound.s3_4_iSayHelp, 1.6, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101 + text.narrator.TD102, true, "S3T2");
                ƒS.Sound.fade(sound.s3_4_iSayHelp, 0, 0);
                ƒS.Speech.clear();
                return S4A_SceneWindCity();
            case decisionS3ElementOptions.iInsult:
                ƒS.Sound.fade(sound.s3_3_Choices, 0, 0);
                await ƒS.Sound.play(sound.s3_4_iInsult, 1.6, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD201 + text.narrator.TD202, true, "S3T2");
                ƒS.Sound.fade(sound.s3_4_iInsult, 0, 0);
                await ƒS.Sound.play(sound.s3_4_iInsult2, 1.6, false);
                await ƒS.Speech.tell(characters.narrator, "A new gust of wind grabbed " + dataForSave.nameProtagonist + text.narrator.TD203, true, "S3T2");
                ƒS.Sound.fade(sound.wind1, 0, 2);
                ƒS.Sound.fade(sound.s3_4_iInsult2, 0, 0);
                ƒS.Speech.clear();
                return S4B_SceneDogSit();
        };
    }
}