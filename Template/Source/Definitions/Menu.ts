namespace Template {

      //  MENU - Audio functions

  export let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 100)
      return;
    volume += 0.2;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0)
      return;
    volume -= 0.2;
    ƒS.Sound.setMasterVolume(volume);
  }

    export let inGameMenu = {
        save: "Save",
        load: "Load",
        //close: "Close"
        credits: "Credits",
        // open: "Open"
        shortcuts: "Shortcuts",
        turnUpVolume: "+",
        turnDownVolume: "-"
    };


    export let gameMenu: ƒS.Menu;

    export function showCredits(): void {
        ƒS.Text.setClass("credits");
        ƒS.Text.print("<p> CREDITS </p> <p> Story by Oriane Joublin <br> Backgrounds and Characters by Oriane Joublin <br> Art by Oriane Joublin <br> Programming by Oriane Joublin </p> <p> MUSIC </p> <p> Adventure by Alexander Nakarada <br> Forest Walk by Alexander Nakarada <br> Wake Up by Scandinavianz </p> <p> SOUNDS </p> Sound effects from soundjay.com <br> Additional sound effects from zapsplat.com </p> <p> Made with FUDGEStory </p> <p> WITH SPECIAL THANKS <br> to Carina Spangenberger, Riem Yasin, Jirka Dell'Oro and <br> Frank Joublin for their support in programming questions and <br> to Iris Schnabel and Emily Pacey for improving the rhymes.</p>");
    };

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts");
        ƒS.Text.print("SHORTCUTS Explanation HERE");
    };

    // true = offen; false = geschlossen
    export let menu: boolean = true;

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await ƒS.Progress.load();
                break;
            case inGameMenu.credits:
                showCredits();
                break;
            case inGameMenu.shortcuts:
                showShortcuts();
                break;
            case inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case inGameMenu.turnDownVolume:
                decrementSound();
                break;
            //case inGameMenu.close:
            //gameMenu.close();
            //menu = false;
            //break;
            //case inGameMenu.open:
            //gameMenu.open();
            //menu = true;
            //break;
        }
    }


    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Schließen");
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Öffnen");
                    gameMenu.open();
                    menu = true;
                }
                break;
        }
    }


}