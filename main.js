var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for (let i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
};

let myInterests = ["Music", "Programming/Coding", "Getting lost in the woods", "Finding my way out of the woods", "Making new friends and connections"];

for (let i = 0; i < myInterests.length; i++) {
    if(i === 0) {
        console.log(`My absolute favorite interest is: ${myInterests[i]}`);
    } else {
        console.log(`One of my interests is: ${myInterests[i]}`);
    };
};

