let tool = 0
radio.onReceivedNumber(function (receivedNumber) {
    tool = randint(0, 3)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.setGroup(74)
    radio.sendString("gh")
    radio.sendValue("name", 8)
    radio.sendNumber(222)
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
