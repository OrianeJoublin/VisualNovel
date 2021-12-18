namespace Template {

    //Animationen, die für alle Szenen gelten

    export function jirkaAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.5) },
            end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.LOOP
        }
    };

    export function fromLefttoRight(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.bottomleft },
            end: { translation: ƒS.positions.bottomright },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function fromToptoCenter(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.topcenter },
            end: { translation: ƒS.positions.center },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function fromToplefttoTopcenter(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.topleft },
            end: { translation: ƒS.positions.topcenter },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function SwayDown(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(40, 45) },
            end: { translation: ƒS.positionPercent(50, 50) },
            duration: 30, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.LOOP
        }
    };

    export function Sway(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(40, 45) },
            end: { translation: ƒS.positionPercent(50, 45) },
            duration: 30, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

    export function Rain(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.topcenter },
            end: { translation: ƒS.positions.center },
            duration: 0.5, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.LOOP
        }
    };


}