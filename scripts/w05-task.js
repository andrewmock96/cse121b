/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        
        // Create HTML <article>
        const articleElement = document.createElement("article");
        
        // Create HTML <h3> and add temple name
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        
        // Create HTML <img> and add src and alt
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append elements to article
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append article to templesElement
        templesElement.appendChild(articleElement);

    });
};

/* async getTemples Function using fetch()*/

// Make getTemples function to fetch data from the URL
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);}
    else {
        console.error("Fetch Failed", response.status);
    }
    };

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error("Invalid Filter")
            break;
    }
};



/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();