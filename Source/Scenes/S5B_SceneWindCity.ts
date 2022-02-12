namespace Template {

    export async function S5B_SceneWindCity(): ƒS.SceneReturn {
        console.log("S5B_SceneWindCity starting");

        let text = {
            narrator: {
                T0000: "<p> Higher and higher " + dataForSave.nameProtagonist + " flew <br> Carried by the wind it knew <br> Anni was her name <br> And she wasn’t that tame. </p>",
                T0001: "“Back so soon? <br>  It’s not even noon! <br> I though you hated me! <br> Are you at least sorry?”",
                T0002: "<p> Together they travelled <br> As time unravelled <br> To the next city <br> Which was quite pretty <br> And so arrived dawn <br> as the morning yawned.</p>",
                T0003: dataForSave.nameProtagonist + " finally responded <br> To the wind’s inquiery:",
                TD101: "<p> “You’re right to be offended <br> And yes I am sorry. <br> Does that mean you will help me?” </p>",
                TD201: "“I don’t want to be helped <br> And no I’m not sorry.”"
            }
        };

        //Sound
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.Sound.fade(sound.wind1, 0.1, 2, true);

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WindtoCity);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s5B_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S5BT1");
        ƒS.Sound.fade(sound.s5B_1, 0, 0);
        await ƒS.Sound.play(sound.s5B_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S5BT1");

        let decisionS4BElementOptions = {
            iSaySorry: "Sorry",
            iSayNotSorry: "Not sorry"
        };

        ƒS.Sound.fade(sound.s5B_2, 0, 0);
        await ƒS.Sound.play(sound.s5B_2_Choices, 1.7, false);

        let decisionS4BElement = await ƒS.Menu.getInput(decisionS4BElementOptions, "decisionClass");

        switch (decisionS4BElement) {
            case decisionS4BElementOptions.iSaySorry:
                ƒS.Sound.fade(sound.s5B_2_Choices, 0, 0);
                await ƒS.Sound.play(sound.s5B_3_iSaySorry, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101, true, "S5BT1");
                ƒS.Sound.fade(sound.wind1, 0, 2);
                ƒS.Sound.fade(sound.s5B_3_iSaySorry, 0, 0);
                ƒS.Speech.clear();
                return S6A_SceneWindRain();
            case decisionS4BElementOptions.iSayNotSorry:
                ƒS.Sound.fade(sound.s5B_2_Choices, 0, 0);
                await ƒS.Sound.play(sound.s5B_3_iSayNotSorry, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD201, true, "S5BT1");
                ƒS.Sound.fade(sound.wind1, 0, 2);
                ƒS.Sound.fade(sound.s5B_3_iSayNotSorry, 0, 0);
                ƒS.Speech.clear();
                return S6A_SceneWindRain();
        };
    }
}