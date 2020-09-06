import sqlite3

# connect/create db color
connection = sqlite3.connect('src/colors.db')
cur = connection.cursor()

# reset colors table
cur.execute('DROP TABLE IF EXISTS colors')
cur.execute('CREATE TABLE IF NOT EXISTS colors(name TEXT)')

root = 123366       # root color
offset = 2235

# create/store color values
for i in range(100):
    val = ('#' + str(hex(root))[2:] + "0")
    cur.execute('INSERT INTO colors VALUES(?)', (val,))
    connection.commit()
    root += offset

# close db connection
cur.close()
connection.close()