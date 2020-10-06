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
    na = 'text/jyunkashin'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    data = get_textdata(file).split('\t')
    data = [d.split('\n')[:3] for d in data]
    data = [data[idx:idx + 10] for idx in range(0,len(data), 10)]
    dic = {}
    for teikei,d in zip(teikeimei,data):
        print("d",len(d),d)
        dic[teikei] = {i+1:{
            'kashin': d[i][0],
            'keikaku': d[i][1],
            'ten': d[i][2]
        } for i in range(10)}
    print(dic)

    na = 'python/json/jyunkashin'
    file = os.path.join(os.getcwd(),na)
    to_json(dic, file)



if __name__ == '__main__':
    na = 'python/text/jyunkashin.txt'
    file = os.path.join(os.getcwd(),f'python/{na}.txt')
    main()

    # na = 'setuAtoSuHead'
    # file = os.path.join(os.getcwd(),f'python/{na}.txt')
    # head(file)



    # name = os.path.join(os.getcwd(), f'python/json/{na}')
    # to_json(js, name)

























#
