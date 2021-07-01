const characters = [
	{
		name: 'Luke Skywalker',
		height: 172,
		mass: 77,
		eye_color: 'blue',
		gender: 'male'
	},
	{
		name: 'Darth Vader',
		height: 202,
		mass: 136,
		eye_color: 'yellow',
		gender: 'male'
	},
	{
		name: 'Leia Organa',
		height: 150,
		mass: 49,
		eye_color: 'brown',
		gender: 'female'
	},
	{
		name: 'Anakin Skywalker',
		height: 188,
		mass: 84,
		eye_color: 'blue',
		gender: 'male'
	}
];

//***REDUCE***
//1. Get total mass of all characters
const reducedMass = characters.reduce((acc, curr) => (curr.mass += acc), 0);

// console.log(reducedMass);

//2. Get total height of all characters
const reducedHeight = characters.reduce((acc, curr) => (curr.height += acc), 0);

// console.log(reducedHeight);

//3. Get total number of characters by eye color
const reducedCharcEye = characters.reduce((acc, curr) => {
	const color = curr.eye_color;

	if (acc[color]) {
		acc[color]++;
	} else {
		acc[color] = 1;
	}

	return acc;
}, {});

// console.log(reducedCharcEye);

//4. Get total number of characters in all the character names
const reducedCharcNames = characters.reduce(
	(acc, curr) => (acc += curr.name.length),
	0
);

console.log(reducedCharcNames);

//***FILTER***
//1. Get characters with mass greater than 100
const filteredMass = characters.filter(character => character.mass > 100);

// console.log(filteredMass);

//2. Get characters with height less than 200
const filteredHeight = characters.filter(character => character.height < 200);

// console.log(filteredHeight);

//3. Get all male characters
const filteredMale = characters.filter(
	character => character.gender === 'male'
);

// console.log(filteredMale);

//4. Get all female characters
const filteredFemale = characters.filter(
	character => character.gender === 'female'
);

// console.log(filteredFemale);

//***MAP***
//1. Get array of all names
const mappedNames = characters.map(character => character.name);

// console.log(mappedNames);

//2. Get array of all heights
const mappedHeights = characters.map(character => character.height);

// console.log(mappedHeights);

//3. Get array of objects with just name and height properties
const mappedNameHeights = characters.map(character => ({
	name: character.name,
	height: character.height
}));

// console.log(mappedNameHeights);

//4. Get array of all first names
const mappedHFirstNames = characters.map(
	character => character.name.split(' ')[0]
);

// console.log(mappedHFirstNames);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
