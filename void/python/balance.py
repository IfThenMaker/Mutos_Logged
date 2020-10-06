import json
import os
import pandas as pd


dic = {
    "豪風命": {
        'kyoujyaku': 3,
        'inyo': 2,
        'danjyo': -1,
    },
    "微風命": {
        'kyoujyaku': -3,
        'inyo': 0,
        'danjyo': -4,
    },
    "陽照命": {
        'kyoujyaku': 4,
        'inyo': 5,
        'danjyo': 2,
    },
    "灯篭命": {
        'kyoujyaku': -2,
        'inyo': 1,
        'danjyo': -3,
    },
    "厳山命": {
        'kyoujyaku': 2,
        'inyo': -3,
        'danjyo': 4,
    },
    "砂丘命": {
        'kyoujyaku': -1,
        'inyo': -4,
        'danjyo': 0,
    },
    "轟音命": {
        'kyoujyaku': 5,
        'inyo': 4,
        'danjyo': 5,
    },
    "閃光命": {
        'kyoujyaku': 0,
        'inyo': 3,
        'danjyo': 3,
    },
    "海水命": {
        'kyoujyaku': 1,
        'inyo': -1,
        'danjyo': 1,
    },
    "湖水命": {
        'kyoujyaku': -4,
        'inyo': -2,
        'danjyo': -2,
    },
}

""" sclaped text to json """

def get_textdata(file):
    path = os.path.join(os.getcwd(), file)
    with open(file,'r', encoding='utf-8') as f:
        dt = f.read()
    return dt

def get_jsondata(file):
    path = os.path.join(os.getcwd(), file)
    with open(path,'r', encoding='utf-8') as f:
        dt = json.load(f)
    return dt

def to_json(dict_file, name):
    name = f'{name}.json'
    with open(name, 'w', encoding='utf-8') as f:
        json.dump(dict_file, f, indent=2, ensure_ascii=False)

# def main():




if __name__ == '__main__':
    na = 'setuAtoSu'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # main()

    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)
    import keyword

    print(keyword.iskeyword('str'))






















#
