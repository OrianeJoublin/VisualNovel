namespace Template {

    export async function StartAgainScreen(): ƒS.SceneReturn {
        console.log("StartAgainScreen starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> This cannot be the end that you wanted so badly. <br> So why don't you go back to the valley <br> and have another try <br> at helping the little seed fly? </p> <p> Take all the lessons you learned <br> and fight for the ending that you could have earned. </p>",
                TBad: "Bad Ending"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.FinalBad);
        ƒS.Sound.play(sound.pageFlip, 0.4, false); 
        ƒS.update (1);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S11");

        let decisionS11ElementOptions = {
            iSayYes: "Start over",
            iSayNo: "Finish"
        };

        let decisionS11Element = await ƒS.Menu.getInput(decisionS11ElementOptions, "finalDecision");

        switch (decisionS11Element) {
            case decisionS11ElementOptions.iSayNo:
                await ƒS.Speech.tell(characters.narrator, text.narrator.TBad, true, "Ending");
                ƒS.Speech.clear();
                return S1_IntroPart1(); //for now, better would be to return to the start screen
                //return EndOfNovel();
            case decisionS11ElementOptions.iSayYes:
                ƒS.Speech.clear();
                //return S1_IntroPart1();
        };
    }
}