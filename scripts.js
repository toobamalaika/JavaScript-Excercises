// Program Two
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let simpleName = "Tooba Malaika -  IOT046067";
document.write('"Hello'+simpleName+'would you like to learn some Python today?"');

// Program Three
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
function titleCase(name) {
    return name.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
document.write("<br> Uppercase"+simpleName.toUpperCase()+"<br> Lowecase" +simpleName.toLowerCase()+"<br> Titlecase"+ titleCase(simpleName));

// Program Four
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
let authorName = "Leonardo da Vinci";
let authorQuote = "Learning never exhausts the mind";
document.write("<br>" +  authorName + " once said, " + "\"" + authorQuote + "\"");

// Program Five
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Program 9
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Initilized and declared author name as a famous_person
let famous_person = "Leonardo da Vinci";
// author name concetenate with his/her quote
let famous_person_quote = famous_person + ', "Learning never exhausts the mind"';
// Now print the stored the value of cocetenation
document.write("<br>" + famous_person_quote);

// Program Six
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let strippingName = '\nToo \tba Mal\tai\nka\n';
document.write("<br>" + (strippingName.replace(/^\s+|\s+|\n+|\t+$/g, '')));

// Program Seven
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

let additionNumber = 5+3;
let subtractionNumber = 11-3;
let multiplicationNumber = 2*4;
let divisionNumber = 16/2;

document.write("<br>" + additionNumber);
document.write("<br>" + subtractionNumber);
document.write("<br>" + multiplicationNumber);
document.write("<br>" + divisionNumber);

// Program 8
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber = 7;
document.write("<br>" + "My favorite number is " + favoriteNumber);

// Program 10
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ['Ayesha', 'Basma', 'Emaan'];
document.write("<br>" + names[0]);
document.write("<br>" + names[1]);
document.write("<br>" + names[2]);

// Program 11
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
names.forEach(function(everyMenmber) {
    document.write("<br>" + `Hi, ${everyMenmber}, Happy Birthday to you!` );
});

// Program 12
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let languagesList = ['JS', 'PHP', '.NET', 'Python', 'Rust'];
document.write("<br>" + `In my learning career, ${languagesList[0]} is first programming language!`);
document.write("<br>" + `In my professional career, ${languagesList[1]} is first programming language!`);
document.write("<br>" + `In my learning career, ${languagesList[2]} is second programming language!`);
document.write("<br>" + `In my learning career, ${languagesList[3]} is six programming language!`);
document.write("<br>" + `In my learning career, ${languagesList[4]} is five programming language!`);

// Program 13
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList = ['Zia Khan', 'Adil Altaf', 'Hira Khan', 'Daniyal Nagori', 'Ayesha'];

guestList.forEach(function(everyMenmber) {
    document.write("<br>" + `Hi, ${everyMenmber}, I would like to inite you for dinner!` );
});

// Program 14
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let index = guestList.indexOf('Daniyal Nagori');

if (index !== -1) {
    guestList[index] = 'Imran';
}

guestList.forEach(function(everyMenmber) {
    document.write("<br>" + `Hi, ${everyMenmber}, I would like to inite you for dinner!` );
});

// Program 15
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
guestList.splice(2, 0, "Muhammad");
guestList.push("Arham");
guestList.forEach(function(everyMenmber) {
    document.write("<br>" + `Hi, ${everyMenmber}, I would like to inite you for dinner!` );
});

// Program 16
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

for(var i=0; i<guestList.length; i++) {
    guestList.forEach((guest, index) => {
        if (index === 0 || index === 1) return;
        document.write("<br>" + `Hi, ${guest}, Tody's dinner is cancel!` );
    });
    guestList.splice(2);
}

guestList.forEach(function(everyMenmber) {
    document.write("<br>" + `Hi, ${everyMenmber}, Today's you are invitted!` );
});
document.write("<br>" + guestList );

// Program 18
// Seeing the World: Think of at least five places in the world you’d like to visit.

let worldList = ['Makkah', 'New York', 'Madina', 'Silicone Valley', 'Sweden'];
document.write("<br>" + worldList );
const ascSortdList = [...worldList].sort();
document.write("<br> Asceding Order: " + ascSortdList );
document.write("<br> Show Orignal Order: " + worldList );
const descSortdList = [...worldList].sort().reverse();
document.write("<br> Descending Order: " + descSortdList );
document.write("<br> Show Orignal Order: " + worldList );
document.write("<br> Descending Order: " + descSortdList );
document.write("<br> Asceding Order: " + ascSortdList );
document.write("<br> Descending Order: " + descSortdList );


// Program 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

document.write("<br>" + guestList + " both are invited!" );

// Program 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let natureList = ['Moon', 'Ocean', 'Sky', 'Stars', 'Rainbow'];
document.write("<br>" + natureList );

// Program 21
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
let natureListObject = Object.assign({}, natureList);
const arrayToObject = Object.assign({}, natureListObject);
document.write("<br>" + JSON.stringify(arrayToObject));

// Program 22
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

let programPIAIC = 'Web 3.0';
let sectionB = 750;
let facultyProgram = "Zia Khan";

document.write("<br>" + (programPIAIC == "Web 3.0" ? true : false) );
document.write("<br>" + (programPIAIC == "CNC" ? true : false) );
document.write("<br>" + (sectionB == 750 ? true : false) );
document.write("<br>" + (sectionB <= 2 ? true : false) );
document.write("<br>" + (sectionB >= 751 ? true : false) );
document.write("<br>" + (facultyProgram == "Zia Khan" ? true : false) );
document.write("<br>" + (sectionB === "750" ? true : false) );
document.write("<br>" + (facultyProgram == "Daniyal Nagori" ? true : false) );
document.write("<br>" + (sectionB != 15 ? true : false) );
document.write("<br>" + (programPIAIC === "Web 3.0" && sectionB === "750" ? true : false) );
document.write("<br>" + (programPIAIC === "web 3.0" ? true : false) );

// Program 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = ['Red', 'green', 'Yellow'];
let alienColor = "green";
document.write("<br>" + (alien_color.includes('green')  ? 'Earned 5 points' : '') );
document.write("<br>" + (alien_color.includes('green') ? 'Earned 5 points for shooting the alien' : 'Earned 10 points') );
if(alien_color.indexOf("green")) {
    document.write("<br> Earned 5 points for shooting the alien");
} else if(alien_color.indexOf("red")) {
    document.write("<br> Earned 5 points for shooting the alien");
} else {
    document.write("<br> Earned 10 points");
}

if(alien_color.includes('green')) {
    document.write("<br> Earned 5 points for shooting the aliens");
} else if(alien_color.includes("yellow")) {
    document.write("<br> Earned 10 points for shooting the aliens");
} else {
    document.write("<br> Earned 15 points");
}

// Program 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age = 64;

if(age < 2 ) {
    document.write("<br> Person is baby");
} else if(age < 4 || age == 2) {
    document.write("<br> Person is a toddler");
} else if(age < 13 || age == 4) {
    document.write("<br> Person is a kid");
} else if(age < 20 || age == 13) {
    document.write("<br> Person is a teenager");
} else if(age < 65 || age == 20) {
    document.write("<br> Person is a adult");
} else if(age == 65) {
    document.write("<br> Person is a elder");
} else {
    document.write("<br> - ");
} 

// Program 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let fruitsList = ['Banana', 'Cherry', 'Strawberry', 'Kiwi', 'Pineapple'];
if(fruitsList.includes('Banana')) {
    document.write("<br>I like " + fruitsList[0]);
}
if(fruitsList.includes('Cherry')) {
    document.write("<br>I like " + fruitsList[1]);
}
if(fruitsList.includes('Strawberry')) {
    document.write("<br>I like " + fruitsList[2]);
}
if(fruitsList.includes('Kiwi')) {
    document.write("<br>I like " + fruitsList[3]);
}
if(fruitsList.includes('Pineapple')) {
    document.write("<br>I like " + fruitsList[4]);
}

// Program 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userList = ['Admin', 'Tooba', 'Zia', 'Daniyal'];

if(userList.indexOf("Admin") >= 0 ) {
    document.write("<br>Hi " + userList[0] + ", would you like to see a status report?");
} else {
    document.write("<br>Hi user, would you like to see a status report?");
}

document.write("<br>" + userList);

if(userList.length >= 0) {
    document.write("<br>We need to find some users!");
}

// Program 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let currentUser = ['Admin', 'Tooba', 'Ayesha', 'Zia', 'Adil', 'Hira'];
let newUser = ['Daniyal', 'Adil', 'Hira', 'Imran'];

function getMatch(a, b) {
    var matches = [];
    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] )
                matches.push( b[e] );
        }
    }
    return matches;
}

document.write("<br>" + getMatch(currentUser, newUser) + " will need to enter a new username");

// Program 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
