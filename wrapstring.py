# Original strings:
l=['S001', 'S002', 'S003', 'S004']
list1=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
list2=[85, 98, 89, 92]
a=[]
for key in range(len(l)):
    d={l[key]:{list1[key]:list2[key]}}
    a.append(d)

dic=[{z:{y:x}}for (x,y,z) in zip(list2,list1,l)]
print(dic)

# Nested dictionary:
# [{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}}, {'S004': {'Saim Richards': 92}}]
# QUESTION TWO
