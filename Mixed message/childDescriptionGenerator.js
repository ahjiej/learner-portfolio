/*
This program has been written by Amine Hjiej (go to https://github.com/ahjiej/ahjiej).
The goal is to generate a random child description.
It can be fun for parents to be :).
Note that the result is in French.
*/

// CODE STARTS HERE

// Arrays that are needed 
let bodyParts = ['les cheveux', 'les yeux', 'le nez', 'la bouche', 'le sourire', 'la taille'];
let familyMembers = ['sa mère', 'son père', 'sa grand-mère maternelle', 'son grand-père maternel', 'sa grand-mère paternelle', 'son grand-père paternel'];
let futureOccupation = ['ingénieur'];
let possibleName = ['Amine'];

// This function 
function childDescription() {
    // sex = 0 means it is a girl, sex = 1 means it is a boy
    let sex = Math.round(Math.random()); 

    // 'Elle' means 'She' and 'Il' means 'He'
    let possessiveAgent = 'Elle';
    if (sex === 1) {
        possessiveAgent = 'Il';
        console.log('Votre enfant sera un garçon !');
    } else {
        console.log('Votre enfant sera une fille !');
    }

    // This piece of code builds the physical description
    let descriptiveArray = [];
    for (let i=0; i < bodyParts.length; i++) {
        let j = Math.round(Math.random()*(familyMembers.length-1));
        descriptiveArray.push([bodyParts[i], familyMembers[j]]);
    }

    for (let k=0; k < descriptiveArray.length; k++) {
        console.log(`${possessiveAgent} aura ${descriptiveArray[k][0]} de ${descriptiveArray[k][1]}.`);
    }

    // This piece of code selects a name
    // TODO

    // This piece of code selects an occupation
    // TODO
}


childDescription();
