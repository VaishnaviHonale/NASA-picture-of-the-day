

// document.addEventListener('DOMContentLoaded', setupPage);

// function setupPage() {
//     displayDefaultImage();
//     addSearchFunctionality();
// }

// function addSearchFunctionality() {
//     const searchButton = document.getElementById('search-button');
//     searchButton.addEventListener('click', searchImage);
// }

// function displayDefaultImage() {
//     const defaultDate = new Date().toISOString().split("T")[0];
//     getImageOfTheDay(defaultDate);
// }

// function searchImage() {
//     const inputDate = document.getElementById('search-input').value;
//     const formattedDate = formatDate(inputDate);
//     getImageOfTheDay(formattedDate);
// }

// function getImageOfTheDay(date) {
//     const apiKey = 'ybdNNn6Uq4bJeiUPpqPvbMEbgR3e6Pc7D3VAtPa7';
//     const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayImage(data, date);
//             saveSearch(date);
//             addSearchToHistory();
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

// function displayImage(data, date) {
//     const imageContainer = document.getElementById('current-image-container');

//     imageContainer.innerHTML = `
//         <div class="image-wrapper">
//             <p class="image-date">Picture On ${date}</p>
//             <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
//             <div class="image-overlay">
//                 <h3>${data.title}</h3>
//                 <p>${data.explanation}</p>
//             </div>
//         </div>
//     `;

//     const mainHeading = document.getElementById('main-heading');
//     const searchDateHeading = document.getElementById('search-date-heading');
//     mainHeading.style.display = 'none'; // Hide the main heading
//     searchDateHeading.style.display = 'block'; // Show the search date heading
// }

// function saveSearch(date) {
//     let searches = JSON.parse(localStorage.getItem('searches')) || [];
//     searches.push(date);
//     localStorage.setItem('searches', JSON.stringify(searches));
// }

// function addSearchToHistory() {
//     const searchHistory = document.getElementById('search-history');
//     searchHistory.innerHTML = '';

//     let searches = JSON.parse(localStorage.getItem('searches')) || [];

//     searches.forEach(date => {
//         const listItem = document.createElement('li');
//         listItem.textContent = date;
//         listItem.addEventListener('click', function () {
//             getImageOfTheDay(date);
//         });
//         searchHistory.appendChild(listItem);
//     });
// }

// function formatDate(dateString) {
//     const selectedDate = new Date(dateString);
//     const formattedDate = selectedDate.toISOString().split("T")[0];
//     return formattedDate;
// }












addEventListener('DOMContentLoaded', setupPage);

function setupPage() {
    addSearchFunctionality();
}

function addSearchFunctionality() {
    const searchButton = document.getElementById('btn');
    searchButton.addEventListener('click', searchImage);
}

function searchImage() {
    const inputDate = document.getElementById('search-input').value;
    const formattedDate = formatDate(inputDate);
    getImageOfTheDay(formattedDate);
}

function getImageOfTheDay(date) {
    const apiKey = 'ybdNNn6Uq4bJeiUPpqPvbMEbgR3e6Pc7D3VAtPa7';
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayImage(data, date);
            saveSearch(date);
            addSearchToHistory();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayImage(data, date) {
    const imageContainer = document.getElementById('current-image-container');

    imageContainer.innerHTML = `
        <div class="image-wrapper">
            <p class="image-date">Picture On ${date}</p>
            <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
            <div class="image-overlay">
                <h3>${data.title}</h3>
                <p>${data.explanation}</p>
            </div>
        </div>
    `;

    const mainHeading = document.getElementById('main-heading');
    const searchDateHeading = document.getElementById('search-date-heading');
    mainHeading.style.display = 'none'; // Hide the main heading
    searchDateHeading.style.display = 'block'; // Show the search date heading
}

function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.push(date);
    localStorage.setItem('searches', JSON.stringify(searches));
}

function addSearchToHistory() {
    const searchHistory = document.getElementById('search-history');
    searchHistory.innerHTML = '';

    let searches = JSON.parse(localStorage.getItem('searches')) || [];

    searches.forEach(date => {
        const listItem = document.createElement('li');
        listItem.textContent = date;
        listItem.addEventListener('click', function () {
            getImageOfTheDay(date);
        });
        searchHistory.appendChild(listItem);
    });
}

function formatDate(dateString) {
    const selectedDate = new Date(dateString);
    const formattedDate = selectedDate.toISOString().split("T")[0];
    return formattedDate;
}