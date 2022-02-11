namespace Template {

    export async function S5C_SceneDogRun(): ƒS.SceneReturn {
        console.log("S5C_SceneDogRun starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> “Of course I will!”, <br> And jumping with skill <br> Mable carried the seed <br> At top speed <br> Down the hill, down, <br> Towards the next town. </p>",
                T0001: "“I’m hungry, you see. <br> But if you stay with me,” <br> Said Mable, so brave. <br> “I’ll make sure you stay safe!”",
                T0002: "<p> Together they travelled <br> As time unravelled <br> To the next city <br> Which was quite pretty <br> And so arrived dawn <br> as the morning yawned.</p>",
                T0003: "The city was loud <br> Though there was no crowd <br> For at this time of day <br> In bed most people lay.",
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.WithMabletoCity);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        await ƒS.Character.animate(characters.Dog, characters.Dog.pose.walk, dogEnter());

        //Text
        await ƒS.Sound.play(sound.s5C_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001, true, "S5CT1");
        ƒS.Sound.fade(sound.s5C_1, 0, 0);
        await ƒS.Sound.play(sound.s5C_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S5CT1");

        await ƒS.Character.animate(characters.Dog, characters.Dog.pose.walk, dogExit());

        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.s5C_2, 0, 0);
        return S7C_SceneDogCity();
    }
}