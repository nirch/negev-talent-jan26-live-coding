
// function randomImage() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const randonDogImageURL = data.message;
//       document.querySelector('#imgDog').src = randonDogImageURL;
//     })
// }

function randomImage() {
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      console.log(response);
      const randonDogImageURL = response.data.message;
      document.querySelector('#imgDog').src = randonDogImageURL;

    })
    .catch(err => {
      console.error(err);
    })
}



addEventListener("DOMContentLoaded", () => {
  randomImage();
})

