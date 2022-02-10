namespace Template {

    export async function S7C_SceneDogCity(): ƒS.SceneReturn {
        console.log("S7C_SceneDogCity starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Mable trotted to a bin <br> And she stuck her nose in <br> While " + dataForSave.nameProtagonist + " climbed on top <br> Of the bin and stopped.</p>",
                T0001: "<p> “What are you eating?”, " + dataForSave.nameProtagonist + " said. <br> But the timing was rather bad <br> Before the dog could reply <br> A bird dived out of the sky. </p>",
                T0002: "<p> As its claws snapped <br> The seed almost wept. <br> Why was the world so unkind? <br> So different from the one it left behind. </p>",
                T0003: "<p> And Mable barked and roared <br> But the bird had soared <br> Back into the air <br> Leaving behind the town square. </p> ",
                T0004: "The air rushed by " + dataForSave.nameProtagonist + "'s cheeks <br> and the little seed shrieked. <br> It fought hard against the claws <br> as the bird cawed."
            }
        };
        //City Sound
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.Sound.fade(sound.city, 0.18, 2, true);

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.CityWithMable);
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text before bird
        await ƒS.Sound.play(sound.s7C_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S7AT1");
        ƒS.Sound.fade(sound.s7C_1, 0, 0);
        await ƒS.Sound.play(sound.s7C_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true, "S7AT1");

        //Bird flys in
        await ƒS.Character.animate(characters.Crow, characters.Crow.pose.flight, flyDown());

        // Text after bird
        ƒS.Sound.fade(sound.s7C_2, 0, 0);
        await ƒS.Sound.play(sound.s7C_2_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S7AT1");

        //Barking
        ƒS.Sound.fade(sound.dogBark1, 1, 2, true);

        //Text while Barking
        ƒS.Sound.fade(sound.s7C_2_2, 0, 0);
        await ƒS.Sound.play(sound.s7C_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003 + text.narrator.T0004, true, "S7AT1");

        //Fade Out SoundEffects
        ƒS.Sound.fade(sound.city, 0, 3);
        ƒS.Sound.fade(sound.dogBark1, 0, 2, true);

        ƒS.Character.hide(characters.Crow);

        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.s7C_3, 0, 0);
        return S8_SceneBirdRoof1();
    }
}