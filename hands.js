const cardValues = {
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "T",
    10: "J",
    11: "Q",
    12: "K",
    13: "A",
}

const BTNSB = {
    "AA": "Play pocket Aces from BTN or SB, and possibly raise",
    "KK": "Play pocket Kings from BTN or SB, and possibly raise",
    "QQ": "Play pocket Queens from BTN or SB, and possibly raise",
    "JJ": "Play pocket Jacks from BTN or SB, and possibly raise",
    "TT": "Play pocket Tens from BTN or SB, and possibly raise",
    "99": "Play pocket Nines from BTN or SB, and possibly raise",
    "88": "Play pocket Eights from BTN or SB, and possibly raise",
    "77": "Play pocket Sevens from BTN or SB, and possibly raise",
    "66": "Play pocket Sixes from BTN or SB, and possibly raise",
    "55": "Play pocket Fives from BTN or SB, and possibly raise",
    "44": "Play pocket Fours from BTN or SB, and possibly raise",
    "33": "Play pocket Threes from BTN or SB, and possibly raise",
    "22": "Play pocket Twos from BTN or SB, and possibly raise",
    "AK": "Play Ace-King offsuit from BTN or SB, and possibly raise",
    "AQ": "Play Ace-Queen offsuit from BTN or SB, and possibly raise",
    "AJ": "Play Ace-Jack offsuit from BTN or SB, and possibly raise",
    "AT": "Play Ace-Ten offsuit from BTN or SB, and possibly raise",
    "A9": "Play Ace-Nine offsuit from BTN or SB",
    "A8": "Play Ace-Eight offsuit from BTN or SB",
    "A7": "Play Ace-Seven offsuit from BTN or SB",
    "A6": "Play Ace-Six offsuit from BTN or SB",
    "A5": "Play Ace-Five offsuit from BTN or SB",
    "A4": "Play Ace-Four offsuit from BTN or SB",
    "A3": "Play Ace-Three offsuit from BTN or SB",
    "A2": "Play Ace-Two offsuit from BTN or SB",
    "KQ": "Play King-Queen offsuit from BTN or SB, and possibly raise",
    "KJ": "Play King-Jack offsuit from BTN or SB, and possibly raise",
    "KT": "Play King-Ten offsuit from BTN or SB, and possibly raise",
    "K9": "Play King-Nine offsuit from BTN or SB",
    "QJ": "Play Queen-Jack offsuit from BTN or SB, and possibly raise",
    "QT": "Play Queen-Ten offsuit from BTN or SB, and possibly raise",
    "Q9": "Play Queen-Nine offsuit from BTN or SB",
    "JT": "Play Jack-Ten offsuit from BTN or SB",
    "J9": "Play Jack-Nine offsuit from BTN or SB",
    "T9": "Play Ten-Nine offsuit from BTN or SB",
    "AKs": "Play Ace-King suited from BTN or SB, and possibly raise",
    "AQs": "Play Ace-Queen suited from BTN or SB, and possibly raise",
    "KQs": "Play King-Queen suited from BTN or SB, and possibly raise",
    "AJs": "Play Ace-Jack suited from BTN or SB, and possibly raise",
    "KJs": "Play King-Jack suited from BTN or SB, and possibly raise",
    "QJs": "Play Queen-Jack suited from BTN or SB, and possibly raise",
    "ATs": "Play Ace-Ten suited from BTN or SB, and possibly raise",
    "KTs": "Play King-Ten suited from BTN or SB, and possibly raise",
    "QTs": "Play Queen-Ten suited from BTN or SB, and possibly raise",
    "JTs": "Play Jack-Ten suited from BTN or SB, and possibly raise",
    "A9s": "Play Ace-Nine suited from BTN or SB, and possibly raise",
    "K9s": "Play King-Nine suited from BTN or SB",
    "Q9s": "Play Queen-Nine suited from BTN or SB",
    "J9s": "Play Jack-Nine suited from BTN or SB",
    "T9s": "Play Ten-Nine suited from BTN or SB, and possibly raise",
    "A8s": "Play Ace-Eight suited from BTN or SB, and possibly raise",
    "K8s": "Play King-Eight suited from BTN or SB",
    "Q8s": "Play Queen-Eight suited from BTN or SB",
    "J8s": "Play Jack-Eight suited from BTN or SB",
    "T8s": "Play Ten-Eight suited from BTN or SB",
    "98s": "Play Nine-Eight suited from BTN or SB, and possibly raise",
    "A7s": "Play Ace-Seven suited from BTN or SB, and possibly raise",
    "K7s": "Play King-Seven suited from BTN or SB",
    "Q7s": "Play Queen-Seven suited from BTN or SB",
    "J7s": "Play Jack-Seven suited from BTN or SB",
    "T7s": "Play Ten-Seven suited from BTN or SB",
    "97s": "Play Nine-Seven suited from BTN or SB",
    "87s": "Play Eight-Seven suited from BTN or SB, and possibly raise",
    "A6s": "Play Ace-Six suited from BTN or SB, and possibly raise",
    "K6s": "Play King-Six suited from BTN or SB",
    "Q6s": "Play Queen-Six suited from BTN or SB",
    "T6s": "Play Ten-Six suited from BTN or SB",
    "96s": "Play Nine-Six suited from BTN or SB",
    "86s": "Play Eight-Six suited from BTN or SB",
    "76s": "Play Seven-Six suited from BTN or SB, and possibly raise",
    "A5s": "Play Ace-Five suited from BTN or SB, and possibly raise",
    "K5s": "Play King-Five suited from BTN or SB",
    "Q5s": "Play Queen-Five suited from BTN or SB",
    "85s": "Play Eight-Five suited from BTN or SB",
    "75s": "Play Seven-Five suited from BTN or SB",
    "65s": "Play Six-Five suited from BTN or SB, and possibly raise",
    "A4s": "Play Ace-Four suited from BTN or SB, and possibly raise",
    "K4s": "Play King-Four suited from BTN or SB",
    "Q4s": "Play Queen-Four suited from BTN or SB",
    "74s": "Play Seven-Four suited from BTN or SB",
    "64s": "Play Six-Four suited from BTN or SB",
    "54s": "Play Five-Four suited from BTN or SB, and possibly raise",
    "A3s": "Play Ace-Three suited from BTN or SB, and possibly raise",
    "K3s": "Play King-Three suited from BTN or SB",
    "Q3s": "Play Queen-Three suited from BTN or SB",
    "63s": "Play Six-Three suited from BTN or SB",
    "53s": "Play Five-Three suited from BTN or SB",
    "43s": "Play Four-Three suited from BTN or SB",
    "A2s": "Play Ace-Two suited from BTN or SB, and possibly raise",
    "K2s": "Play King-Two suited from BTN or SB",
    "Q2s": "Play Queen-Two suited from BTN or SB",
    "52s": "Play Five-Two suited from BTN or SB",
    "42s": "Play Four-Two suited from BTN or SB",
    "32s": "Play Three-Two suited from BTN or SB, and possibly raise"
}

const CO = {
    "AA": "Play pocket Aces from CO, and possibly raise",
    "KK": "Play pocket Kings from CO, and possibly raise",
    "QQ": "Play pocket Queens from CO, and possibly raise",
    "JJ": "Play pocket Jacks from CO, and possibly raise",
    "TT": "Play pocket Tens from CO, and possibly raise",
    "99": "Play pocket Nines from CO, and possibly raise",
    "88": "Play pocket Eights from CO, and possibly raise",
    "77": "Play pocket Sevens from CO, and possibly raise",
    "66": "Play pocket Sixes from CO, and possibly raise",
    "55": "Play pocket Fives from CO, and possibly raise",
    "44": "Play pocket Fours from CO",
    "33": "Play pocket Threes from CO",
    "22": "Play pocket Twos from CO",
    "AK": "Play Ace-King offsuit from CO, and possibly raise",
    "AQ": "Play Ace-Queen offsuit from CO, and possibly raise",
    "AJ": "Play Ace-Jack offsuit from CO, and possibly raise",
    "AT": "Play Ace-Ten offsuit from CO, and possibly raise",
    "KQ": "Play King-Queen offsuit from CO, and possibly raise",
    "KJ": "Play King-Jack offsuit from CO, and possibly raise",
    "KT": "Play King-Ten offsuit from CO, and possibly raise",
    "QJ": "Play Queen-Jack offsuit from CO, and possibly raise",
    "QT": "Play Queen-Ten offsuit from CO, and possibly raise",
    "JT": "Play Jack-Ten offsuit from CO",
    "AKs": "Play Ace-King suited from CO, and possibly raise",
    "AQs": "Play Ace-Queen suited from CO, and possibly raise",
    "KQs": "Play King-Queen suited from CO, and possibly raise",
    "AJs": "Play Ace-Jack suited from CO, and possibly raise",
    "KJs": "Play King-Jack suited from CO, and possibly raise",
    "QJs": "Play Queen-Jack suited from CO, and possibly raise",
    "ATs": "Play Ace-Ten suited from CO, and possibly raise",
    "KTs": "Play King-Ten suited from CO, and possibly raise",
    "QTs": "Play Queen-Ten suited from CO, and possibly raise",
    "JTs": "Play Jack-Ten suited from CO, and possibly raise",
    "A9s": "Play Ace-Nine suited from CO, and possibly raise",
    "K9s": "Play King-Nine suited from CO",
    "Q9s": "Play Queen-Nine suited from CO",
    "J9s": "Play Jack-Nine suited from CO",
    "T9s": "Play Ten-Nine suited from CO, and possibly raise",
    "A8s": "Play Ace-Eight suited from CO, and possibly raise",
    "K8s": "Play King-Eight suited from CO",
    "Q8s": "Play Queen-Eight suited from CO",
    "J8s": "Play Jack-Eight suited from CO",
    "T8s": "Play Ten-Eight suited from CO",
    "98s": "Play Nine-Eight suited from CO, and possibly raise",
    "A7s": "Play Ace-Seven suited from CO, and possibly raise",
    "K7s": "Play King-Seven suited from CO",
    "97s": "Play Nine-Seven suited from CO",
    "87s": "Play Eight-Seven suited from CO, and possibly raise",
    "A6s": "Play Ace-Six suited from CO, and possibly raise",
    "86s": "Play Eight-Six suited from CO",
    "76s": "Play Seven-Six suited from CO, and possibly raise",
    "A5s": "Play Ace-Five suited from CO, and possibly raise",
    "75s": "Play Seven-Five suited from CO",
    "65s": "Play Six-Five suited from CO, and possibly raise",
    "A4s": "Play Ace-Four suited from CO, and possibly raise",
    "64s": "Play Six-Four suited from CO",
    "54s": "Play Five-Four suited from CO, and possibly raise",
    "A3s": "Play Ace-Three suited from CO, and possibly raise",
    "53s": "Play Five-Three suited from CO",
    "43s": "Play Four-Three suited from CO",
    "A2s": "Play Ace-Two suited from CO, and possibly raise",
}

const LJHJ = {
    "AA": "Play pocket Aces from LJ or HJ, and possibly raise",
    "KK": "Play pocket Kings from LJ or HJ, and possibly raise",
    "QQ": "Play pocket Queens from LJ or HJ, and possibly raise",
    "JJ": "Play pocket Jacks from LJ or HJ, and possibly raise",
    "TT": "Play pocket Tens from LJ or HJ, and possibly raise",
    "99": "Play pocket Nines from LJ or HJ, and possibly raise",
    "88": "Play pocket Eights from LJ or HJ, and possibly raise",
    "77": "Play pocket Sevens from LJ or HJ, and possibly raise",
    "66": "Play pocket Sixes from LJ or HJ",
    "55": "Play pocket Fives from LJ or HJ",
    "44": "Play pocket Fours from LJ or HJ",
    "AK": "Play Ace-King offsuit from LJ or HJ, and possibly raise",
    "AQ": "Play Ace-Queen offsuit from LJ or HJ, and possibly raise",
    "AJ": "Play Ace-Jack offsuit from LJ or HJ",
    "KQ": "Play King-Queen offsuit from LJ or HJ, and possibly raise",
    "AKs": "Play Ace-King suited from LJ or HJ, and possibly raise",
    "AQs": "Play Ace-Queen suited from LJ or HJ, and possibly raise",
    "KQs": "Play King-Queen suited from LJ or HJ, and possibly raise",
    "AJs": "Play Ace-Jack suited from LJ or HJ",
    "KJs": "Play King-Jack suited from LJ or HJ, and possibly raise",
    "QJs": "Play Queen-Jack suited from LJ or HJ, and possibly raise",
    "ATs": "Play Ace-Ten suited from LJ or HJ",
    "KTs": "Play King-Ten suited from LJ or HJ",
    "QTs": "Play Queen-Ten suited from LJ or HJ, and possibly raise",
    "JTs": "Play Jack-Ten suited from LJ or HJ, and possibly raise",
    "T9s": "Play Ten-Nine suited from LJ or HJ, and possibly raise",
    "98s": "Play Nine-Eight suited from LJ or HJ, and possibly raise",
    "87s": "Play Eight-Seven suited from LJ or HJ, and possibly raise",
    "76s": "Play Seven-Six suited from LJ or HJ, and possibly raise",
    "A5s": "Play Ace-Five suited from LJ or HJ",
    "A4s": "Play Ace-Four suited from LJ or HJ",
    "A3s": "Play Ace-Three suited from LJ or HJ",
    "A2s": "Play Ace-Two suited from LJ or HJ, and possibly raise",
}

const UTG = {
    AA: "Play pocket Aces from UTG, and possibly raise",
    KK: "Play pocket Kings from UTG, and possibly raise",
    QQ: "Play pocket Queens from UTG, and possibly raise",
    JJ: "Play pocket Jacks from UTG, and possibly raise",
    TT: "Play pocket Tens from UTG, and possibly raise",
    99: "Play pocket Nines from UTG",
    88: "Play pocket Eights from UTG",
    77: "Play pocket Sevens from UTG",
    66: "Play pocket Sixes from UTG",
    55: "Play pocket Fives from UTG",
    AK: "Play Ace-King offsuit from UTG",
    AQ: "Play Ace-Queen offsuit from UTG",
    AKs: "Play Ace-King suited from UTG, and possibly raise",
    AQs: "Play Ace-Queen suited from UTG",
    KQs: "Play King-Queen suited from UTG, and possibly raise",
    AJs: "Play Ace-Jack suited from UTG",
    KJs: "Play King-Jack suited from UTG",
    QJs: "Play Queen-Jack suited from UTG, and possibly raise",
    ATs: "Play Ace-Ten suited from UTG",
    KTs: "Play King-Ten suited from UTG",
    QTs: "Play Queen-Ten suited from UTG",
    JTs: "Play Jack-Ten suited from UTG, and possibly raise",
}

const Two = {
    "22": "49.3%",
    "33": "52.9%",
    "44": "56.3%",
    "55": "59.6%",
    "66": "62.7%",
    "77": "65.7%",
    "88": "68.7%",
    "99": "71.7%",
    "TT": "74.7%",
    "JJ": "77.1%",
    "QQ": "79.6%",
    "KK": "82.1%",
    "AA": "84.9%",
}

const Three = {
    "22": "30.2%",
    "33": "33.2%",
    "44": "36.4%",
    "55": "39.6%",
    "66": "42.8%",
    "77": "46.1%",
    "88": "49.6%",
    "99": "53.3%",
    "TT": "57.2%",
    "JJ": "60.9%",
    "QQ": "64.7%",
    "KK": "68.6%",
    "AA": "73.2%",
}

const Four = {
    "22": "21.7%",
    "33": "23.7%",
    "44": "26.0%",
    "55": "28.6%",
    "66": "31.2%",
    "77": "34.1%",
    "88": "37.3%",
    "99": "40.8%",
    "TT": "44.9%",
    "JJ": "48.9%",
    "QQ": "53.2%",
    "KK": "58.0%",
    "AA": "63.6%",
}

const Five = {
    "22": "17.6%",
    "33": "18.8%",
    "44": "20.3%",
    "55": "22.1%",
    "66": "24.2%",
    "77": "26.4%",
    "88": "29.1%",
    "99": "32.3%",
    "TT": "36.0%",
    "JJ": "40.0%",
    "QQ": "44.4%",
    "KK": "49.5%",
    "AA": "55.6%",
}

const Six = {
    "22": "15.4%",
    "33": "16.1%",
    "44": "17.0%",
    "55": "18.2%",
    "66": "19.8%",
    "77": "21.5%",
    "88": "23.7%",
    "99": "26.3%",
    "TT": "29.5%",
    "JJ": "33.2%",
    "QQ": "37.6%",
    "KK": "42.7%",
    "AA": "49.0%",
}

const Seven = {
    "22": "14.0%",
    "33": "14.4%",
    "44": "15.0%",
    "55": "15.7%",
    "66": "16.9%",
    "77": "18.2%",
    "88": "20.0%",
    "99": "22.1%",
    "TT": "24.8%",
    "JJ": "28.1%",
    "QQ": "32.2%",
    "KK": "37.2%",
    "AA": "43.3%",
}

const Eight = {
    "22": "13.1%",
    "33": "13.3%",
    "44": "13.6%",
    "55": "14.1%",
    "66": "15.0%",
    "77": "16.0%",
    "88": "17.4%",
    "99": "19.1%",
    "TT": "21.3%",
    "JJ": "24.2%",
    "QQ": "28.0%",
    "KK": "32.7%",
    "AA": "38.5%",
}

const Nine = {
    "22": "12.4%",
    "33": "12.5%",
    "44": "12.6%",
    "55": "12.9%",
    "66": "13.6%",
    "77": "14.4%",
    "88": "15.5%",
    "99": "16.8%",
    "TT": "18.7%",
    "JJ": "21.3%",
    "QQ": "24.6%",
    "KK": "28.9%",
    "AA": "34.4%",
}

module.exports ={ cardValues, BTNSB, CO, LJHJ, UTG, Two, Three, Four, Five, Six, Seven, Eight, Nine }