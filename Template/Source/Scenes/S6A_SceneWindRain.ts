namespace Template {

    export async function S6A_SceneWindRain(): ƒS.SceneReturn {
        console.log("S6A_SceneWindRain starting");

        ƒS.Sound.fade(sound.wakeUp, 0.1, 3, true);
        ƒS.Sound.fade(sound.wind1, 0.05, 0, true);
        ƒS.Sound.fade(sound.thunderStorm2, 0.2, 0, true);
        ƒS.Sound.fade(sound.rain3, 0.3, 2, true);
        

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> No sooner had it spoken <br> Than the sky had broken. <br> Through heavy clouds poured the rain, <br> " + dataForSave.nameProtagonist + " cried in pain <br> As a huge drop caught it <br> And the sky was all lit. <br> The thunder growled <br> And the wind howled: </p>",
                T0001: "“I can’t carry you, I’m sorry! <br> You’re too wet and too heavy. <br> I hope you little seed <br> Find the end that you seek.”"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WindRain);
        ƒS.update(1);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);
        ƒS.Character.show(characters.Crow, characters.Crow.pose.flight, ƒS.positionPercent (0,0)); 
        ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());

        //Text
        await ƒS.Sound.play(sound.s6A, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S6AT1");

        ƒS.Sound.fade(sound.s6A, 0, 0);
        ƒS.Speech.clear();
        return S7A_SceneDogCityRain();
    }
}