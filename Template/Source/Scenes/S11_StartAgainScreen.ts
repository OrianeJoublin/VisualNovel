namespace Template {

    export async function StartAgainScreen(): ƒS.SceneReturn {
        console.log("StartAgainScreen starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Oh no! Would you like to start over again? </p>",
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.Black);
        //await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S11");

        let decisionS11ElementOptions = {
            iSayYes: "Start over",
            iSayNo: "Quit"
        };

        let decisionS11Element = await ƒS.Menu.getInput(decisionS11ElementOptions, "finalDecision");

        switch (decisionS11Element) {
            case decisionS11ElementOptions.iSayYes:
                ƒS.Speech.clear();
                return S1_IntroPart1();
            case decisionS11ElementOptions.iSayNo:
                ƒS.Speech.clear();
                //return S4B_SceneDogSit();
        };
    
        //ƒS.Speech.clear();

        //Return Start or Credits? + Novel Page: Do you want to start over?
        
    }
}