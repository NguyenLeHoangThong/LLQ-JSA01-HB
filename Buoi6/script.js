const spinner = document.getElementById("spinner");
const container = document.getElementById("container");

fetch("https://fakestoreapi.com/products") // GET => Doi API tra ve
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    spinner.classList.add("d-none");
    container.classList.remove("d-none");
  })
  .catch(function (error) {
    // chi chay khi co gi do sai o nhung cai .then
    console.log(error);
  });

// dang can xu li dong bo => het viec nay moi toi viec kia
// bat dong bo => lam nhieu viec cung luc
