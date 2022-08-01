// import { cats } from "./data.js";
// import Cat from "./cats.js";

const cats = [
  {
    name: "Frank",
    avatar: "images/cat-brownEyes.jpg",
    age: 8,
    bio: "Hey beautiful",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
];

class Cat {
  constructor(data) {
    Object.assign(this, data);
  }

  getCatHtml() {
    const { name, avatar, age, bio } = this;
    return `  
      <div class="cat-info" style="background-image: url(${avatar})">
          <div class="text-info">
            <h2> ${name}, ${age} </h2>
            <h4 class="cat-bio"> ${bio} </h4>
          </div>
      </div>
      
    `;
  }
}

const frank = new Cat(cats[0]);
console.log(frank);

render();

function render() {
  document.getElementById("card").innerHTML = frank.getCatHtml();
}
