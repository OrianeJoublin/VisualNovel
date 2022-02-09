namespace Template {

    export async function S7A_SceneDogCityRain(): ƒS.SceneReturn {
        console.log("S7A_SceneDogCityRain starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> And with nerve-wracking speed, <br> pulled to the ground was the poor little seed <br> Until it arrived, lost and shaken <br> on top of a bin smelling of bacon. </p>",
                T0001: "The city was loud <br> Though there was no crowd <br> For at this time of day <br> In bed most people lay.",
                T0002: dataForSave.nameProtagonist + " looked around <br> And was surprised that it found <br> On the pavement the dog Mable <br> who was chewing on a cable!",
                T0003: "<p> “Hello Mable!”, " + dataForSave.nameProtagonist + " said. <br> But the timing was bad <br> Before the dog could reply <br> A bird dived out of the sky. </p>",
                T0004: "<p> As its claws snapped <br> The seed almost wept. <br> Why was the world so unkind? <br> So different from the one it left behind. </p>",
                T0005: "<p> And Mable barked and roared <br> But the bird had soared <br> Back into the air <br> Leaving behind the town square. </p>",
                T0006: "<p> The air rushed by " + dataForSave.nameProtagonist + "'s cheeks <br> and the little seed shrieked. <br> It fought hard against the claws <br> as the bird cawed. </p>"
            }
        };
        //City Sound
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.Sound.fade(sound.city, 0.1, 2, true);

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.CityWithMable);
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);
        //await ƒS.Character.show(characters.Crow, characters.Crow.pose.flight, ƒS.positionPercent (0,70));
        //await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());


        //Text before bird
        await ƒS.Sound.play(sound.s7A_1, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S7AT1");
        ƒS.Sound.fade(sound.s7A_1, 0, 0);
        await ƒS.Sound.play(sound.s7A_2, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S7AT1");
        ƒS.Sound.fade(sound.s7A_2, 0, 0);
        await ƒS.Sound.play(sound.s7A_3, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true, "S7AT1");

        //Bird flys in (hier wird der Vogel zum Teil durchsichtig)
        await ƒS.Character.animate(characters.Crow, characters.Crow.pose.flight, flyDown());

        // Text after bird
        ƒS.Sound.fade(sound.s7A_3, 0, 0);
        await ƒS.Sound.play(sound.s7A_4, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004, true, "S7AT1");
       
        //Barking
        ƒS.Sound.fade(sound.dogBark1, 1, 2, true);

        //Text while Barking
        ƒS.Sound.fade(sound.s7A_4, 0, 0);
        await ƒS.Sound.play(sound.s7A_5, 1.5, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005 + text.narrator.T0006, true, "S7AT1");

        //Fade Out Sound + City quieter
        ƒS.Sound.fade(sound.s7A_5, 0, 0);
        ƒS.Sound.fade(sound.wind1, 0, 3);
        ƒS.Sound.fade(sound.thunderStorm2, 0, 3);
        ƒS.Sound.fade(sound.rain3, 0, 3);
        ƒS.Sound.fade(sound.city, 0, 3);
        ƒS.Sound.fade(sound.dogBark1, 0, 2, true);

        ƒS.Character.hide (characters.Crow);
        ƒS.Character.hide (characters.Rain);

        ƒS.Speech.clear();
        return S8_SceneBirdRoof1();
    }
}