control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_EVT_ANY, function () {
    score += 1
    final_score = score / 3
})
input.onButtonPressed(Button.A, function () {
    cannon.change(LedSpriteProperty.X, -1)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P5, EventBusValue.MICROBIT_EVT_ANY, function () {
    for (let index = 0; index < 4; index++) {
        if (bullet.isTouching(pguy_5)) {
            bullet.delete()
            pguy_5.delete()
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P13,
            EventBusValue.MICROBIT_EVT_ANY
            )
        } else {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P2, EventBusValue.MICROBIT_EVT_ANY, function () {
    for (let index = 0; index < 4; index++) {
        if (bullet.isTouching(pguy_2)) {
            bullet.delete()
            pguy_2.delete()
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P13,
            EventBusValue.MICROBIT_EVT_ANY
            )
        } else {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_EVT_ANY, function () {
    for (let index = 0; index < 4; index++) {
        if (bullet.isTouching(pguy_3)) {
            bullet.delete()
            pguy_3.delete()
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P13,
            EventBusValue.MICROBIT_EVT_ANY
            )
        } else {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(cannon.get(LedSpriteProperty.X), cannon.get(LedSpriteProperty.Y))
    if (cannon.get(LedSpriteProperty.X) == 0) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P1,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (cannon.get(LedSpriteProperty.X) == 1) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P2,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (cannon.get(LedSpriteProperty.X) == 2) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P3,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (cannon.get(LedSpriteProperty.X) == 3) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P4,
        EventBusValue.MICROBIT_EVT_ANY
        )
    } else if (cannon.get(LedSpriteProperty.X) == 4) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P5,
        EventBusValue.MICROBIT_EVT_ANY
        )
    }
})
input.onButtonPressed(Button.B, function () {
    cannon.change(LedSpriteProperty.X, 1)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_EVT_ANY, function () {
    for (let index = 0; index < 4; index++) {
        if (bullet.isTouching(pguy_4)) {
            bullet.delete()
            pguy_4.delete()
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P13,
            EventBusValue.MICROBIT_EVT_ANY
            )
        } else {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_EVT_ANY, function () {
    for (let index = 0; index < 4; index++) {
        if (bullet.isTouching(pguy_1)) {
            bullet.delete()
            pguy_1.delete()
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P13,
            EventBusValue.MICROBIT_EVT_ANY
            )
        } else {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.delete()
})
let FALLING_MEN = 0
let pguy_1: game.LedSprite = null
let pguy_4: game.LedSprite = null
let pguy_3: game.LedSprite = null
let pguy_2: game.LedSprite = null
let pguy_5: game.LedSprite = null
let bullet: game.LedSprite = null
let score = 0
let final_score = 0
let cannon: game.LedSprite = null
let game_done = 0
let TIME = 2750
cannon = game.createSprite(2, 5)
final_score = 0
score = 0
basic.forever(function () {
    if (FALLING_MEN == 2) {
        pguy_2 = game.createSprite(1, 0)
        basic.pause(TIME)
        pguy_2.change(LedSpriteProperty.Y, 1)
        basic.pause(TIME)
        while (pguy_2.get(LedSpriteProperty.Y) != 4) {
            pguy_2.change(LedSpriteProperty.Y, 1)
            basic.pause(TIME)
        }
        pguy_2.delete()
    }
})
basic.forever(function () {
    if (FALLING_MEN == 1) {
        pguy_1 = game.createSprite(0, 0)
        basic.pause(TIME)
        pguy_1.change(LedSpriteProperty.Y, 1)
        basic.pause(TIME)
        while (pguy_1.get(LedSpriteProperty.Y) != 4) {
            pguy_1.change(LedSpriteProperty.Y, 1)
            basic.pause(TIME)
        }
        pguy_1.delete()
    }
})
basic.forever(function () {
    if (FALLING_MEN == 3) {
        pguy_3 = game.createSprite(2, 0)
        basic.pause(TIME)
        pguy_3.change(LedSpriteProperty.Y, 1)
        basic.pause(TIME)
        while (pguy_3.get(LedSpriteProperty.Y) != 4) {
            pguy_3.change(LedSpriteProperty.Y, 1)
            basic.pause(TIME)
        }
        pguy_3.delete()
    }
})
basic.forever(function () {
    basic.pause(100000)
    basic.showNumber(Math.round(final_score))
    basic.showString("GAMEOVER")
    control.reset()
})
basic.forever(function () {
    if (FALLING_MEN == 5) {
        pguy_5 = game.createSprite(4, 0)
        basic.pause(TIME)
        pguy_5.change(LedSpriteProperty.Y, 1)
        basic.pause(TIME)
        while (pguy_5.get(LedSpriteProperty.Y) != 4) {
            pguy_5.change(LedSpriteProperty.Y, 1)
            basic.pause(TIME)
        }
        pguy_5.delete()
    }
})
basic.forever(function () {
    if (FALLING_MEN == 4) {
        pguy_4 = game.createSprite(3, 0)
        basic.pause(TIME)
        pguy_4.change(LedSpriteProperty.Y, 1)
        basic.pause(TIME)
        while (pguy_4.get(LedSpriteProperty.Y) != 4) {
            pguy_4.change(LedSpriteProperty.Y, 1)
            basic.pause(TIME)
        }
        pguy_4.delete()
    }
})
loops.everyInterval(TIME, function () {
    FALLING_MEN = randint(1, 5)
})
loops.everyInterval(5000, function () {
    if (TIME > 1250) {
        TIME += -75
    } else {
        TIME = 750
    }
})
