const container = document.querySelector(".container")
container.innerHTML = "";

const skeletonContainer = document.createElement('div');
skeletonContainer.classList.add('skeleton-container');

for (let i = 0; i < 25; i++) {
    const skeleton = document.createElement('div');
    skeleton.classList.add('skeleton');
    skeletonContainer.appendChild(skeleton);
}
container.appendChild(skeletonContainer);

// Function to remove skeleton loader
function removeSkeletonLoader() {
    const skeletonContainer = document.querySelector('.skeleton-container');
    if (skeletonContainer) {
      skeletonContainer.remove();
    }
  }

// setTimeout(removeSclatenElements, 1000);


async function fetchDataAndDisplay() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    data.forEach(post => {
        console.log(post);
        // create div and paragraph element
        const titleElem = document.createElement("div");
        const paraElem = document.createElement("p");

        titleElem.classList.add("title")
        paraElem.classList.add("paragraph")

        titleElem.innerHTML = post.title;
        paraElem.innerHTML = post.body;

        container.appendChild(titleElem)
        container.appendChild(paraElem)

    });

}

window.addEventListener('DOMContentLoaded', fetchDataAndDisplay);
setTimeout(removeSkeletonLoader, 2000); // Remove skeleton loader after 2 seconds
