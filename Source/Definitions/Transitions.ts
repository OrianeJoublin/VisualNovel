namespace Template {

    // define transitions
    export let transitions = {
        clock: {
            duration: 1,
            alpha: "./Transitions/jigsaw01.png",
            edge: 1 // harte Transition
        },
        new: {
            duration: 1,
            alpha: "./Transitions/001.jpg",
            edge: 1
        },
        black: {
            duration: 1,
            alpha: "./Transitions/black.png",
            edge: 0.5
        },
        Splash: {
            duration: 1,
            alpha: "./Images/Splash.png",
            edge: 2
        },
        Page: {
            duration: 5,
            alpha: "./Transitions/Page1.png",
            edge: 2
        }
    };
}