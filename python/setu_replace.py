import json
import os

teikeimei = ['豪風命', '微風命', '陽照命', '灯篭命', '厳山命', '砂丘命', '轟音命', '閃光命', '海水命', '湖水命']


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
    datas = get_jsondata('python/json/setu_index.json')
    indexes = get_jsondata('python/json/index.json')
    # indexes = {v[1]: v[0] for v in indexes.items()}
    # print(datas['ヘ'])
    print(datas)
    print(indexes)
    return {year: datas[indexes[year]] for year in indexes}




if __name__ == '__main__':
    na = 'python/text/jyunkashin.txt'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    js = main()

    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    to_json(js, 'python/json/setu')

























#
