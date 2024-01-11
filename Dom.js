function change() {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  const header = document.getElementsByTagName("h2").item(0);

  // The firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";

  // Now header is "A dynamic document".

  // Access the first paragraph
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");

  // Create a new Element to be the second paragraph
  const newElement = document.createElement("p");

  // Put the text in the paragraph
  newElement.appendChild(newText);

  // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
}
// function Lastyear(a) {
//   if (a >= 10 && a <= 12) {
//     console.log("Happy,New 2024!");
//   } else {
//     console.log("chuityai 2023 chal raha hai");
//   }
// }

// Lastyear(12);

// function validateForm() {
//   let x = document.forms["fuck"]["off"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
function validateForm() {
  var k = document.forms["string value"]["off"].value;
  if (k == "") {
    alert("Name must be filled bro ☠️");
    return false;
  }
}
