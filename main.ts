radio.onReceivedNumber(function (receivedNumber) {
    tool = randint(0, 3)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    tool = randint(0, 2)
    if (tool == 1) {
        basic.showIcon(IconNames.Scissors)
    }
})
radio.onReceivedValue(function (name, value) {
    tool = randint(0, 3)
    if (tool == 2) {
        basic.showIcon(IconNames.Square)
    }
})
let tool = 0
radio.setGroup(74)
