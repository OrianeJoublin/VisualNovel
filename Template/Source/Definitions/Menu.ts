namespace Template {

    //Menü
    export let menu: boolean = true; //true heißt Menü ist offen, false wäre geschlossen

    export let inGameMenu = {
        save: "Save", //hier kommen Buttons rein, die angezeigt werden sollen plus string um CSS zu gestalten mit jeweiliger ID
        load: "Load",
        close: "Close",
        // open: "Open" //anschließend kann hier auch Credits rein
    };

    export let gameMenu: ƒS.Menu;

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option); //auf Console ausgeben, ob gespeichetr oder geladen, hilfestellung zum debuggen
        switch (_option) {
            case inGameMenu.save:
                await ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            //case inGameMenu.close:
            // gameMenu.open();
            // menu = true;
            // break;
        }
    }


    // Shortcuts für's Menü bzw. Shortcuts generell hier rein
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8: //hier englische tastatur also z und y berpcksichtigen
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M: //Buchstabe für Close Menü
                if (menu) {
                    console.log("Close");
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menu = true;
                }
                break;
        }
    }

}