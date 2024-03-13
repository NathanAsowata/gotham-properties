import { listings } from "./listings.js";


listings.map(listing => {
    const listingCard = document.createElement('div');
    listingCard.classList.add('listing-card');
    listingCard.onclick = () => openListingDetailsPage(listing.id);
    listingCard.innerHTML = `
        <img src=${listing.images[0]} alt=${listing.address}>
        <section>
            <p class="listing-address">${listing.address}</p>
            <p class="listing-price"> <span id="euro-symbol">&euro;</span>${listing.price.toLocaleString()}</p>
            <p class="listing-desc">Type: <span>${listing.type}</span></p>
            <p class="listing-desc">Bed: <span>${listing.bed}</span></p>
            <p class="listing-desc">Bath: <span>${listing.bath}</span></p>
            <p class="listing-desc">Amenities: ${listAmenities(listing.amenities)}</p>
        </section>
    `;

    // Find the tag with id all-listings and append this generated listing card to it
    document.querySelector('#all-listings').appendChild(listingCard);
})

// Loop through the listing amenities array
function listAmenities(amenities) {
    return amenities.map(amenity => `<span>${amenity}</span>`).join(', ');
}

// Pass the listing id to the listing details page when the card is clicked
function openListingDetailsPage(id) {
    window.location.href = `./listing-details.html?id=${id}`;
}
