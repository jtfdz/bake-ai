import sys, json

lines = sys.argv
resultado = lines[4]

#inputs
inputs = []
for element in range(1,4):
	inputs.append(float(lines[element]))


def elementwise_multiplication(number, vector):
	output = []
	for element in range(3):
		output.append(number[element]*vector[element])
	return output


# weights (VAW)
weights = {
	"v_acierto": [1.1, 0.95, 0.95], 
	"v_fallo": [0.9, 1.05, 1.05], 
	"vw_acierto": [1.05, 0.9, 1.05],
	"vw_fallo": [0.95, 1.1, 0.95],
	"aw_acierto": [0.9, 1.05, 1.05],
	"aw_fallo": [1.1, 0.95, 0.95],
	"w_acierto": [0.95, 0.95, 1.1],
	"w_fallo": [1.05, 1.05, 0.9]
}


def ann(inputs, weights):
	prediction = elementwise_multiplication(inputs,	weights)
	return prediction

prediction = ann(inputs,weights[resultado])
print(prediction)


sys.stdout.flush()











    
