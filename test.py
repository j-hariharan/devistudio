'''
import requests

url = 'https://storage.bunnycdn.com/sample-photos/'

x = requests.get(url, headers = {"AccessKey": "c6304a11-e269-477b-845e0c0b75f2-62ce-4a1c"})

print(x.text)
'''





import os

os.chdir('public/images/dynamic')





# WORK section ===============================

work = []

for category in os.listdir("work/"):

    if os.listdir("work/"+category)[0] == "videos.txt":
        links = []
        with open('work/'+category+"/videos.txt") as f:
            for line in f:
                links.append(line.replace("\n", ""))

        work.append({'category': category, 'videos': True, 'links': links})

    else:
        albums = []
        for album in os.listdir("work/"+category):

            files = os.listdir("work/"+category+"/"+album)
            paths = []

            for file in files:
                paths.append("./images/dynamic/work/"+category.replace(" ", "%20")+"/"+album.replace(" ", "%20")+"/"+file.replace(" ", "%20"))
            
            albums.append({'album': album, 'files': paths})

        work.append({'category': category, 'albums': albums})



# COVER section ================

cover = []

for file in os.listdir("cover/"):
    cover.append("./images/dynamic/cover/"+file.replace(" ", "%20"))


# SNAPSHOTS section ===============

snapshots = []

for file in os.listdir("snapshots/"):
    snapshots.append("./images/dynamic/snapshots/"+file.replace(" ", "%20"))




# final work ==========================

manifest = {'cover': cover, 'snapshots': snapshots, 'work': work}


with open('../../manifest.js', 'w') as f:
    f.write("export default ")
    f.write(str(manifest).replace("True", "true"))



            