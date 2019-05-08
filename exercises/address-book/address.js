// Some starter code

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const container = document.querySelector("#addressList")
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value
    const favoriteThing = document.querySelector("#favoriteThing").value
    const store = document.querySelector("#favoriteThingStore").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
            <div>I can purchase ${favoriteThing} at ${store}</div>
            </section>
            `
    // Challenge
    // When you click the button and the new favorite thing is added to the DOM, clear out the value of both input fields. Then set the focus to the first input field.
    document.querySelector("#fullName").value = " ";
    document.querySelector("#address").value = " ";
    document.querySelector("#favoriteThing").value = " ";
    document.querySelector("#favoriteThingStore").value = " ";
});
// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.
// I can purchase {thing} at {location}


