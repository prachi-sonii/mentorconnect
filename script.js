document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const role = document.getElementById('role').value;

    // Redirect based on the selected role
    if (role === 'student') {
        window.location.href = 'home.html';
    } else if (role === 'mentor') {
        alert('Mentor signup is successful. Please wait for admin approval.');
    }
});

function bookMentor(mentorName) {
    const confirmBooking = confirm(`Book a session with ${mentorName}?`);
    if (confirmBooking) {
       // alert(`You have successfully booked a session with ${mentorName}.`);
        // Open video chat link (e.g., Zoom)
        window.open('https://calendly.com/aasthabhavsar10/mentor-connect', '_blank');
    }
}

function navigateTo(page) {
    // Handle navigation to different pages or functionalities
    if (page === 'post') {
        alert('This feature is coming soon!');
    } else if (page === 'chat') {
        alert('Chat feature is coming soon!');
    } else if (page === 'call') {
        alert('Call feature is coming soon!');
    } else if (page === 'more') {
        alert('More features are coming soon!');
    } else {
        window.location.href = page;
    }
}

// Toggle Chatbot Visibility
function toggleChat() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

// Close Chatbot
function closeChat() {
    const chatbot = document.querySelector('.chatbot-container');
    chatbot.style.display = 'none';
}

// Handle Sending Messages
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    // Display User Message
    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    // Auto Scroll to Bottom
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear Input Field
    document.getElementById('userInput').value = '';

    // Simulate Bot Response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.textContent = generateBotResponse(userInput);
        chatbox.appendChild(botMessage);

        // Auto Scroll to Bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}

// Generate Bot Response (Simple Example)
function generateBotResponse(userInput) {
    if (userInput.toLowerCase().includes('hello')) {
        return 'Hi there! How can I help you today?';
    } else if (userInput.toLowerCase().includes('mentor')) {
        return 'You can find mentors under various categories on our home page!';
    } else {
        return 'I am here to help! Please ask any questions.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mentorId = urlParams.get('id'); // Get mentor ID from URL

    if (mentorId) {
        // Fetch mentor data based on ID (you might need an API call or static data)
        // Example static data for demo purposes:
        const mentors = {
            1: { name: 'John Dew', experience: '10 years', field: 'Business Strategy' },
            2: { name: 'Parth Singh', experience: '7 years', field: 'Startup Consultant' }
            // Add other mentors here
        };

        const mentor = mentors[mentorId];
        if (mentor) {
            document.getElementById('mentorName').textContent = mentor.name;
            document.getElementById('mentorExperience').textContent = `Experience: ${mentor.experience}`;
            document.getElementById('mentorField').textContent = `Field: ${mentor.field}`;
        }
    }
});
