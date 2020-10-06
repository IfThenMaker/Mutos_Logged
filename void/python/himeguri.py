import json
import os
import pandas as pd



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
    na = 'himeguri'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file)
    data = [d.split('\t') for d in data.split('\n')]
    dic = {y: {} for y in range(2032, 2042)}
    # dic = {}
    for m, d in zip(range(1,13), data):
        for y, num in zip(range(2032,2042),d):
            dic[y][m] = int(num)
            print(y, num)
        print(m ,d)
    print(len(data), data)
    print(dic)
    to_json(dic, '2032')


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
