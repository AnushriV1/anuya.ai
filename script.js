let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let selectedSlot = null; // Variable to store the selected slot
document.getElementById('bookSessionBtn').addEventListener('click', function() {
    document.getElementById('bookSlot').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('knowMoreBtn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
knowMoreBtn
function selectSlot(button) {
    // Get the parent slot div
    const slot = button.closest('.slot');

    // Check if the slot is available
    if (slot.getAttribute('data-status') === 'available') {
        // Change the slot status to selected
        slot.setAttribute('data-status', 'selected');
        // Change the button color to indicate selection
        button.style.backgroundColor = '#28a745'; // Green background
        button.disabled = true; // Disable the button to prevent re-selection

        // Store the selected slot
        selectedSlot = slot;

        // Update the selected slot information (e.g., display in a separate area)
        updateSelectedSlotInfo(slot);
    }
}

function submitBooking() {
    // Check if a slot is selected
    if (selectedSlot && selectedSlot.getAttribute('data-status') === 'selected') {
        // Change the status to booked
        selectedSlot.setAttribute('data-status', 'booked');

        // Show a pop-up notification
        alert('Your slot is booked successfully.');

       
    } else {
        alert('Please select a time slot before submitting.'); // Alert if no slot is selected
    }
}

function updateSelectedSlotInfo(slot) {
    // Get the selected date, time, and professor information
    const date = slot.closest('.date-slot').querySelector('h3').textContent;
    const time = slot.querySelector('.slot-button').textContent;
    const professor = slot.querySelector('p').textContent;

    // Display the selected slot information in a designated area (e.g., a div)
    const selectedSlotInfoDiv = document.getElementById('selected-slot-info');
    selectedSlotInfoDiv.innerHTML = `
        <h3>Selected Slot</h3>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Professor: ${professor}</p>
    `;
}