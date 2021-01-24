'''
import requests

url = 'https://storage.bunnycdn.com/sample-photos/'

x = requests.get(url, headers = {"AccessKey": "c6304a11-e269-477b-845e0c0b75f2-62ce-4a1c"})

print(x.text)
'''





import os





# CHANGE THIS TO DIRECTLY UPLOAD
# THIS VALUE CAN EITHER BE 
# False
# or
# True

directlyUpload = False








convertCover = False
convertSnap = False
convertWork = False

os.chdir('public/images/dynamic')


def convert (path):
    cmd = 'ffmpeg -i "'+path+'" -q:v 31 -y "'+path+'"'
    os.system(cmd)

def parse (name):
    if name[0] == "#":
        newStr = ""
        i=3
        while i<len(name):
            newStr += name[i]
            i+=1
        return newStr

    return name

def getLink (name):
    name = name.replace(" ", "%20")
    name = name.replace("#", "%23")
    return name


# WORK section ===============================

work = []

for category in os.listdir("work/"):

    if os.listdir("work/"+category)[0] == "videos.txt":
        links = []
        with open('work/'+category+"/videos.txt") as f:
            for line in f:
                links.append(line.replace("\n", ""))

        work.append({'category': parse(category), 'videos': True, 'links': links})

    else:
        albums = []
        for album in os.listdir("work/"+category):

            files = os.listdir("work/"+category+"/"+album)
            paths = []

            for file in files:
                if convertWork: convert('./work/'+category+"/"+album+"/"+file)
                paths.append("./images/dynamic/work/"+getLink(category)+"/"+getLink(album)+"/"+getLink(file))
            
            albums.append({'album': album, 'files': paths})

        work.append({'category': parse(category), 'albums': parse(albums)})



# COVER section ================

cover = []

def converterCover (path):
    cmd = 'ffmpeg -i "'+path+'" -q:v 30 -y "'+path+'"'
    os.system(cmd)

for file in os.listdir("cover/"):
    if convertCover: converterCover("./cover/"+file)
    cover.append("./images/dynamic/cover/"+getLink(file))


# SNAPSHOTS section ===============

snapshots = []

for file in os.listdir("snapshots/"):
    if convertSnap: convert("./snapshots/"+file)
    snapshots.append("./images/dynamic/snapshots/"+getLink(file))




# final work ==========================

manifest = {'cover': cover, 'snapshots': snapshots, 'work': work}


with open('../../manifest.js', 'w') as f:
    f.write("export default ")
    f.write(str(manifest).replace("True", "true"))


with open('../../index.html', 'w') as compiled:
    index = open('../../index_src.html')
    text = index.read()

    snapshots_tags = ''
    snapshots_links = manifest['snapshots']

    for i in range(int(len(snapshots_links)/2)):
        snapshots_tags += '<img src="'+snapshots_links[i]+'" onclick="openModal('+str(i)+')">'
    

    cover_tags = ''
    cover_links = manifest['cover']

    for i in range(len(cover_links)):
        if i == 0:
            id = 'id="active"'
        else:
            id = ""
        cover_tags += '<div style="background-image: url('+cover_links[i]+')" '+id+'></div>'



    text = text.replace('<div id="grid"></div>', '<div id="grid">'+snapshots_tags+'</div>')
    text = text.replace('<cover></cover>', '<cover>'+cover_tags+'</cover>')

    compiled.write(text)
    


if directlyUpload:
    os.chdir("../../../")
    os.system("git add .")
    os.system('git commit -m "Auto: Added Photos"')
    os.system("git push origin master")

            