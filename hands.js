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
    "44": "Play pocket Fours from CO, and possibly raise",
    "33": "Play pocket Threes from CO, and possibly raise",
    "22": "Play pocket Twos from CO, and possibly raise",

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
    "AA": "Play pocket Aces from position, and possibly raise",
    "KK": "Play pocket Kings from position, and possibly raise",
    "QQ": "Play pocket Queens from position, and possibly raise",
    "JJ": "Play pocket Jacks from position, and possibly raise",
    "TT": "Play pocket Tens from position, and possibly raise",
    "99": "Play pocket Nines from position, and possibly raise",
    "88": "Play pocket Eights from position, and possibly raise",
    "77": "Play pocket Sevens from position, and possibly raise",
    "66": "Play pocket Sixes from position, and possibly raise",
    "55": "Play pocket Fives from position, and possibly raise",
    "44": "Play pocket Fours from position, and possibly raise",
    "33": "Play pocket Threes from position, and possibly raise",
    "22": "Play pocket Twos from position, and possibly raise",

    "AK": "Play Ace-King offsuit from position, and possibly raise",
    "AQ": "Play Ace-Queen offsuit from position, and possibly raise",
    "AJ": "Play Ace-Jack offsuit from position, and possibly raise",
    "AT": "Play Ace-Ten offsuit from position, and possibly raise",

    "KQ": "Play King-Queen offsuit from position, and possibly raise",
    "KJ": "Play King-Jack offsuit from position, and possibly raise",
    "KT": "Play King-Ten offsuit from position, and possibly raise",
    "QJ": "Play Queen-Jack offsuit from position, and possibly raise",
    "QT": "Play Queen-Ten offsuit from position, and possibly raise",
    "JT": "Play Jack-Ten offsuit from position",

    "AKs": "Play Ace-King suited from position, and possibly raise",
    "AQs": "Play Ace-Queen suited from position, and possibly raise",
    "KQs": "Play King-Queen suited from position, and possibly raise",
    "AJs": "Play Ace-Jack suited from position, and possibly raise",
    "KJs": "Play King-Jack suited from position, and possibly raise",
    "QJs": "Play Queen-Jack suited from position, and possibly raise",
    "ATs": "Play Ace-Ten suited from position, and possibly raise",
    "KTs": "Play King-Ten suited from position, and possibly raise",
    "QTs": "Play Queen-Ten suited from position, and possibly raise",
    "JTs": "Play Jack-Ten suited from position, and possibly raise",

    "A9s": "Play Ace-Nine suited from position, and possibly raise",
    "K9s": "Play King-Nine suited from position",
    "Q9s": "Play Queen-Nine suited from position",
    "J9s": "Play Jack-Nine suited from position",
    "T9s": "Play Ten-Nine suited from position, and possibly raise",

    "A8s": "Play Ace-Eight suited from position, and possibly raise",
    "K8s": "Play King-Eight suited from position",
    "Q8s": "Play Queen-Eight suited from position",
    "J8s": "Play Jack-Eight suited from position",
    "T8s": "Play Ten-Eight suited from position",
    "98s": "Play Nine-Eight suited from position, and possibly raise",

    "A7s": "Play Ace-Seven suited from position, and possibly raise",
    "K7s": "Play King-Seven suited from position",
    "97s": "Play Nine-Seven suited from position",
    "87s": "Play Eight-Seven suited from position, and possibly raise",

    "A6s": "Play Ace-Six suited from position, and possibly raise",
    "86s": "Play Eight-Six suited from position",
    "76s": "Play Seven-Six suited from position, and possibly raise",

    "A5s": "Play Ace-Five suited from position, and possibly raise",
    "75s": "Play Seven-Five suited from position",
    "65s": "Play Six-Five suited from position, and possibly raise",

    "A4s": "Play Ace-Four suited from position, and possibly raise",
    "64s": "Play Six-Four suited from position",
    "54s": "Play Five-Four suited from position, and possibly raise",

    "A3s": "Play Ace-Three suited from position, and possibly raise",
    "53s": "Play Five-Three suited from position",
    "43s": "Play Four-Three suited from position",

    "A2s": "Play Ace-Two suited from position, and possibly raise",
}

