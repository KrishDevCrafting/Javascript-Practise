// const text = document.querySelector(".animated-text");
// const messages = ["Welcome", "Hola", "Bonjour", "こんにちは"];

// let index = 0;

// function changeText() {
//   text.textContent = messages[index];
//   index = (index + 1) % messages.length;
// }

// setInterval(changeText, 2000); // Change text every 2 seconds

$(document).ready(function () {
  $(".textillate").textillate({
    in: {
      effect: "fadeInLeftBig", // Choose an animation effect
      delayScale: 1.5, // Delay between each letter
      delay: 50, // Delay between each word
      sync: false, // Sync the animation
      shuffle: false, // Shuffle the animation order
      reverse: false, // Reverse the animation
      callback: function () {}, // Callback after the animation completes
    },
  });
});
