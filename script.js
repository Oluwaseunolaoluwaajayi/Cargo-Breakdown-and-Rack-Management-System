// Update date and time dynamically (for sign-in page)
function updateDateTime() {
    const datetimeElement = document.getElementById('current-datetime');
    if (datetimeElement) {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString();
    }
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Handle sign-in form submission (for signin.html)
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const staffName = document.getElementById('staff-name').value;
        const staffNumber = document.getElementById('staff-number').value;
        const staffPosition = document.getElementById('staff-position').value;

        // Display sign-in confirmation
        const resultDiv = document.getElementById('signin-result');
        resultDiv.textContent = `Welcome, ${staffName}! Signed in as ${staffPosition} (Staff No: ${staffNumber}) at ${new Date().toLocaleString()}`;
        resultDiv.style.color = '#27ae60';

        // Clear form
        this.reset();

        // Optional: Redirect to main app page after sign-in
        setTimeout(() => { window.location.href = 'index.html'; }, 2000);
    });
}

// Handle cargo form submission (for index.html)
const cargoForm = document.getElementById('cargo-form');
if (cargoForm) {
    cargoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const awb = document.getElementById('awb').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const pieces = parseInt(document.getElementById('pieces').value);
        const description = document.getElementById('description').value;
        const discrepancy = document.getElementById('discrepancy').value;
        const holdNote = document.getElementById('hold-note').value;

        // Simulate sorting logic
        const racks = [
            { id: 'R1', maxWeight: 100, capacity: 50 },
            { id: 'R2', maxWeight: 150, capacity: 100 }
        ];

        let assignedRack = null;
        for (let rack of racks) {
            if (weight <= rack.maxWeight && pieces <= rack.capacity) {
                assignedRack = rack.id;
                break;
            }
        }

        // Display result
        const resultDiv = document.getElementById('submit-result');
        if (assignedRack) {
            resultDiv.textContent = `Cargo with AWB ${awb} sorted into Rack ${assignedRack}`;
            resultDiv.style.color = '#27ae60';
        } else {
            resultDiv.textContent = `No suitable rack found for Cargo with AWB ${awb}`;
            resultDiv.style.color = '#e74c3c';
        }

        // Add to inventory table
        const inventoryTable = document.querySelector('#inventory-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${awb}</td>
            <td>${weight}</td>
            <td>${pieces}</td>
            <td>${description || 'N/A'}</td>
            <td>${discrepancy || 'None'}</td>
            <td>${holdNote || 'None'}</td>
            <td>${assignedRack ? 'Placed' : 'Pending'}</td>
            <td>${assignedRack || 'Not Assigned'}</td>
            <td>${new Date().toLocaleString()}</td>
        `;
        inventoryTable.appendChild(row);

        // Clear form
        this.reset();
    });
}

// Placeholder for real-time updates (for index.html)
function simulateRealTimeUpdate() {
    setInterval(() => {
        console.log("Checking for inventory updates...");
        // Add real-time logic here (e.g., fetch from API)
    }, 5000); // Every 5 seconds
}

if (document.getElementById('inventory-table')) {
    simulateRealTimeUpdate();
}