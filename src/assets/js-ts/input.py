import sys, json

# argumentos enviados
lines = sys.argv[1]
jsonBody = json.loads(lines)

# array of weights del usuario
weightsUsuario = jsonBody['weights']

# weights (VAW) 
weights = {
	"v_acierto": [1.05, 0.975, 0.975], # +5V%
	"v_fallo": [0.95, 1.025, 1.025], # -5V%
	"vw_acierto": [1.025, 0.95, 1.025], # -5A%
	"vw_fallo": [0.975, 1.05, 0.975], # +5A%
	"aw_acierto": [0.95, 1.025, 1.025], # -5V%
	"aw_fallo": [1.05, 0.975, 0.975], # +5V% 
	"w_acierto": [0.975, 0.975, 1.05], # +5w%
	"w_fallo": [1.025, 1.025, 0.95] # -5w%
}

# recibe los tres porcentajes de lo estilos de aprendizaje
inputsPorcentajes = []
for element in jsonBody['arrayOfEstilos']:
	inputsPorcentajes.append(float( element ))

# permanecer en 100 absoluto
def round_to_100_percent(number_set, digit_after_decimal=3):
    """
        This function take a list of number and return a list of percentage, which represents the portion of each number in sum of all numbers
        Moreover, those percentages are adding up to 100%!!!
        Notice: the algorithm we are using here is 'Largest Remainder'
        The down-side is that the results won't be accurate, but they are never accurate anyway:)
    """
    unround_numbers = [x / float(sum(number_set)) * 100 * 10 ** digit_after_decimal for x in number_set]
    decimal_part_with_index = sorted([(index, unround_numbers[index] % 1) for index in range(len(unround_numbers))], key=lambda y: y[1], reverse=True)
    remainder = 100 * 10 ** digit_after_decimal - sum([int(x) for x in unround_numbers])
    index = 0
    while remainder > 0:
        unround_numbers[decimal_part_with_index[index][0]] += 1
        remainder -= 1
        index = (index + 1) % len(number_set)
    return [int(x) / float(10 ** digit_after_decimal) for x in unround_numbers]


# la red neural 
def ann():
	output = [None] * 3
	for element in range(len(inputsPorcentajes)):
		output[element] = inputsPorcentajes[element]


	for weightsIndex in weightsUsuario:
		for element in range(len(output)):
		 	output[element] = round((output[element] * weights[weightsIndex][element]), 3)
		output = round_to_100_percent(output)

	jsonResultado = json.dumps({"resultado": output})

	return jsonResultado


prediction = ann()
print(prediction)


sys.stdout.flush()











    
