namespace Template {

    export async function S10A_GoodEnding(): ƒS.SceneReturn {
        console.log("S10A_GoodEnding starting");

        let text = { // Charaktere Texte
            narrator: {
                T0000: "<p> Name x jumped with a scream <br> As if in a dream <br> Over the roof top <br> Into the drop. </p>",
                T0001: "<p> The seed soared through the air <br> Living its greatest nightmare <br> Down there was the ant <br> Name x stretched out its hand <br> Annie, the wind picked them up lightly <br> Smiling widely. </p>",
                T0002: "<p> “I will drop you both to the ground <br> Destiny always comes round. <br> But first I’ll make a confession <br> For you gave me a lesson. </p>",
                T0003: "<p> You taught me that a detour <br> Can make you more mature! <br> So farewell my friend <br> I swear this is not the end!” </p>",
                T0004: "<p> Many seasons came around <br> And out of the ground <br> Just at the spot <br> Where the seed had dropped <br> Had grown a mighty tree. </p>",
                T0005: "<p> By its side was Mable chasing a flea. <br> The wind tickled its leaves <br> While Ralph told the seeds. <br> Don’t be scared of falling. <br> It’s the very beginning. </p>"
            }
        };

        //Background with transition and characters appear:
        await ƒS.Location.show(locations.SeedSavesAnt);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000, true, "S6AT1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001, true, "S6AT1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002, true, "S6AT1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, true, "S6AT1");

        //New Background Healthy Tree
        await ƒS.Location.show(locations.GoodEnding);
        await ƒS.update(transitions.new.duration, transitions.new.alpha, transitions.new.edge);

        //Text
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004, true, "S6AT1");
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005, true, "S6AT1");

        //Return Start or Credits? + Novel Page: Do you want to start over?
        
    }
}