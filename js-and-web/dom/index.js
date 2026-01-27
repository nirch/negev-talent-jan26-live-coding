addEventListener("DOMContentLoaded", () => {
  const mypElement = document.getElementById('my-p');

  console.log(document.querySelector('.my-div').innerHTML);

  console.log(document.querySelectorAll('.my-div'));     // this returns an array of elements

  document.querySelector('.my-div').innerHTML = '<p>p inside div</p>'

  const newP = document.createElement('p');
  newP.innerText = "inside div";
  document.querySelector('.my-div').appendChild(newP);
  // document.querySelector('.my-div').textContent = '<p>p inside div</p>'

  document.querySelector('#my-image').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg";
  document.querySelector('#my-image').setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg");


  // document.querySelector('#my-p').style = "color: yellow";
  // document.querySelector('#my-p').style.color = "yellow";
  // document.querySelector('#my-p').style.backgroundColor = "green";
  // document.querySelector('#my-p').style["background-color"] = "green";
  // color = "yellow";

  document.querySelector('#my-p').classList.add("yellow");

  function writeToConsole() {
    console.log('bla');
  }


  document.querySelector('#togglePBtn').addEventListener("click", function () {
    document.querySelector('#my-p').classList.toggle("yellow");
  });
});
