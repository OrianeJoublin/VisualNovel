namespace Template {

    export async function S10B_BadEnding2(): ƒS.SceneReturn {
        console.log("S10B_BadEnding2 starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Too scared to face its greatest fear  <br>" + dataForSave.nameProtagonist + " took a step back in tears. <br> “I can't save him, I just can't!” <br> The seed answered the demand. </p>",
                T0001: "<p> Mable and " + dataForSave.nameProtagonist + " watched in horror <br> as the ant fell and like water <br> splashed onto the ground <br> without a sound. </p>",
                T0002: "<p> “I knew you were scared <br> I never thought you were selfish.” <br> Said Anni and glared <br> at " + dataForSave.nameProtagonist + " without relish. </p>",
                T0003: "<p> “Go back then to where you belong! <br> After all, my friends never stay for long. <br> I'll be here on my own.” <br> said " + dataForSave.nameProtagonist + " with a moan. </p>",
                T0004: "<p> No one ever talked to " + dataForSave.nameProtagonist + " again <br> This had been the moment when <br> it could have shown some gratitude to all <br> who had helped it not to fall. </p>",
                T0005: "<p> " + dataForSave.nameProtagonist + " had missed its chance, <br> now it sat down in trance. <br> On the roof that was to become its tomb <br> " + dataForSave.nameProtagonist + " would never bloom. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.AntFalls);
        ƒS.update(1);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Sound.play(sound.s10B_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S10BT1");
        ƒS.Sound.fade(sound.s10B_1, 0, 0);
        await ƒS.Sound.play(sound.s10B_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true, "S10BT1");
        ƒS.Sound.fade(sound.s10B_2, 0, 0);
        await ƒS.Sound.play(sound.s10B_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S10BT1");
        ƒS.Sound.fade(sound.s10B_3, 0, 0);
        ƒS.Speech.clear();

        //New Background Seed Alone in Rain
        await ƒS.Location.show(locations.SeedAlone);
        ƒS.update(1);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Animation Rain and Sound
        await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());
        ƒS.Sound.fade(sound.wakeUp, 0.15, 2, true);
        ƒS.Sound.fade(sound.rain3, 0.4, 2, true);

        //Text
        await ƒS.Sound.play(sound.s10B_4, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true, "S10BT2");

        //Rain Animation and Sound Stop
        ƒS.Sound.fade(sound.rain3, 0, 4, true);
        ƒS.Character.hide (characters.Rain);
        ƒS.Sound.fade(sound.s10B_4, 0, 0);
        ƒS.Speech.clear();

        //New Background Bad Ending
        await ƒS.Location.show(locations.BadEnding);
        ƒS.update(1);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        // Text
        await ƒS.Sound.play(sound.s10B_5, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004 + text.narrator.T0005, true, "S10BT3");

        ƒS.Sound.fade(sound.s10B_5, 0, 0);
        ƒS.Speech.clear();
        return StartAgainScreen();
    }
}