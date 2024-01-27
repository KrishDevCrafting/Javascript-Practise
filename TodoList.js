// const value = 987654321;

// document.getElementById("text").value = "Krish";

const addTask = () => {
  var taskI = document.getElementById("text");
  var taskL = document.getElementById("list");

  if (taskI.value.trim() !== "") {
    var taskText = taskI.value;
    var li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    taskL.appendChild(li);
    taskI.value = "";
  }
};
