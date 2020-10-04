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
    data = get_textdata('python/text/unsei.txt')
    print(data)
    data = [d.split('\t') for d in data.split('\n')]
    print(data)
    df = pd.DataFrame(data[1:-1], columns=data[0])
    df = df.set_index('干支↓')
    print(df)
    dic = df.to_dict()
    print(dic)
    to_json(dic, 'python/json/unsei')
    # print(len(data), data)
    # header = data[0].split('\t')
    # print(len(header), header)
    # for d in data:

    # df = pd.DataFrame(data)
    # print(df)


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
