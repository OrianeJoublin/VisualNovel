namespace Template {

    export async function S5B_SceneWindCity(): ƒS.SceneReturn {
        console.log("S5B_SceneWindCity starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Up and higher " + dataForSave.nameProtagonist + " flew <br> Carried by the wind it knew <br> Anni was her name <br> And she wasn’t that tame. </p>",
                T0001: "“Back so soon? <br>  It’s not even noon! <br> I though you hated me! <br> Are you at least sorry?”",
                T0002: "<p> Together they travelled <br> As time unravelled <br> To the next city <br> Which was quite pretty <br> And so arrived dawn <br> as the morning yawned.</p>",
                T0003: dataForSave.nameProtagonist + " finally responded <br> To the wind’s inquiery:",
                TD101: "<p> “You’re right to be offended <br> And yes I am sorry. <br> Does that mean you will help me?” </p>",
                TD201: "“I don’t want to be helped <br> and no I’m not sorry.”",
            }
        };

        //Sound
        ƒS.Sound.fade(sound.wind1, 0.2, 2, true)

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WindtoCity);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S3T1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S3T1");

        let decisionS4BElementOptions = {
            iSaySorry: "Sorry",
            iSayNotSorry: "Not sorry"
        };

        let decisionS4BElement = await ƒS.Menu.getInput(decisionS4BElementOptions, "individualCSSClass");

        switch (decisionS4BElement) {
            case decisionS4BElementOptions.iSaySorry:
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101, true, "S3T1");
                ƒS.Sound.fade(sound.wind1, 0, 2);
                return S6A_SceneWindRain();
            case decisionS4BElementOptions.iSayNotSorry:
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD201, true, "S3T1");
                ƒS.Sound.fade(sound.wind1, 0, 2);
                return S6A_SceneWindRain();
        };
    }
}