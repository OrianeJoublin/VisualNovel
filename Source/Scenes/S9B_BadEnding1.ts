namespace Template {

    export async function S9B_BadEnding1(): ƒS.SceneReturn {
        console.log("S9B_BadEnding1 starting");

        let text = {
            narrator: {
                T0000: "<p> “Thank you”, whispered the seed <br> and within a beat <br> it ran to the ant's hiding place <br> and pushed the ant into the bird’s space. </p>",
                T0001: "<p> Safe and sound " + dataForSave.nameProtagonist + " stood hidden <br> while the screaming ant got bitten. <br> The crow chewed it up with a very loud crunch. <br> as the seed broke down in a hunch. </p>",
                T0002: "<p> Anni, the wind who had seen the whole affair <br> told the dog Mable in despair. </p>",
                T0003: "<p> No one ever talked to " + dataForSave.nameProtagonist + " again <br> This had been the moment when <br> it could have shown some gratitude to all <br> who had helped it not to fall. </p>",
                T0004: "<p> " + dataForSave.nameProtagonist + " had missed its chance, <br> now it sat down in trance. </p>",
                T0005: "<p> On the roof that was to become its tomb <br> " + dataForSave.nameProtagonist + " would never bloom. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.AntGetsEaten);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.s9B_1, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S9BT1");
        ƒS.Sound.fade(sound.s9B_1, 0, 0);
        await ƒS.Sound.play(sound.s9B_2, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001 + text.narrator.T0002, true, "S9BT1");
        ƒS.Sound.fade(sound.s9B_2, 0, 0);
        ƒS.Speech.clear();

        //New Background Seed Alone in Rain
        await ƒS.Location.show(locations.SeedAlone);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Animation Rain and Sound
        await ƒS.Character.animate(characters.Rain, characters.Rain.pose.neutral, Rain());
        ƒS.Sound.fade(sound.wakeUp, 0.15, 2, true);
        ƒS.Sound.fade(sound.rain3, 0.4, 2, true);

        //Text
        await ƒS.Sound.play(sound.s9B_3, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003 + text.narrator.T0004, true, "S9BT2");

        //Rain Animation and Sound Stop
        ƒS.Sound.fade(sound.rain3, 0, 4, true);
        ƒS.Character.hide(characters.Rain);
        ƒS.Sound.fade(sound.s9B_3, 0, 0);
        ƒS.Speech.clear();

        //New Background Bad Ending
        await ƒS.Location.show(locations.BadEnding);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        // Text
        await ƒS.Sound.play(sound.s9B_4, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005, true, "S9BT3");

        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.s9B_4, 0, 0);
        return StartAgainScreen();
    }
}