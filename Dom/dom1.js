function $var() {
  return (document.getElementById("box").textContent = "hello,world");
}

// let text = document.body.firstChild;
// alert(text.data); //Riya

// let comment = text.nextSibling;
// alert(comment.data); // Comment
// alert(location.href);
// document.body.DOCUMENT_NODE;

// alert(elem.outerHTML);

// alert(news.textContent);
setInterval(() => (elem.hidden = elem.hidden === false), 2000);

for (let node of document.body.childNodes) {
  console.log(node, "here"); // shows all nodes from the collection
}

// let abc = table.rows[0].cells[1];
// abc.style.backgroundColor = "purple";

// document.body.myData = {
//   name: "Caesar",
//   title: "Imperator",
// };

// alert(document.body.myData.title); // Imperator

Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY