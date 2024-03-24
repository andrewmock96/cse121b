/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Andrew Mock",
    photo: "images/profile.png",
    favoriteFoods: [
        "Steak",
        "Pizza",
        "Hamburgers",
        "Shrimp",
        "Coconut Creme Pie"
    ],
    hobbies: [
        "Video Games",
        "Watching TV",
        "Car Stuff",
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Wichita, Kansas", 
        length: "23 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Rexburg, Idaho",
        length: "1 year"
    }
);

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement("ul");
    ul.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place; // Accessing the 'place' property
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length; // Accessing the 'length' property
    document.querySelector("#places-lived").appendChild(dd);
});


