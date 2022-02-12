namespace Template {

    export async function S9A_SceneBirdRoof2(): ƒS.SceneReturn {
        console.log("S9A_SceneBirdRoof2 starting");

        let text = {
            narrator: {
                T0000: "<p> “Thank you”, whispered the seed <br> And within a beat <br> Next to the ant behind a rock <br> It hid in shock. </p>",
                T0001: "<p> The crow caught by surprise <br> Stuck its beak between the tiles to get her prize. <br>" + dataForSave.nameProtagonist + " whispered: “Thank you for saving my life!” <br> “No worries, I’m Ralph.” </p>",
                T0002: "<p> “I’m " + dataForSave.nameProtagonist + "”, said the seed <br> “I’m glad you freed <br> Me from this crow!” <br> Then, with a stroke <br> The tile broke. </p>",
                T0003: "<p> “Here here, an ant!”, <br> Grinned the bird. <br> “On my land!” </p>",
                T0004: "<p> But all the seed heard <br> Was the boisterous barking <br> Of Mable the dog who was charging <br> Towards the little group <br> In a swoop. </p>",
                T0005: "<p> In the blink of an eye <br> The crow leaped to the sky <br> And kicked Ralph, " + dataForSave.nameProtagonist + "'s new friend <br> Over the side of the roof to meet an early end. </p>",
                T0006: "<p> “You can save him if you jump down!”, <br> Spoke Mable with a frown. <br> “But if I jump, I’ll touch the ground.” <br> “You will find a way around!” </p>",
                T0007: "<p> Anni smiled encouragingly. <br> " + dataForSave.nameProtagonist + " thought of its tree. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.AntAndSeedHide);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s9A_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S9AT1");
        ƒS.Sound.fade(sound.s9A_1, 0, 0);
        await ƒS.Sound.play(sound.s9A_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S9AT1");
        ƒS.Sound.fade(sound.s9A_2, 0, 0);
        ƒS.Speech.clear();

        //New Background:  
        await ƒS.Location.show(locations.AntGetsEaten);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s9A_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true, "S9AT2");
        ƒS.Sound.fade(sound.s9A_3, 0, 0);
        ƒS.Speech.clear();

        //New Background - Mable appears
        await ƒS.Location.show(locations.MableJoins);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Sound
        ƒS.Sound.fade(sound.dogBark1, 0.6, 2, true);
        ƒS.Sound.fade(sound.crow, 0.5, 2, true);
        ƒS.Sound.fade(sound.dogBark1, 0, 6, true);
        ƒS.Sound.fade(sound.crow, 0, 6, true);

        //Text
        await ƒS.Sound.play(sound.s9A_4, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004 + text.narrator.T0005, true, "S9AT3");
        ƒS.Sound.fade(sound.s9A_4, 0, 0);
        await ƒS.Sound.play(sound.s9A_5, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0006 + text.narrator.T0007, true, "S9AT3");


        let decisionS9AElementOptions = {
            iJump: "Jump",
            iDontJump: "Don't jump"
        };

        ƒS.Sound.fade(sound.s9A_5, 0, 0);
        await ƒS.Sound.play(sound.s9A_5_Choices, 1.7, false);


        let decisionS9AElement = await ƒS.Menu.getInput(decisionS9AElementOptions, "decisionClass");

        switch (decisionS9AElement) {
            case decisionS9AElementOptions.iJump:
                ƒS.Sound.fade(sound.s9A_5_Choices, 0, 0);
                ƒS.Speech.clear();
                return S10A_GoodEnding();
            case decisionS9AElementOptions.iDontJump:
                ƒS.Sound.fade(sound.s9A_5_Choices, 0, 0);
                ƒS.Speech.clear();
                return S10B_BadEnding2();
        };
    }
}