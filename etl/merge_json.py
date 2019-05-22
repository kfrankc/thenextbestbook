import glob

read_files = glob.glob("booksWithTitle.json/*.json")

with open("merged_file.json", "w") as outfile:
    outfile.write('[{}]'.format(
        ','.join([open(f, "r").read() for f in read_files])))