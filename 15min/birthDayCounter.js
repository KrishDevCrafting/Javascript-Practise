function call() {
  document.getElementById("count").textContent = "Happy Birthday Krish...!";
}

const callBack = () => {
  setTimeout(() => {
    call();
  }, 12000);
};

callBack();
