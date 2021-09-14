"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      let genderResults = searchByGender(people);
      // let searchByGender = promptFor("Do you know the gender of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
      
      let foundPerson = people.filter(function(person){
        if(person.Gender === male){
          return true;
        }
        else{
          return false;
        }
      })

      // TODO: find the person using the name they entered
      return foundPerson;
      break;
      default:
    app(people); // restart app
      break;
  }

  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

function displayInfo(person){
  let displayInfoString = "";
  for (let i in person){displayInfoString += `${i} : ${person[i]}\n`;}
  
  alert(displayInfoString);
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
function enterCurrentSpouse(people){
    
  let userInputCurrentSpouse = prompt("What is the person's spouse first name?");
  let currentSpouseArray = people.filter(function(person){
  if(person.firstName.toLowerCase() === userInputCurrentSpouse.toLowerCase()){return true;}
  else {return false;}})
  return currentSpouseArray[0].id;
}

function findMatchingSpouse(people){ 
  let spouseId = enterCurrentSpouse(people);
  let actualPerson = people.filter(function(person){
    if(person.currentSpouse === spouseId){return true;}
    else {return false;}})
    let userInput = parseInt(prompt(placeItemsInStringAlert(actualPerson)));
    return actualPerson[userInput];
}


function findPeopleWithMatchingLastNameOrSpouseId(person){
  let actualPerson = person;
  let foundPersonFamily = data.filter(function(person){
    if(person.lastName.toLowerCase() === actualPerson.lastName.toLowerCase()){return true;} 
    else if(person.currentSpouse === actualPerson.id){return true;}
    else {return false;}}) 
  return foundPersonFamily;
}

function displayDescendants(person){
  let actualPerson = person;
  let descendantsArray = data.filter(function(person){
  if(person.parents[0] === actualPerson.id || person.parents[1] === actualPerson.id ){return true;}
  else {return false;}}) 
  
  let displayDescendantString = "";
  for (let i in descendantsArray){
    displayDescendantString += `Person Name: ${descendantsArray[i].firstName} ${descendantsArray[i].lastName}\n `;
  }
  alert(displayDescendantString);
}

function displayDateOfBirth(people){
  let userInputDateOfBirth = prompt("Date of birith? m/d/yyyy");
  let dateOfBirthArray = people.filter(function(person){
    if(person.dob.toLowerCase() === userInputDateOfBirth.toLowerCase()){return true;}
    else {return false;}})
    let userInput = parseInt(prompt(placeItemsInStringAlert(dateOfBirthArray)));
    return dateOfBirthArray[userInput];
} 

function displayGenderList(people) {
  let userInputGender = promptFor("What gender is the person?", maleFemale);

  let genderArray = people.filter(function(person){
  if(person.gender.toLowerCase() === userInputGender.toLowerCase()){return true;}
  else {return false;}})
  let userInput = parseInt(prompt(placeItemsInStringAlert(genderArray)));


  return genderArray[userInput]; 
}
  

function searchByMultipleTraits(people){
  let traitSelection =[]; 
  let traitSelection2 = [];
  while (traitSelection !== "-1"){
  traitSelection = prompt("Please enter multiple traits you would like to search for: ( dob, height, weight, eyecolor, occupation or -1 to finish list of traits )");
  traitSelection2.push(traitSelection);
} traitSelection2.pop();
  let lessPeople=[];
  for (let i = 0; i < traitSelection2.length; i++){

if (traitSelection2[i] === "dob"){
  lessPeople = searchDob(people); 
  people = lessPeople;
} else if (traitSelection2[i] === "height"){
    lessPeople = searchHeight(people); 
    people = lessPeople;
} else if (traitSelection2[i] === "weight"){
    lessPeople = searchWeight(people); 
    people = lessPeople;
} else if (traitSelection2[i] === "eyecolor"){
      lessPeople = searchEyeColor(people); 
      people = lessPeople;
} else if (traitSelection2[i] === "occupation"){
        lessPeople = searchOccupation(people); 
        people = lessPeople; 
}  
else {console.log("else was activated");}
}  
searchResults = lessPeople;
return searchResults; 
}

function displayEyeColor(people){
  let userInputEyeColor = prompt("What color eyes does the person have?");
  let eyeColorArray = people.filter(function(person){
    if(person.eyeColor.toLowerCase() === userInputEyeColor.toLowerCase()){return true;}
    else {return false;}})
    let userInput = parseInt(prompt(placeItemsInStringAlert(eyeColorArray)));
    return eyeColorArray[userInput];
}
//////////////////////////////////////////////////////////////////////////////////////////////////


function searchHeight(people){
  let height = parseInt(prompt("What is the person's height")); 
  let foundPerson = people.filter(function(person){
    if(person.height === height ){
      return true;
    }
    else{
      return false;
    }
  })
  let userInput = parseInt(prompt(placeItemsInStringAlert(heightArray)));
    return heightArray[userInput];
} 

function enterParentName(people){
  let userInputParent = prompt("What is the person's parent's name?");
  let parentNameArray = people.filter(function(person){
    if(person.firstName.toLowerCase() === userInputParent.toLowerCase()){return true;}
    else {return false;}})
    return parentNameArray[0].id;
}


function findMatchingParent(people){
  let parentId = enterParentName(people);
  let actualPerson = people.filter(function(person){
    if(person.parents === parentId){return true;}
    else {return false;}})
    let userInput = parseInt(prompt(placeItemsInStringAlert(actualPerson)));
    return actualPerson[userInput];
}
   

function searchWeight (people){
  let weight = parseInt(prompt("What is the person's weight?"));
  let foundPerson = people.filter(function(person){
    if(person.weight === weight ){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundPerson.length; i++)
  {
    let testPerson = foundPerson[i];
    displayPerson(testPerson);
  }
  console.log(foundPerson);
  return foundPerson 
}

function searchOccupation(people){
  let occupation = prompt("What is the person's occupation?");
  let foundPerson = people.filter(function(person){
    if(person.occupation === occupation ){
      return true;
    }
    else{
      return false;
    }
  })
  for(let i = 0; i < foundPerson.length; i++)
  {
    let testPerson = foundPerson[i];
    displayPerson(testPerson);
  }
  console.log(foundPerson);
  return foundPerson
}  

// function searchByName(people){
//   // "people" is the outside data we need to make this function work
//   let firstName = promptFor("What is the person's first name?", chars);
//   let lastName = promptFor("What is the person's last name?", chars);

//   let foundPerson = people.filter(function(person){
//     if(person.firstName === firstName && person.lastName === lastName){
//       return true;
//     }
//     else{
//       return false;
//     }
//   })
//   // TODO: find the person using the name they entered
//   return foundPerson;
// }

// // DATA FROM THE OUTSIDE
// // function searchByGender(people){
// //   // take in user input for the trait they want to search by
// //   // take in user input for the trait information to filter (if eye color, blue would be the input)
// //   // and filter the data set for that trait 
// //   // RETURNS: an array of people that match the trait searched for
// // }

// function searchByEyeColor(people){

// }

// // alerts a list of people
// function displayPeople(people){
//   alert(people.map(function(person){
//     return person.firstName + " " + person.lastName;
//   }).join("\n"));
// }

// function displayPerson(person){
//   // print all of the information about a person:
//   // height, weight, age, name, occupation, eye color.
//   let personInfo = "First Name: " + person.firstName + "\n";
//   personInfo += "Last Name: " + person.lastName + "\n";
//   // TODO: finish getting the rest of the information to display
//   alert(personInfo);
// }

// // HELPER FUNCTIONS - Input validation
// // function that prompts and validates user input
// function promptFor(question, valid){
//   do{
//     var response = prompt(question).trim();
//   } while(!response || !valid(response));
//   return response;
// }

// // helper function to pass into promptFor to validate yes/no answers
// function yesNo(input){
//   return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
// }

// // helper function to pass in as default promptFor validation
// function chars(input){
//   return true; // default validation only
// }

// function searchByGender(people){
//   let userInput = prompt("What is the gender of the person you are looking for");
//   if (userInput === "male" || userInput === "female"){
//     switch (userInput){
//       case "female":
//         let foundPerson = people.filter(function(person){
//           if(person.gender === "female"){
//             return true;
//           }
//           else{
//             return false;
//           }
//         })
//         let i;
//         for(i = 0; i< foundPerson.length; i++){
//           console.log(foundPerson);
//         }
//         alert(foundPerson);

//     }
//   }
// switch (userInput){
//   case "male":
//     let foundPerson = people.filter(function(person){
//       if(person.gender === "male"){
//         return true;
//       }
//       else{
//         return false;
//       }
//     })
//     let i;
//     for(i = 0; i< foundPerson.length; i++){
//       console.log(foundPerson)
//     }
//     alert(foundPerson);
// }
 
// }
