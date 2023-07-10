// select the container element
const container = document.querySelector(".container")
container.innerHTML = "";

// Create a new div element and store into the skeletopncontainer
const skeletonContainer = document.createElement('div');
skeletonContainer.classList.add('skeleton-container');

// loop to create 25 skeleton elements
for (let i = 0; i < 25; i++) {
    const skeleton = document.createElement('div');
    skeleton.classList.add('skeleton');
    skeletonContainer.appendChild(skeleton);
}
// append the skeleton container to the main container
container.appendChild(skeletonContainer);

// Function to remove skeleton loader
function removeSkeletonLoader() {
    // select the skeletion container element
    const skeletonContainer = document.querySelector('.skeleton-container');

    // check if the skeletion container exists
    if (skeletonContainer) {
        // remove the skeleton container from the DOM
      skeletonContainer.remove();
    }
  }

// setTimeout(removeSclatenElements, 1000);

// Asynchronous function to fetch and display data
async function fetchDataAndDisplay() {
    // Fetch data from the JSON Placeholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // convert the response to JSON format
    const data = await response.json();
    console.log(data);
    data.forEach(post => {
        console.log(post);

        // create div and paragraph element
        const titleElem = document.createElement("div");
        const paraElem = document.createElement("p");

        // add classes to the title and paragraph elements
        titleElem.classList.add("title")
        paraElem.classList.add("paragraph")

        titleElem.innerHTML = post.title;
        paraElem.innerHTML = post.body;

        container.appendChild(titleElem) // Append the title to the element
        container.appendChild(paraElem) //append the paraElem to the container

    });

}

window.addEventListener('DOMContentLoaded', fetchDataAndDisplay); //Fetch data and display it when the page loads
setTimeout(removeSkeletonLoader, 2000); // Remove skeleton loader after 2 seconds
