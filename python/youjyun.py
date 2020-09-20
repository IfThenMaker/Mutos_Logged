import json
import os
import pandas as pd


teikei = [
"豪風命","微風命","陽照命","灯篭命",
"厳山命","砂丘命","轟音命","閃光命","海水命","湖水命"
]

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

def main(file):
    data = get_textdata(file).split('\n')
    # print(len(txt),txt)
    odd = lambda x: range(0,len(x),2)
    even = lambda x: range(1,len(x),2)
    res = {data[i]: data[v] for i,v in zip(odd(data),even(data))}
    res = {k: {
        'kashin': v[:v.index('/')],
        'megurikashin': v[v.index('/')+1:],
        'saikuru': res[v].replace('(','').replace(')','')}
    for k,v in zip(teikei, res)}
    print(len(res), res)
    # res = teikei
    return res
    # txtdic = {k: v in z}
def combine():
    import glob
    files = glob.glob('python/json/*.json')
    print(len(files), files)
    dic = {}
    for f in files:
        data = get_jsondata(f)
        n = os.path.basename(f)[1:].replace('.json','')
        print(n)
        dic[n] = data
    ndic = {k:{} for k in teikei}
    for n in dic:
        for key in dic[n]:
            ndic[key][n] = dic[n][key]
    print('ddsg', ndic)
    name = os.path.join(os.getcwd(), 'python/json/megurikashin')
    to_json(ndic, name)

if __name__ == '__main__':
    na = 'y10'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # js = main(file)
    combine()
    # print(js)
    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)

























#
