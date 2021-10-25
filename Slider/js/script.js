let imageList = [
  {
    id: 0,
    image: "image/blog-1.jpg",
  },
  {
    id: 1,
    image: "image/blog-2.jpg",
  },
  {
    id: 2,
    image: "image/blog-3.jpg",
  },
];
let index = 0;
let slider = document.querySelector(".slider");
let rightBtn = document.getElementById("right-btn");
let leftBtn = document.getElementById("left-btn");
let image = document.getElementById("image");

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  index--;
  if (index < 0) {
    index = imageList.length - 1;
  }
  image.src = imageList[index].image;
});
rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  index++;

  if (index > imageList.length - 1) {
    index = 0;
  }
  image.src = imageList[index].image;
});
