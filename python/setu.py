import json
import os
import pandas as pd


kata = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ']
head = ['4', '4', '4', '4', '4', '4', '5', '5', '5', '4', '4', '5', '5']
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

def main(body_text, head_text, index):
    na = body_text
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    bdata = [d.split('\t') for d in data if d]
    print(len(bdata),bdata)
    # index = [i for i in range(1,13)]
    print(index)
    df = pd.DataFrame({key: val for key, val in
        zip([i for i in range(1,13)], bdata)},
        index = index)
    dic = df.T.to_dict()
    print(dic)

    na = head_text
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    hdata = [d[-2:-1] for d in data if d]
    print(len(hdata), hdata)
    return {key:{
        'startDate': startDate,
        'tuki': {k: dic[key][k][-1:] for k in dic[key]}
    } for key,startDate in zip(dic, hdata)}
    # setu =
    # arr = {mark:{
    #     'startDate': hdata[i],
    #     'tuki': bdata[i]
    # } for i, mark in enumerate(zip(kataArr))}
    # print(arr)



def head(file):
    na = 'text/setuSetoHaHead'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\n')
    data = [d[-2:-1] for d in data if d]
    print(len(data), data)

if __name__ == '__main__':
    # head('f')
    body = 'text/setuAtoSu'
    head = 'text/setuAtoSuHead'
    # headArr = ['4', '4', '4', '4', '4', '4', '5', '5', '5', '4', '4', '5', '5']
    index = kata[:13]
    body = 'text/setuSetoHa'
    head = 'text/setuSetoHaHead'
    # headArr = ['4', '4', '4', '4', '4', '4', '5', '5', '5', '4', '4', '5', '5']
    index = kata[13:27]
    body = 'text/setuHitoMi'
    head = 'text/setuHitoMiHead'
    # headArr = ['4', '4', '4', '4', '4', '4', '5', '5', '5', '4', '4', '5', '5']
    index = ['ヒ','フ','へ','ホ','マ','ミ']
    print('ind', len(index),index)
    js = main(body, head, index)
    to_json(js, f'python/json/{body[5:]}')





    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)

























#
