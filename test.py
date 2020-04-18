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

directlyUpload = True








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
                paths.append("./images/dynamic/work/"+category.replace(" ", "%20")+"/"+album.replace(" ", "%20")+"/"+file.replace(" ", "%20"))
            
            albums.append({'album': album, 'files': paths})

        work.append({'category': parse(category), 'albums': parse(albums)})



# COVER section ================

cover = []

def converterCover (path):
    cmd = 'ffmpeg -i "'+path+'" -q:v 30 -y "'+path+'"'
    os.system(cmd)

for file in os.listdir("cover/"):
    if convertCover: converterCover("./cover/"+file)
    cover.append("./images/dynamic/cover/"+file.replace(" ", "%20"))


# SNAPSHOTS section ===============

snapshots = []

for file in os.listdir("snapshots/"):
    if convertSnap: convert("./snapshots/"+file)
    snapshots.append("./images/dynamic/snapshots/"+file.replace(" ", "%20"))




# final work ==========================

manifest = {'cover': cover, 'snapshots': snapshots, 'work': work}


with open('../../manifest.js', 'w') as f:
    f.write("export default ")
    f.write(str(manifest).replace("True", "true"))


if directlyUpload:
    os.chdir("../../../")
    os.system("git add .")
    os.system('git commit -m "Auto: Added Photos"')
    os.system("git push origin master")

            