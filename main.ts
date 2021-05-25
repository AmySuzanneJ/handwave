input.onButtonPressed(Button.A, function () {
    slow = 1
    fast = 0
    while (slow) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    slow = 0
    fast = 0
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    slow = 0
    fast = 1
    while (fast) {
        pins.servoWritePin(AnalogPin.P0, 30)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 120)
        basic.pause(500)
    }
})
let fast = 0
let slow = 0
slow = 0
fast = 0
