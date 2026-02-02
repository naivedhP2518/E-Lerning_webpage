document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');

    // --- Form Submission Handler ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            // Note: In a real app, never log or handle passwords on the client side without hashing.
            // password: document.getElementById('password').value 
        };

        // 1. Hide the form
        form.classList.add('hidden');
        
        // 2. Display the success message
        successMessage.classList.remove('hidden');

        // 3. Log data to console for testing/debugging purposes (replace with actual API call)
        console.log("Registration simulated successfully! Form Data:", formData);
    });
});