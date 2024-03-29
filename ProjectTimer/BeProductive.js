// Set the target date and time for the countdown
const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const remainingTime = targetDate - currentDate;

  // Check if the countdown has reached zero
  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown is over!";
  } else {
    // Convert remaining time to days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000); // Update every second (1000 milliseconds)
