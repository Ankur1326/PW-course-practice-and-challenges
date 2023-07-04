let imageElement = document.querySelectorAll('img')  
imageElement.forEach(image => {
    image.addEventListener("mouseout", function () {
        image.style.transform = 'scale(1)';
    })
});




