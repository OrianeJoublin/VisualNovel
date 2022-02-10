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
        let credits =
      "<h1>CREDITS</h1>\
      <table>\
        <tr>\
          <td>Story</td>\
          <td>Oriane Joublin</td>\
        </tr>\
        <tr>\
          <td>Art</td>\
          <td>Oriane Joublin</td>\
        </tr>\
        <tr>\
          <td>Programming</td>\
          <td>Oriane Joublin</td>\
        </tr>\
        <h3>Music</h3>\
        <tr>\
          <td>Adventure</td>\
          <td>Alexander Nakarada</td>\
        </tr>\
        <tr>\
        <td>Forest Walk</td>\
        <td>Alexander Nakarada</td>\
        </tr>\
        <tr>\
        <td>Wake Up</td>\
        <td>Scandinavianz</td>\
        </tr>\
        <h3>SFX</h3>\
        <tr>\
          <td>Sound Effects</td>\
          <td>soundjay.com</td>\
        </tr>\
        <tr>\
        <td>Additional sound effects </td>\
        <td>zapsplat.com</td>\
        </tr>\
        <tr>\
        <td>Voice Over</td>\
        <td>Oriane Joublin</td>\
        </tr>\
      </table>\
      <h3>Special Thanks</h3>\
      <p> to Carina Spangenberger, Riem Yasin, Jirka Dell'Oro and <br> Frank Joublin for their support in programming questions and <br> to Iris Schnabel and Emily Pacey for improving the rhymes.</p>\
      <p>Made with FUDGE Story\
      ";
        ƒS.Text.print(credits);
    };

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts");
        ƒS.Text.print("<p> <b> SHORTCUTS </b> </p> <p> Menü ein- und ausblenden: <em> m </em> <br> Vollbildmodus Windows ein- und ausschalten: <em> f11  </em> <br> Vollbildmodus Mac: <em> Ctrl - Cmd – F </em> </p>");
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