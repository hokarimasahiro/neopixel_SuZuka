input.onButtonPressed(Button.A, function () {
    文字選択 += 1
    if (文字選択 >= 文字リスト.length) {
        文字選択 = 0
    }
    表示文字選択(文字選択)
    表示位置 = 0
    strip.showColor(背景色)
    strip2.showColor(背景色)
})
function 文字色変更 () {
    文字色番号 += 1
    if (文字色番号 > 文字色リスト.length) {
        文字色番号 = 0
    }
    if (文字色番号 < 文字色リスト.length) {
        文字色 = 文字色リスト[文字色番号]
        背景色 = 背景色リスト[文字色番号]
    }
}
input.onButtonPressed(Button.AB, function () {
    背景番号 += 1
    if (背景番号 >= 4) {
        背景番号 = 0
    }
    if (背景番号 == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        表示位置 = 0
        文字表示()
    } else if (背景番号 == 1) {
        strip.showRainbow(1, 360)
    } else if (背景番号 == 2) {
        for (let カウンター2 = 0; カウンター2 <= strip.length(); カウンター2++) {
            strip.setPixelColor(カウンター2, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        }
    } else {
        for (let カウンター3 = 0; カウンター3 <= strip.length(); カウンター3++) {
            R = randint(0, 3) * 63
            strip.setPixelColor(カウンター3, neopixel.rgb(R, R, R))
        }
    }
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    文字色変更()
})
function 文字表示 () {
    strip2.shift(-8)
    文字表示サブ()
    if (表示位置 % 4 == 0) {
        strip.show()
    } else {
        strip2.show()
    }
    strip.shift(-8)
    表示位置 += 2
    if (表示位置 >= 文字.length) {
        表示位置 = 0
        文字色変更()
    }
}
function 表示文字選択 (文字番号: number) {
    文字 = 文字リスト[文字番号]
    for (let index = 0; index < 行末空白; index++) {
        文字 = "" + 文字 + "00"
    }
    if (文字.length % 4 != 0) {
        文字 = "" + 文字 + "00"
    }
}
function 文字表示サブ () {
    LINE = bit.hexToNumber(文字.substr(表示位置, 2))
    for (let Y = 0; Y <= 7; Y++) {
        if (表示位置 % 4 == 0) {
            POS2 = Y + 248
            POS = 255 - Y
        } else {
            POS = Y + 248
            POS2 = 255 - Y
        }
        if (文字色番号 >= 文字色リスト.length) {
            文字色 = neopixel.rgb(randint(5, 255), randint(5, 255), randint(5, 255))
        }
        if (bit.bitTest(LINE, 7 - Y)) {
            strip.setPixelColor(POS, 文字色)
            strip2.setPixelColor(POS2, 文字色)
        } else {
            strip.setPixelColor(POS, 背景色)
            strip2.setPixelColor(POS2, 背景色)
        }
    }
}
let POS = 0
let POS2 = 0
let 文字 = ""
let R = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let 背景色 = 0
let 背景番号 = 0
let 文字色 = 0
let 文字色番号 = 0
let 表示位置 = 0
let 文字選択 = 0
let 行末空白 = 0
let 背景色リスト: number[] = []
let 文字色リスト: number[] = []
let 文字リスト: string[] = []
let LINE = 0
LINE = 0
let 吉田涼香 = "405656F656564000FE9292FE9292FE00AE004472DE704400286E767EB6AE2800"
let よしだすずか = "040A0AFC242200FC0202020400425CE044AA22A2004040506AFC4040004040506AFC40C000222CF2221C201800"
let ヨシダスズカ = "42525252527E00A25202040830001022D25448F000024244445864020002424444D86482004244F840427E00"
let SuZuka_YosHida = "64929292924C003C0202043E0082868A92A2C2003C0202043E00FE08142200042A2A2A1E0000008040201E204080001C2222221C00122A2A2A2400FE10101010FE00BE001C222212FE00042A2A2A1E00"
let welcome_SuZuka = "F80618601806F8001C2A2A2A180080FE001C22222214001C2222221C003E201E201E001C2A2A2A1800000064929292924C003C0202043E0082868A92A2C2003C0202043E00FE08142200042A2A2A1E00"
文字リスト = [welcome_SuZuka, SuZuka_YosHida, よしだすずか, ヨシダスズカ, 吉田涼香]
let デモ文字 = "WelCome SuZuka"
文字色リスト = [neopixel.colors(NeoPixelColors.White), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue)]
背景色リスト = [neopixel.colors(NeoPixelColors.Black), neopixel.colors(NeoPixelColors.Black), neopixel.colors(NeoPixelColors.Black), neopixel.colors(NeoPixelColors.Black)]
行末空白 = 8
文字選択 = 0
表示文字選択(文字選択)
表示位置 = 0
文字色番号 = 0
文字色 = 文字色リスト[文字色番号]
背景番号 = 0
背景色 = 背景色リスト[文字色番号]
let 最大輝度 = 10
let 輝度 = 最大輝度
strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip.setBrightness(輝度)
strip2.setBrightness(輝度)
strip.showColor(背景色)
strip2.showColor(背景色)
文字表示()
basic.forever(function () {
    if (input.lightLevel() >= 最大輝度) {
        輝度 = 最大輝度
    } else {
        輝度 = input.lightLevel()
    }
    if (背景番号 == 0) {
        文字表示()
    } else {
        strip.rotate(-8)
        strip.show()
    }
    basic.pause(70)
})
control.inBackground(function () {
    while (true) {
        basic.showString("" + (デモ文字))
    }
})
