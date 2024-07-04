const container = document.getElementById("container");
const image = document.getElementById("image");
const card = document.getElementById("card")

function createCard(countries) {
    return `
        <div id="card" class="card">
            <img id="image" src="${countries.flag}" alt="">
            <div class="data">
                <p><span>Code:</span></p>
                <p>${countries.code}</p>
            </div>
            <div class="data1">
                <p><span>Country:</span></p>
                <p>${countries.country}</p>
            </div>
            <div class="data2">
                <p><span>ID:</span></p>
                <p>${countries.id}</p>
            </div>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://cars-pagination.onrender.com/all-countries")
        .then(function (response) {
            if (response.status < 300) {
                return response.json()
            }
        })
        .then(function (data) {
            data.length > 0 && data.forEach(countries => {
                const card = createCard(countries);
                container.innerHTML += card;
            });
        })
        .catch(err => {
            console.log(err);
        })

})


image.addEventListener('click', function(event) {
    event.preventDefault();

    image.style.width = "100%"
    container.innerHTML += image;
})

card.addEventListener('click', function() {
    card.style.width = "320px"
    card.style.height = "340px"
})