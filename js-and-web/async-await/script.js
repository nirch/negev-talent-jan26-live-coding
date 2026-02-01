
// function getNumberOfBreeds() {
//   return new Promise((resolve, reject) => {
//     // Call API to get all breeds
//     axios.get("https://dog.ceo/api/breeds/list/all")
//       .then(response => {
//         console.log(response.data);
//         // calculate - number of breeds
//         const numOfBreeds = Object.keys(response.data.message).length;
//         resolve(numOfBreeds);
//       })
//       .catch(err => {
//         reject(err);
//       })
//   });
// }





async function getNumberOfBreeds() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (!response.ok) {
      throw new Error(response.status);         // reject
    }
    const data = await response.json();
    const numOfBreeds = Object.keys(response.data.message).length;
    return numOfBreeds;                         // resolve
  } catch (err) {
    console.error(err);
    throw new Error("My own error");
  }


  // throw 10;       // in an async function using the "throw" keyword will reject the Promise
  // return 10;      // in an async function using the "return" keyword acctualy resolves the Promise
}

getNumberOfBreeds().then(numOfBreeds => console.log(numOfBreeds));

// const breeds = await getNumberOfBreeds();         // Error - becuase using await only inside an async function








// This code works - BUT, it is not efficient - The calls are unnecessary sequential
// It is too slow than the alterntaive
async function getDataSequential() {
  const user = await fetch('/api/user/1').then(r => r.json());
  const posts = await fetch('/api/posts/1').then(r => r.json());
  const comments = await fetch('/api/comments/1').then(r => r.json());
  return { user, posts, comments };
}

// More efficient - calls are parallel
async function getDataParallel() {
  const [user, posts, comments] = await Promise.all([
    fetch('/api/user/1').then(r => r.json()),
    fetch('/api/posts/1').then(r => r.json()),
    fetch('/api/comments/1').then(r => r.json())
  ]);

  return { user, posts, comments };
}



