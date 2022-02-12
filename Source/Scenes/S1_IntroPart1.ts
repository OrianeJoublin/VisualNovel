namespace Template {
  export async function S1_IntroPart1(): ƒS.SceneReturn {
    console.log("S1_IntroPart1 starting");

    let text = {
      narrator: {
        T0000: "<p> Somewhere very far away <br> On a little hill in May <br> Stood a miracle tree <br> Spreading its branches gleefully. </p>",
        T0001: "<p> During this happy spring event <br> All the tree's seeds flew around <br> For it was time they were sent <br> To grow on the ground. </p>",
        T0002: "For days the wind blew <br> And all the seeds flew <br> Up in the air and down to the earth <br> Where to brand new trees <br> They would give birth."
      }
    };

    //Musik
    ƒS.Sound.play(sound.wakeUp, 0.15, true);

    //Animation
    let animationDone: Promise<void> = ƒS.Character.animate(characters.ManySeeds, characters.ManySeeds.pose.neutral, SwayDown());

    // Background, transitions and characters appear
    await ƒS.Location.show(locations.TreeWithoutSeeds);
    ƒS.update(1);
    ƒS.Sound.play(sound.pageFlip, 0.4, false);
    animationDone;

    //Novel Page
    ƒS.Text.setClass("startScreen");
    let startScreen =
      "<h1>Welcome!</h1>\
    <p> To continue with the novel click anywhere on the screen. <br>\
    For a better experience change to full-screen mode as follows: <br>\
    <table>\
      <tr>\
        <td>Windows</td>\
        <td>f11</td>\
      </tr>\
      <tr>\
        <td>Mac</td>\
        <td>Ctrl - Cmd – F </td>\
      </tr>\
    </table>\
    <p>Use the same keys to close the full-screen view.</p>\
    <h3>Enjoy!</h3>\
    ";
    ƒS.Text.print(startScreen);

    // Text pace
    ƒS.Speech.setTickerDelays(70, 500);



    //Text
    await ƒS.Speech.tell(null, null, true); //nur damit text erst nach erstem klick kommt wegen Novel Page 

    //VoiceOver
    await ƒS.Sound.play(sound.s1, 1.6, false);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000 + text.narrator.T0001 + text.narrator.T0002, true, "introduction");


    // Animation endet
    ƒS.Character.hide(characters.ManySeeds);
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.s1, 0, 0);

    return S2_IntroPart2();
  }
}