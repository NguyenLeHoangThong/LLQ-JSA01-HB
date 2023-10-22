document.getElementById("click").addEventListener("click", function () {
  localStorage.setItem("student", JSON.stringify([1,2,3,4]));
});

const result =  localStorage.getItem("student");

console.log(JSON.parse(result))
