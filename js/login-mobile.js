document.addEventListener("DOMContentLoaded", function () {
  const stepPhone = document.getElementById("step-phone");
  const stepOtp = document.getElementById("step-otp");
  const mobileInput = document.getElementById("mobile");
  const otpInput = document.getElementById("otp");
  const btnGetOtp = document.getElementById("btn-get-otp");
  const btnVerifyOtp = document.getElementById("btn-verify-otp");
  const btnEditNumber = document.getElementById("btn-edit-number");
  const displayNumber = document.getElementById("display-number");

  // Hardcoded Mock OTP for demonstration
  const MOCK_OTP = "1234";

  // 1. Authorize / Send OTP Handler
  btnGetOtp.addEventListener("click", function () {
    const number = mobileInput.value.trim();

    // Basic Validation
    if (number.length !== 10 || isNaN(number)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Simulate Sending OTP
    // In a real app, this would be an API call to a backend service (e.g., Twilio, Firebase, etc.)
    alert(
      `Authentication Code Sent: ${MOCK_OTP}\n(In a real app, this would be sent via SMS)`,
    );

    // Switch to OTP Step
    stepPhone.classList.add("hidden");
    stepOtp.classList.remove("hidden");
    displayNumber.textContent = "+91 " + number;

    // Auto-focus OTP field
    otpInput.focus();
  });

  // 2. Verify OTP Handler
  btnVerifyOtp.addEventListener("click", function () {
    const enteredOtp = otpInput.value.trim();

    if (enteredOtp === MOCK_OTP) {
      // Success Logic
      // Simulate storing auth token
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userMobile", mobileInput.value);

      // Show simple toast/alert before redirect
      const originalText = btnVerifyOtp.innerText;
      btnVerifyOtp.innerText = "Verified! Redirecting...";
      btnVerifyOtp.classList.replace("bg-teal-400", "bg-green-500");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    } else {
      alert("Invalid Code. Please try again.");
      otpInput.value = "";
      otpInput.focus();
    }
  });

  // 3. Edit Number Handler
  btnEditNumber.addEventListener("click", function () {
    stepOtp.classList.add("hidden");
    stepPhone.classList.remove("hidden");
    mobileInput.focus();
  });

  // Allow Enter key to trigger buttons
  mobileInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") btnGetOtp.click();
  });
  otpInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") btnVerifyOtp.click();
  });
});
