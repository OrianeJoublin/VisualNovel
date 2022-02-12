namespace Template {

    export async function S4B_SceneDogSit(): ƒS.SceneReturn {
        console.log("S4B_SceneDogSit starting");

        let text = {
            narrator: {
                T0000: "<p> With a sudden twirl <br>" + dataForSave.nameProtagonist + " crashed upon the muzzle of a girl <br> It was Mabel the dog <br> Who was sitting in the fog. </p>",
                T0001: "<p> The dog’s body trembled <br> Just as " + dataForSave.nameProtagonist + " had settled <br> With a loud “Jeeez” <br> Mable sneezed. <p> But the seed was lucky <br> It held on very tightly <br> Then, swiftly, step by step, <br> It climbed into the soft fur on Mable's back </p>",
                T0002: "<p> “I almost died there”, <br> Said " + dataForSave.nameProtagonist + " with prodruding hair. <br> “I’m sorry”, the dog said, “you tickled my nose!” <br> “You’re Mable, right? The dog in the shadows?”</p>",
                T0003: "Mable nodded and, taking the lead, <br> Asked “what is your name, little seed?” <br> " + dataForSave.nameProtagonist + " replied and told its tale of woe: <br> “I lost my home, everything I've ever known!”",
                T0004: "The dog looked around at " + dataForSave.nameProtagonist + ", her new friend <br> And assured it: “This won't be the end! <br> Say, will you let me help you, <br> Get to where you want to?”",
                TD101: "<p> “No thanks, I don’t need another friend <br> Who will leave me in the end.” </p>",
                TD102: dataForSave.nameProtagonist + " said goodbye <br> And jumped into the sky <br> Leaving Mable behind <br> Even though she’d been kind."
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.MeetMable);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s4B_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S4BT1");
        ƒS.Sound.fade(sound.s4B_1, 0, 0);
        await ƒS.Sound.play(sound.s4B_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S4BT1");
        ƒS.Sound.fade(sound.s4B_2, 0, 0);
        await ƒS.Sound.play(sound.s4B_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004 + "<p>" + dataForSave.nameProtagonist + " said: </p>", true, "S4BT1");

        let decisionS4BElementOptions = {
            iSayYes: "Yes, please!",
            iSayNo: "No thanks!"
        };

        ƒS.Sound.fade(sound.s4B_3, 0, 0);
        await ƒS.Sound.play(sound.s4B_3_Choices, 1.7, false);

        let decisionS4BElement = await ƒS.Menu.getInput(decisionS4BElementOptions, "decisionClass");

        switch (decisionS4BElement) {
            case decisionS4BElementOptions.iSayNo:
                ƒS.Sound.fade(sound.s4B_3_Choices, 0, 0);
                await ƒS.Sound.play(sound.s4B_4_iSayNo, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101 + text.narrator.TD102, true, "S4BT1");
                ƒS.Sound.fade(sound.s4B_4_iSayNo, 0, 0);
                ƒS.Speech.clear();
                return S5B_SceneWindCity();
            case decisionS4BElementOptions.iSayYes:
                ƒS.Sound.fade(sound.s4B_3_Choices, 0, 0);
                ƒS.Speech.clear();
                return S5C_SceneDogRun();
        };
    }
}