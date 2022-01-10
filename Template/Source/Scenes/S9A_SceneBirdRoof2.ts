namespace Template {

    export async function S9A_SceneBirdRoof2(): ƒS.SceneReturn {
        console.log("S9A_SceneBirdRoof2 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> “Thank you”, whispered the seed <br> and within a beat <br> next to the ant behind a rock <br> it hid in shock. </p>",
                T0001: "<p> The Crow caught by surprise <br> Stuck its beak between the tiles to get her prize. <br>" + dataForSave.nameProtagonist + " whispered: “Thank you for saving my life!” <br> “No worries, I’m Ralph.” </p>",
                T0002: "<p> “I’m " + dataForSave.nameProtagonist + "”, said the seed <br> “I’m glad you freed <br> me from this crow!” <br> Then, with a stroke <br> The tile broke </p>",
                T0003: "<p> “Here here, an ant!” <br> Grinned the bird. <br> “On my land!” </p>",
                T0004: "<p> But all the seed heard <br> Was the boisterous barking <br> Of Mable the dog who was charging <br> Towards the little group <br> In a swoop. </p>",
                T0005: "<p> In the blink of an eye <br> The crow leaped to the sky <br> And kicked Ralph, " + dataForSave.nameProtagonist + "'s new friend <br> Over the side of the roof to meet an early end. </p>",
                T0006: "<p> “You can save him if you jump down!” <br> Spoke Mable with a frown. <br> “But if I jump, I’ll touch the ground.” <br> “You will find a way around!” </p>",
                T0007: "<p> Annie smiled encouragingly. <br> " + dataForSave.nameProtagonist + " thought of its tree. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.AntAndSeedHide);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S9AT1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S9AT1");
        ƒS.Speech.clear();

        //New Background:  
        await ƒS.Location.show(locations.AntGetsEaten);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true, "S9AT2");
        ƒS.Speech.clear();

        //New Background - Mable appears
        await ƒS.Location.show(locations.MableJoins);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004 + text.narrator.T0005, true, "S9AT3");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0006 + text.narrator.T0007, true, "S9AT3");

        let decisionS9AElementOptions = {
            iJump: "Jump",
            iDontJump: "Don't jump"
        };

        let decisionS9AElement = await ƒS.Menu.getInput(decisionS9AElementOptions, "individualCSSClass");

        switch (decisionS9AElement) {
            case decisionS9AElementOptions.iJump:
                ƒS.Speech.clear();
                return S10A_GoodEnding();
            case decisionS9AElementOptions.iDontJump:
                ƒS.Speech.clear();
                return S10B_BadEnding2();
        };
    }
}