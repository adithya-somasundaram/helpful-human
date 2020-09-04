import json

res = []
colors = []

root = 123366       # root color
offset = 2235

# create/store color values
for i in range(100):
    colors.append('#' + str(hex(root))[2:] + "0")
    root += offset

page = 1            # first page
page_size = 12      # elements per page
temp = []           # stores elements on current page

# keep count of inputted colors
index = 0

# add all colors
while index < len(colors):
    temp.append(colors[index])

    # if we have reached the size of a page, append to res and reset
    if len(temp) >= page_size:
        res.append({
            'id' : str(page),
            'colors' : temp
        })
        page += 1
        temp = []
    index += 1

# add remaining elements
if temp:
    res.append({
        'id' : str(page),
        'colors' : temp
    })

# store result as json
r = json.dumps({'data':res})

# write to db.json
with open("src/db.json", "w") as f:
    f.write(r)