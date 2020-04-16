import os

for i in range (1, 13):
    command = "ffmpeg -i ./big/"+str(i)+".jpg -q:v 31 "+str(i)+".jpg"
    os.system(command)

print("DONE!!")

# end of program.