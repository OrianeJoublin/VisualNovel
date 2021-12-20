namespace Template {

    export async function S4A_SceneWindCity(): ƒS.SceneReturn {
        console.log("S4A_SceneWindCity starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> And so the wind blew <br> And together they flew <br> To the next city <br> And arrived in a jiffy. </p>",
                T0001: " was excited <br> It had never seen anything so far from its tree. <br> The wind felt its glee <br> And said farsighted: <br> “I have to warn you, so let it be said <br> That if you keep your wish, <br> you’re destined to be sad!”",
                TD101: "“I hope you are wrong <br> And we can move along <br> With your help I’m sure <br> I will find my own path.”",
                TD201: "“Of course I can, you liar! <br> I will fly higher! <br> Than all those friends <br> Who left me behind.”"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WindtoCity);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge); 

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S3T1");
        await ƒS.Speech.tell(characters.narrator, dataForSave.nameProtagonist + text.narrator.T0001, true, "S3T1");
        await ƒS.Speech.tell(characters.narrator, dataForSave.nameProtagonist + " answered, slightly on edge:", true, "S3T1")

        let decisionS4AElementOptions = {
            iBeNice: "Be nice",
            iBeAngry: "Get angry"
        };

        let decisionS4AElement = await ƒS.Menu.getInput(decisionS4AElementOptions, "individualCSSClass");

        switch (decisionS4AElement) {
            case decisionS4AElementOptions.iBeNice:
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD101, true, "S3T1");
                break;
            case decisionS4AElementOptions.iBeAngry:
                await ƒS.Speech.tell(characters.narrator, text.narrator.TD201, true, "S3T1");
                break;
        };

        ƒS.Sound.fade(sound.wind1, 0, 2)
        return S6A_SceneWindRain();
    }
}