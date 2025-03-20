Cargo Breakdown and Rack Management System (CBRMS)


Overview


The Cargo Breakdown and Rack Management System (CBRMS) is a web-based application designed to automate cargo sorting and manage inventory in real-time for ABC Aviation Company. It includes a staff sign-in page and a main interface for adding and tracking cargo. The system aims to streamline warehouse operations by sorting cargo based on weight and number of pieces, with plans for future expansion to-ring include additional criteria and features.
Features
Sign-In Page:
Displays company name ("ABC Aviation Company") and real-time date/time.

Collects staff name, staff number, and position for authentication.

Redirects to the main CBRMS page upon successful sign-in.

Main CBRMS Page:
Form to input cargo details: Airway Bill (AWB), Weight, Number of Pieces, Description, Discrepancy, and Hold Note.

Simulates sorting cargo into racks based on weight and piece count.

Displays real-time inventory in a table format.

User-Friendly Interface: Responsive design with a clean, modern layout.

Scalability: Built with future integration in mind (e.g., backend, APIs, React).

CBRMS/
├── index.html         # Main CBRMS page
├── signin.html        # Staff sign-in page
├── styles.css         # Combined CSS for both pages
├── script.js          # Combined JavaScript for both pages
└── README.md          # This file

Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge).

No additional software is required for the current static version.

Setup
Clone or Download the Repository:
If using Git: git clone <repository-url>

Or download the files and extract them to a local directory.

Open the Application:
Navigate to the project folder.

Open signin.html in a web browser to access the sign-in page.

After signing in, it redirects to index.html (the main CBRMS page).

Usage
Sign-In Page
Open signin.html.

Enter your details:
Staff Name: Your full name.

Staff Number: Your unique staff ID.

Staff Position: Select from the dropdown (e.g., Warehouse Manager, Cargo Handler).

Click Sign In.

After 2 seconds, you’ll be redirected to the main CBRMS page (index.html).

Main CBRMS Page
Open index.html (or get redirected from sign-in).

Add new cargo:
Airway Bill (AWB): Enter the cargo’s AWB number.

Weight (kg): Enter the cargo weight.

No of Pieces Received: Enter the number of pieces.

Cargo Description: (Optional) Describe the cargo.

Discrepancy: (Optional) Note any discrepancies.

Hold on Cargo: (Optional) Add hold notes (e.g., customs hold).

Click Submit.

View the result:
A message indicates if the cargo was sorted into a rack or not.

The inventory table updates with the cargo details.

Current Functionality
Sorting Simulation: Assigns cargo to racks based on weight (≤100kg or ≤150kg) and pieces (≤50 or ≤100).

Real-Time Display: Inventory table updates instantly with each submission.

Date/Time: Sign-in page shows the current date and time, refreshed every second.

Future Enhancements
Backend Integration: Add a server (e.g., Node.js, Flask) and database (e.g., MongoDB) for persistent storage and authentication.

Advanced Sorting: Include size, type, or other criteria for rack assignment.

Real-Time Updates: Implement WebSocket or API polling for live inventory updates.

User Management: Store staff details and session data.

React Migration: Convert to a React app for better state management and interactivity.

Custom Styling: Add a company logo or adjust the color scheme.

Contributing
Feel free to fork this project and submit pull requests for enhancements. For major changes, please open an issue first to discuss your ideas.
License
This project is licensed under the MIT License - see the License (#license) section below for details.
Contact
For questions or support, reach out to the project maintainer (ajayiolaoluwa8@gmail.com / 234-805-626-6468).

