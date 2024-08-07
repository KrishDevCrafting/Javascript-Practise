
// const file = "https://raw.githubusercontent.com/KrishDevCrafting/review-sentiment-analysis/main/reviewsData.json"

// const fetch =  new Promise (function(resolve,reject){
// const response = fetch(file)
// const data = response.json()
// document.getElementById("show")
// })

// JavaScript to fetch data and update the HTML

// Function to fetch data and display it in the HTML
async function fetchData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/KrishDevCrafting/review-sentiment-analysis/main/reviewsData.json');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      document.getElementById('data-container').innerText = 'Failed to load data.';
    }
  }
  
  // Function to display data in the HTML
  function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    
    // Assuming data is an array of objects
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerText = JSON.stringify(item);
      dataContainer.appendChild(itemElement);
    });
  }
  
  // Call fetchData to initiate the fetch operation
  fetchData();



































// // Function to fetch data and display it in the HTML
// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }
//       const data = await response.json();
//       displayData(data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//       document.getElementById('data-container').innerText = 'Failed to load data.';
//     }
//   }
  
//   // Function to display data in the HTML
//   function displayData(data) {
//     const dataContainer = document.getElementById('data-container');
  
//     // Assuming data is an array of objects
//     const elements = data.map(item => {
//       const itemElement = document.createElement('div');
//       // Customize how you display each item
//       itemElement.innerHTML = `
//         <p><strong>ID:</strong> ${item.id}</p>
//         <p><strong>Name:</strong> ${item.name}</p>
//         <p><strong>Description:</strong> ${item.description}</p>
//       `;
//       return itemElement;
//     });
  
//     // Append each item element to the data container
//     elements.forEach(element => dataContainer.appendChild(element));
//   }
  
//   // Call fetchData to initiate the fetch operation
//   fetchData();
  


  