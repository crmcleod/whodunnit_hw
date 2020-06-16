// #### Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

  // 'The murderer is miss Scarlett' 

  
//   #### Episode 2
  

  const murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  

  const assignment error because of 'const changeMurderer = function() {
    murderer = 'Mrs. Peacock''
//   #### Episode 3
  

  let murderer = 'Professor Plum';
  
  const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
  }
  
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);

  // The murderer us Mrs Peacock - reassignment is done in block because of let
  // The murderer is Professor Plum - no reassignment as murderer outside of block


//   #### Episode 4
  

  let suspectOne = 'Miss Scarlet';
  let suspectTwo = 'Professor Plum';
  let suspectThree = 'Mrs. Peacock';
  
  const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  }
  
  const suspects = declareAllSuspects();
  console.log(suspects);
  console.log(`Suspect three is ${suspectThree}.`);
  
//   The suspects are Miss Scarlett, Professor Plum, Colonel mustard due to reassignment in block
//  Suspect three is Mrs Peacock as reassignment happened inside of block again.
  
//   #### Episode 5
  

  const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

  // The weapon is revolver as scenario.weapon is mutated

  
//   #### Episode 6
  

  let murderer = 'Colonel Mustard';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);

  // The murderer is Mrs White 

  
//   #### Episode 7
  

  let murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      let murderer = 'Colonel Mustard';
  
      const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
      }
  
      unexpectedOutcome();
    }
  
    plotTwist();
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);

//  The murderer is Miss Scarlett because of the global variable murderer = 'Miss Scarlett'
// result is actually Mr green, for the same reason?


//   #### Episode 8
  

  const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

  // The weapon is lead pipe (misread code...)

//   #### Episode 9
  

  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   undeclared  --- NOPE
// Prof plum because if statement isn't a function and isn't called.
  
//   ### Extensions
  
//   Make up your own episode!
  