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

let abc = table.rows[0].cells[1];
abc.style.backgroundColor = "red";

// document.body.myData = {
//   name: "Caesar",
//   title: "Imperator",
// };

// alert(document.body.myData.title); // Imperator

// Element.prototype.sayHi = function () {
//   alert(`Hello, I'm ${this.tagName}`);
// };

// document.documentElement.sayHi(); // Hello, I'm HTML
// document.body.sayHi(); // Hello, I'm BODY

let div = document.createElement("div");

div.innerHTML =
  "<h1>Hi there!</h1> This text add by DOM which Document object Model.";

document.body.after(div);
// another Line way :
ol.before("before"); // insert string "before" before <ol>
ol.after("after"); // insert string "after" after <ol>

let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast); // insert liLast at the end of <ol>
// End another line
