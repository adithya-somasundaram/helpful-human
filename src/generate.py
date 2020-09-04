import json

res = []

colors = ["#c14441", "#c1bf41", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441", "#c14441"]
page = 1
page_size = 12
temp = []

index = 0

while index < len(colors):
    temp.append(colors[index])
    if len(temp) >= page_size:
        res.append({
            'id' : str(page),
            'colors' : temp
        })
        page += 1
        temp = []
    index += 1

res.append({
    'id' : str(page),
    'colors' : temp
})
r = json.dumps({'data':res})

with open("src/db.json", "w") as f:
    f.write(r)