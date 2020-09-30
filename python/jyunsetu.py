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

def main(name):
    # na = 'himeguri'
    file = os.path.join(os.getcwd(),f'python/text/{name}.txt')
    data = get_textdata(file).split('\n')
    data = {i + 1: d.split('\t') for i,d in enumerate(data) if d}
    print(len(data), data)
    df = pd.DataFrame(data, index = [i for i in range(1,13)])
    print(df)
    dic = df.T.to_dict()
    print(dic)
    to_json(dic, f'python/json/{name}')



if __name__ == '__main__':
    na = 'jyunsetuyou'
    na = 'jyunsetuin'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    main(na)

    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)

























#
