import keyboard
import keyboard
import itertools

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

all_keys = {}
down = []
string = [" "]

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

counter = 0x0000
both_hands = itertools.product(one_hand(), ['0', '1'], one_hand())
for item in both_hands:
  concatenated = ''.join(map(str, item))
  all_keys[concatenated] = counter
  counter += 1

def diagram():
  diagram = [
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'],
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'], 
    ['_', '_', '_', '_', ' ', '_', '_', '_', '_'], 
    [' ', ' ', '_', '_', '_', '_', '_', ' ', ' ']
  ]
  if L1 in down:
    diagram[1][0] = '■'
  if L2 in down:
    diagram[1][1] = '■'
  if L3 in down:
    diagram[1][2] = '■'
  if L4 in down:
    diagram[1][3] = '■'
  if L5 in down:
    diagram[0][0] = '■'
  if L6 in down:
    diagram[0][1] = '■'
  if L7 in down:
    diagram[0][2] = '■'
  if L8 in down:
    diagram[0][3] = '■'
  if L9 in down:
    diagram[2][0] = '■'
  if L10 in down:
    diagram[2][1] = '■'
  if L11 in down:
    diagram[2][2] = '■'
  if L12 in down:
    diagram[2][3] = '■'
  if S in down:
    diagram[3][2] = '■'
    diagram[3][3] = '■'
    diagram[3][4] = '■'
    diagram[3][5] = '■'
    diagram[3][6] = '■'
  if R1 in down:
    diagram[1][8] = '■'
  if R2 in down:
    diagram[1][7] = '■'
  if R3 in down:
    diagram[1][6] = '■'
  if R4 in down:
    diagram[1][5] = '■'
  if R5 in down:
    diagram[0][8] = '■'
  if R6 in down:
    diagram[0][7] = '■'
  if R7 in down:
    diagram[0][6] = '■'
  if R8 in down:
    diagram[0][5] = '■'
  if R9 in down:
    diagram[2][8] = '■'
  if R10 in down:
    diagram[2][7] = '■'
  if R11 in down:
    diagram[2][6] = '■'
  if R12 in down:
    diagram[2][5] = '■'

  for i in diagram:
    print(' '.join(i))

def get_uni():
  uni = ['0' for _ in range(25)]
  for i, j in enumerate(get_char()):
    if j:
      uni[i] = '1'
  uni = ''.join(uni)
  print(uni)
  print(all_keys[uni])
  try:
    string.pop()
    string.append(chr(all_keys[uni]))
    print(''.join(string))
  except:
    pass

def get_char():
  return [L1 in down, L2 in down, L3 in down, L4 in down, L5 in down, L6 in down, L7 in down, L8 in down, L9 in down, L10 in down, L11 in down, L12 in down, S in down, R12 in down, R11 in down, R10 in down, R9 in down, R8 in down, R7 in down, R6 in down, R5 in down, R4 in down, R3 in down, R2 in down, R1 in down]


def key(event):
  eName = event.name
  eType = event.event_type
  if eType == 'down' and eName not in down:
    down.append(event.name)
    diagram()
    get_uni()
  elif eType == 'up' and eName in down:
    down.remove(eName)
    if not down:
      string.append(" ")

keyboard.hook(key)
print("ALL " + str(len(all_keys)) + " CHARACTERS AT YOUR DISPOSAL NOW")
keyboard.wait('esc')
with open("output.txt", "w", encoding='utf-8') as file:
  string.pop()
  file.write(''.join(string))
