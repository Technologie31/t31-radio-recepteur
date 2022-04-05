radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("A")
    }
    if (receivedNumber == 1) {
        basic.showString("B")
    }
})
basic.showString("R")
radio.setGroup(200)
