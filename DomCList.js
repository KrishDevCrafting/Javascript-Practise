// function test() {
//   let Test = "IT's Really Work..!";
//   document.getElementById("box2").textContent = "This is From JS" + Test;
// }

// Add a click event listener to an element
// Get a reference to the button element

// Add a click event listener to the button
// myButton.addEventListener("click", function (event) {
//   // This function will be called when the button is clicked
//   document.getElementById("box").textContent = (
//     <div>
//       <ul>
//         <li>hello,List</li>
//       </ul>
//     </div>
//   );
// });

// List Using Js//

// const test = () => {
//   const myList = document.createElement("ul");
//   const List2 = document.createElement("li");
//   const List3 = document.createElement("li");
//   const List4 = document.createElement("li");
//   const List5 = document.createElement("li");
//   List2.textContent = "Rich";
//   List3.textContent = "Great";
//   List4.textContent = "Believe";
//   List5.textContent = "Stronger";
//   myList.appendChild(List2);
//   myList.appendChild(List3);
//   myList.appendChild(List4);
//   myList.appendChild(List5);

//   // Append the list to the document body
//   document.body.appendChild(myList);
// };

// function test() {
//   // Define an array of items
//   const items = ["", "Item 2", "Item 3"];

//   // Get a reference to an existing element where you want to append the list
//   const container = document.getElementById("box2");

//   // Generate the list HTML dynamically
//   const listHTML =
//     "<ul>" + items.map((item) => `<li>${item}</li>`).join("") + "</ul>";

//   // Set the innerHTML of the container element to the generated list HTML
//   container.innerHTML = listHTML;
// }

const test = () => {
  const Item = ["Bmw", "Sokoda", "Mercerde", "Maruti-Susuki", "Eco"];

  let value = document.getElementById("box2");
  let list = "<ul>" + Item.map((e) => `<li>${e}</li>`).join("") + "</ul>";
  value.innerHTML = list;
};

const test2 = () => {
  const array = ["Value1", "value2"];

  const cool = document.getElementById("box3");
  const logic = "<ul>" + array.map((a) => `<li>${a}</li>`).join("") + "</ul>";
  cool.innerHTML = logic;
};

