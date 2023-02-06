input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
})
