/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program turns a servo motor in 2 different angles
*/

const servoNumber1 = robotbit.Servos.S1

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
