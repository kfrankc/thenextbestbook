import glob

# Read the content of the JSON folder
read_files = glob.glob("booksWithTitleJSON/*.json")

# Write result to merged JSON file
with open("merged_file.json", "w") as outfile:
    outfile.write('[{}]'.format(
        ','.join([open(f, "r").read() for f in read_files])))
