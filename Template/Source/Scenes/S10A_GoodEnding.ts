namespace Template {

    export async function S10A_GoodEnding(): ƒS.SceneReturn {
        console.log("S10A_GoodEnding starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> " + dataForSave.nameProtagonist + " jumped with a scream <br> As if in a dream <br> Over the roof's edge <br> Its body stretched. </p>",
                T0001: "<p> The seed soared through the air <br> Living its greatest nightmare <br> Down there was the ant <br> " + dataForSave.nameProtagonist + " stretched out its hand. <br> Anni, the wind picked them up lightly <br> Smiling widely. </p>",
                T0002: "<p> “I will drop you both to the ground <br> Destiny always comes round. <br> But first I’ll make a confession <br> For you gave me a lesson. </p>",
                T0003: "<p> You taught me that a detour <br> Can make you more mature! <br> So farewell my friend <br> I swear this is not the end!” </p>",
                T0004: "<p> Many seasons came around <br> And out of the ground <br> Just at the spot <br> Where the seed had dropped <br> Had grown a mighty tree. </p>",
                T0005: "<p> By its side was Mable chasing a flea. <br> The wind tickled its leaves <br> While Ralph told the seeds. <br> “Don’t be scared of falling. <br> It’s just the beginning.” </p>",
                TGood: "Good Ending"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.SeedSavesAnt);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);
        ƒS.Sound.fade(sound.wind1, 0.08, 2, true);
        ƒS.Sound.fade(sound.wakeUp, 0.18, 2, true);

        //Text
        await ƒS.Sound.play(sound.s10A_1, 1.8, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S10AT1");
        ƒS.Sound.fade(sound.s10A_1, 0, 0);
        await ƒS.Sound.play(sound.s10A_2, 1.8, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true, "S10AT1");
        ƒS.Sound.fade(sound.s10A_2, 0, 0);
        await ƒS.Sound.play(sound.s10A_3, 1.8, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002 + text.narrator.T0003, true, "S10AT1");
        ƒS.Sound.fade(sound.s10A_3, 0, 0);
        ƒS.Sound.fade(sound.wind1, 0, 2, true);
        ƒS.Speech.clear();

        //New Background Healthy Tree
        await ƒS.Location.show(locations.GoodEnding);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.update(1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);
        ƒS.Sound.fade(sound.wind2, 0.03, 2, true);
        ƒS.Sound.fade(sound.springBirds, 0.4, 2, true);
        ƒS.Sound.fade(sound.springWeather, 0.18, 2, true);

        //Text
        await ƒS.Sound.play(sound.s10A_4, 1.8, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004, true, "S10AT2");
        ƒS.Sound.fade(sound.s10A_4, 0, 0);
        await ƒS.Sound.play(sound.s10A_5, 1.8, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005, true, "S10AT2");

        ƒS.Sound.fade(sound.s10A_5, 0, 0);
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.wind1, 0, 4, true);
        ƒS.Sound.fade(sound.wakeUp, 0, 4, true);
        ƒS.Sound.fade(sound.wind2, 0, 4, true);
        ƒS.Sound.fade(sound.springBirds, 0, 4, true);
        ƒS.Sound.fade(sound.springWeather, 0, 4, true);

        //New Background Good Ending
        await ƒS.Location.show(locations.FinalGood);
        ƒS.update(1);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);
        
        await ƒS.Sound.play(sound.goodEnding, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.TGood, true, "Ending");
        ƒS.Sound.fade(sound.goodEnding, 0, 0);
        return EndOfNovel();
        //return S1_IntroPart1(); //for now, better would be to return to the start screen
        
    }
}