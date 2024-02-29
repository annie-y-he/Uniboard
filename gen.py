import itertools
import re


L1 = 'a'
L2 = 's'
L3 = 'd'
L4 = 'f'
L5 = 'q'
L6 = 'w'
L7 = 'e'
L8 = 'r'
L9 = 'z'
L10 = 'x'
L11 = 'c'
L12 = 'v'


R1 = ';'
R2 = 'l'
R3 = 'k'
R4 = 'j'
R5 = 'p'
R6 = 'o'
R7 = 'i'
R8 = 'u'
R9 = '/'
R10 = '.'
R11 = ','
R12 = 'm'

S = 'space'
down = []

def diagram():
  diagram = [
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'],
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'], 
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'], 
    [' ', ' ', '_', '_', '_', '_', '_', ' ', ' ']
  ]
  if int(down[0]):
    diagram[1][0] = '■'
  if int(down[1]):
    diagram[1][1] = '■'
  if int(down[2]):
    diagram[1][2] = '■'
  if int(down[3]):
    diagram[1][3] = '■'
  if int(down[4]):
    diagram[0][0] = '■'
  if int(down[5]):
    diagram[0][1] = '■'
  if int(down[6]):
    diagram[0][2] = '■'
  if int(down[7]):
    diagram[0][3] = '■'
  if int(down[8]):
    diagram[2][0] = '■'
  if int(down[9]):
    diagram[2][1] = '■'
  if int(down[10]):
    diagram[2][2] = '■'
  if int(down[11]):
    diagram[2][3] = '■'
  if int(down[12]):
    diagram[3][2] = '■'
    diagram[3][3] = '■'
    diagram[3][4] = '■'
    diagram[3][5] = '■'
    diagram[3][6] = '■'
  if int(down[13]):
    diagram[2][5] = '■'
  if int(down[14]):
    diagram[2][6] = '■'
  if int(down[15]):
    diagram[2][7] = '■'
  if int(down[16]):
    diagram[2][8] = '■'
  if int(down[17]):
    diagram[0][5] = '■'
  if int(down[18]):
    diagram[0][6] = '■'
  if int(down[19]):
    diagram[0][7] = '■'
  if int(down[20]):
    diagram[0][8] = '■'
  if int(down[21]):
    diagram[1][5] = '■'
  if int(down[22]):
    diagram[1][6] = '■'
  if int(down[23]):
    diagram[1][7] = '■'
  if int(down[24]):
    diagram[1][8] = '■'

  return '\n'.join([' '.join(i) for i in diagram])

def one_hand():
  positions = range(12)
  
  result = []

  for n in range(0, 5):
    combos = itertools.combinations(positions, n)
    for combo in combos:
      bin_list = ['0'] * 12
      for pos in combo:
        bin_list[pos] = '1'
      result.append(''.join(bin_list))

  return result

all_keys = {}
all_maps = {}
all_js = {}
counter = 0x0000
both_hands = itertools.product(one_hand(), ['0', '1'], one_hand())
for item in both_hands:
  concatenated = ''.join(map(str, item))
  all_keys[concatenated] = counter
  counter += 1

for k in all_keys:
  try:
    down = k
    all_maps[chr(all_keys[k])] = diagram()
  except:
    pass

for m in all_maps:
  all_js[str(ord(m))] = all_maps[m]

with open("mapping1.json", "w", encoding="utf-8") as file:
  for m in all_maps:
    try:
      file.write(m + "\n")
      file.write(all_maps[m] + "\n")
    except:
      pass
with open("mapping2.json", "w", encoding="utf-8") as file:
  file.write(re.sub(r"'", '"', re.sub(r",\s", ",\n", str(all_keys))))
with open("mapping3.json", "w", encoding="utf-8") as file:
  file.write(re.sub(r"'", '"', re.sub(r",\s", ",\n", str(all_js))))
