// Alias y type
type NumStr = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
	input1: NumStr,
	input2: NumStr,
	resultConversion: ConversionDescriptor
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	)
		result = +input1 + +input2;
	else result = input1.toString() + input2.toString();
	return result;
}

const combinedAges = combine(30, 23, 'as-number'); // 56
const combinedStringAges = combine('30', '23', 'as-number'); // 56
const combinedName = combine('Max', 'Anna', 'as-string'); // MaxAnna

function fetchWithAuth(url: string, method: 'get' | 'post') {}
fetchWithAuth('s', 'post');
fetchWithAuth('s', 'get');
