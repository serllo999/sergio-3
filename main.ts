input.onButtonPressed(Button.A, function () {
    basic.showString("T= " + (input.temperature() * 1.8 + 32) + " F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("T= " + input.temperature() * 274.15 + " k")
})
basic.showString("T= " + input.temperature() + " C")
