import json
import os
import pandas as pd


kata = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ']

print(kata)

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

def main():
    na = 'setuAtoSu'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    data = [d.split('\t') for d in data if d]
    print(len(data),data)
    na = 'setuAtoSuHead'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    data = [d[-2:-1] for d in data if d]
    print(len(data), data)

def head(file):
    na = 'setuAtoSuHead'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    data = [d[-2:-1] for d in data if d]
    print(len(data), data)

if __name__ == '__main__':
    na = 'setuAtoSu'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    main()

    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)

























#
