import os
import glob
import pandas as pd
#set working directory
os.chdir("./test")

#find all csv files in the folder
#use glob pattern matching -> extension = 'csv'
#save result in list -> all_filenames
extension = 'csv'
all_filenames = [i for i in glob.glob('*.{}'.format(extension))]
#print(all_filenames)

#combine all files in the list
print("Starting concat...")
combined_csv = pd.concat([pd.read_csv(f, header=0) for f in all_filenames ], axis=0)
print("Finished concat. Saving to csv...")
#export to csv
combined_csv.to_csv("../merged_file.csv", index=False, encoding='utf-8-sig')