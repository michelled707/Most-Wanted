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
  // "people" is the outside data we need to make this function work
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

// DATA FROM THE OUTSIDE
// function searchByGender(people){
//   // take in user input for the trait they want to search by
//   // take in user input for the trait information to filter (if eye color, blue would be the input)
//   // and filter the data set for that trait 
//   // RETURNS: an array of people that match the trait searched for
// }

function searchByEyeColor(people){

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

// HELPER FUNCTIONS - Input validation
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

function searchByGender(people){
  let userInput = prompt("What is the gender of the person you are looking for");
  if (userInput === "male" || userInput === "female"){
    switch (userInput){
      case "female":
        let foundPerson = people.filter(function(person){
          if(person.gender === "female"){
            return true;
          }
          else{
            return false;
          }
        })
        let i;
        for(i = 0; i< foundPerson.length; i++){
          console.log(foundPerson);
        }
        alert(foundPerson);

    }
  }
switch (userInput){
  case "male":
    let foundPerson = people.filter(function(person){
      if(person.gender === "male"){
        return true;
      }
      else{
        return false;
      }
    })
    let i;
    for(i = 0; i< foundPerson.length; i++){
      console.log(foundPerson)
    }
    alert(foundPerson);
}
 
}





// // JJTODO: Remove the duplicate app functions (only need the top one!)
// function app(searchByTraits){
//   let searchType = promptFor("Do you know the 'gender', 'dob', 'weight', 'eye color' of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   let searchByTraits; 
//   let searchResults;
// switch(searchType){
//     case 'yes':
//       searchResults = searchByTraits('gender', 'dob', 'weight', 'eye color');
//       break;
//     case 'no':
//       // TODO: search by traits
//       break;
//       default:
//     app(searchByTraits); // restart app
//       break;
//   }
// }

// function app(personInfo){
//   let searchType = promptFor("Do you know the info of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   let personInfo; 
//   let searchResults;
// switch(searchType){
//     case 'yes':
//       searchResults = personInfo(searchByTraits);
//       break;
//     case 'no':
//       // TODO: search by traits
//       break;
//       default:
//     app(searchByTraits); // restart app
//       break;
//   }
// }

// function app(descendants){
//   let searchType = promptFor("Do you know the descendants of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase(); 
//   let searchResults;
// switch(searchType){
//     case 'yes':
//       searchResults = descendants();
//       break;
//     case 'no':
//       // TODO: search by traits
//       break;
//       default:
//     app(searchByTraits); // restart app
//       break;
//   }
// }