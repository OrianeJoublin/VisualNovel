namespace Template {
  export async function StartPage(): ƒS.SceneReturn {
    console.log("StartPage starting");

    // Background, transitions and characters appear:
    await ƒS.Location.show(locations.Black);
    //await ƒS.update(transitions.Page.duration, transitions.Page.alpha, transitions.Page.edge); // es gibt die Möglichkeit, transition Attribute zu kombinieren (also von anderen Transitions)

    //Novel Page

    ƒS.Text.setClass("NovelPageKlassennameZumGestalten"); //addClass klasse hinzufügen vs. Set Class wo gestalterisches von alten Klass auch übernommen wird
    ƒS.Text.print("Willkommen zu dieser Visual Novel xyz");
  }
}