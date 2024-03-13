import { listings } from './listings.js';

// Access the id parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Assign it to a variable
const stringId = urlParams.get('id');
const id = parseInt(stringId);


// Get the listing details based on the provided id
const listingDetail = listings.find(listing => listing.id === id);

// Get the container element to display the listing details in the HTML file. 
const listingContainer = document.getElementById('container');

// Set the hero image
const heroImage = document.getElementById('listing-hero');
heroImage.style.backgroundImage = `url(${listingDetail.images[0]})`;

// Set the listing address
const address = document.getElementById('listing-address');
address.innerText = listingDetail.address;

// Set the listing price
const price = document.getElementById('listing-price');
price.innerHTML = `<span id="euro-symbol">&euro;</span>${listingDetail.price.toLocaleString()}`

// Set the listing type
const type = document.getElementById('listing-type');
type.innerText = listingDetail.type;

// Set the listing bed
const bed = document.getElementById('listing-bed');
bed.innerText = `Bed - ${listingDetail.bed}`;

// Set the listing bath
const bath = document.getElementById('listing-bath');
bath.innerText = `Bath - ${listingDetail.bath}`;

// Set the listing amenities
const listingOverview = document.getElementById('listing-overview');
listingDetail.amenities.forEach(amenity => {
    const span = document.createElement('span');
    span.innerHTML = `<i class="bi bi-check-circle-fill"></i><br> ${amenity}`;
    listingOverview.appendChild(span);
});

// Set the images
const images = document.getElementsByClassName('images')[0];
listingDetail.images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = listingDetail.address;
    images.appendChild(img);
});

// Set the description
const description = document.getElementById('description');
description.innerHTML = listingDetail.description

// Set the agent details
const agent = document.getElementById('agent-card');
agent.innerHTML = `
                <img src=${listingDetail.agentImage} alt=${listingDetail.agent}>
                <h2>${listingDetail.agent}</h2>
                <a href="tel:${listingDetail.agentPhone}" id="agent-phone"> <i class="bi bi-telephone-fill"></i> Call Agent</a>
                <div class="disclaimer">
                    <h3>Disclaimer</h3>
                    <p>
                        Each agent is solely responsible for the accuracy and 
                        completeness of the property information listed under their name. It is recommended that 
                        buyers only conduct business with the listed agent to avoid potential scams or 
                        fraudulent activities.
                    </p>
                </div>
`;