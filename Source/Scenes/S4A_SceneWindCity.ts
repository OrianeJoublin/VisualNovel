namespace Template {

    export async function S4A_SceneWindCity(): ƒS.SceneReturn {
        console.log("S4A_SceneWindCity starting");

        let text = {
            narrator: {
                T0000: "<p> And so the wind blew <br> And together they flew <br> To the next city <br> And arrived in a jiffy. </p>",
                T0001: " was excited. <br> It had never seen anything so far from its tree. <br> The wind felt its glee <br> And said reprovingly: <br> “I have to warn you, so let it be said <br> That if you keep your wish, <br> You’re destined to be sad!”",
                TD101: "“I hope you are wrong <br> And we can move along <br> With your help I’m sure <br> I will find my own path.”",
                TD201: "“Of course I can, you liar! <br> I will fly higher! <br> Than all those friends <br> Who left me behind.”"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WindtoCity);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s4A_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S3T1");
        ƒS.Sound.fade(sound.s4A_1, 0, 0);
        await ƒS.Sound.play(sound.s4A_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, dataForSave.nameProtagonist + text.narrator.T0001, true, "S3T1");
        ƒS.Sound.fade(sound.s4A_2, 0, 0);
        await ƒS.Sound.play(sound.s4A_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, dataForSave.nameProtagonist + " answered, slightly on edge:", true, "S3T1");

        let decisionS4AElementOptions = {
            iBeNice: "Be nice",
            iBeAngry: "Get angry"
        };

        ƒS.Sound.fade(sound.s4A_3, 0, 0);
        await ƒS.Sound.play(sound.s4A_3_Choices, 1.7, false);

        let decisionS4AElement = await ƒS.Menu.getInput(decisionS4AElementOptions, "decisionClass");

        switch (decisionS4AElement) {
            case decisionS4AElementOptions.iBeNice:
                ƒS.Sound.fade(sound.s4A_3_Choices, 0, 0);
                await ƒS.Sound.play(sound.S4A_4_iBeNice, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101, true, "S3T1");
                break;
            case decisionS4AElementOptions.iBeAngry:
                ƒS.Sound.fade(sound.s4A_3_Choices, 0, 0);
                await ƒS.Sound.play(sound.S4A_4_iBeAngry, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD201, true, "S3T1");
                break;
        };

        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.S4A_4_iBeAngry, 0, 0);
        ƒS.Sound.fade(sound.S4A_4_iBeNice, 0, 0);
        return S6A_SceneWindRain();
    }
}