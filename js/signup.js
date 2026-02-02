document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
    const successMessage = document.getElementById('success-message');

    // --- Form Submission Handler ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            email: document.getElementById('email').value,
            // password is omitted for client-side logging security
        };

        // 1. Hide the form
        form.classList.add('hidden');
        
        // 2. Display the success message
        successMessage.classList.remove('hidden');

        // 3. Log data to console for testing/debugging purposes (replace with actual API call)
        console.log("Sign In simulated successfully! Form Data:", formData);
    });
});