radio.onReceivedString(function (receivedString) {
    list += 1
})
let _10 = 0
radio.sendString("ON")
let list = 0
let R = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
basic.forever(function () {
    _10 = 0
    list = 0
    while (0 == _10) {
        if (R[list] == 1) {
            _10 = 1
            if (list == 0) {
                led.plot(0, 0)
            }
            if (list == 1) {
                led.plot(1, 0)
            }
            if (list == 2) {
                led.plot(2, 0)
            }
            if (list == 3) {
                led.plot(3, 0)
            }
            if (list == 4) {
                led.plot(4, 0)
            }
            if (list == 5) {
                led.plot(0, 1)
            }
            if (list == 6) {
                led.plot(1, 1)
            }
            if (list == 7) {
                led.plot(2, 1)
            }
            if (list == 8) {
                led.plot(3, 1)
            }
            if (list == 9) {
                led.plot(4, 1)
            }
            if (list == 10) {
                led.plot(0, 2)
            }
            if (list == 11) {
                led.plot(1, 2)
            }
            if (list == 12) {
                led.plot(2, 2)
            }
            if (list == 13) {
                led.plot(3, 2)
            }
            if (list == 14) {
                led.plot(4, 2)
            }
            if (list == 15) {
                led.plot(0, 3)
            }
            if (list == 16) {
                led.plot(1, 3)
            }
            if (list == 17) {
                led.plot(2, 3)
            }
            if (list == 18) {
                led.plot(3, 3)
            }
            if (list == 19) {
                led.plot(4, 3)
            }
            if (list == 20) {
                led.plot(0, 4)
            }
            if (list == 21) {
                led.plot(1, 4)
            }
            if (list == 22) {
                led.plot(2, 4)
            }
            if (list == 23) {
                led.plot(3, 4)
            }
            if (list == 24) {
                led.plot(4, 4)
            }
        } else {
            list += 1
        }
    }
})
