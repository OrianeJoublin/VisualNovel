namespace Template {

    export async function StartAgainScreen(): ƒS.SceneReturn {
        console.log("StartAgainScreen starting");

        let text = {
            narrator: {
                T0000: "<p> This cannot be the end that you wanted so badly. <br> So why don't you go back to the valley <br> And have another try <br> at helping the little seed fly? </p> <p> Take all the lessons you learned <br> And fight for the ending that you could have earned. </p>",
                TBad: "Bad Ending"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.FinalBad);
        ƒS.Sound.play(sound.pageFlip, 0.4, false);
        ƒS.update(1);

        //Text
        await ƒS.Sound.play(sound.startAgainScreen, 1.7, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S11");

        let decisionS11ElementOptions = {
            iSayYes: "Start over",
            iSayNo: "Finish"
        };

        let decisionS11Element = await ƒS.Menu.getInput(decisionS11ElementOptions, "finalDecision");

        switch (decisionS11Element) {
            case decisionS11ElementOptions.iSayNo:
                ƒS.Sound.fade(sound.startAgainScreen, 0, 0);
                await ƒS.Sound.play(sound.badEnding, 1.7, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.TBad, true, "Ending");
                return EndOfNovel();
            case decisionS11ElementOptions.iSayYes:
                ƒS.Sound.fade(sound.startAgainScreen, 0, 0);
                ƒS.Speech.clear();
                return S1_IntroPart1();
        };
    }
}