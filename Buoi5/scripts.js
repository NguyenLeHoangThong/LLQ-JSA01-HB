// // Kiểu dữ liệu (datatype)
// // number, string, boolean, ARRAY[], OBJECT{}

// // ARRAY => Lưu trữ nhiều giá trị, các giá trị này có cùng
// // những tính chất

// let car = "Abc";

// const cars = [[12312], [121, 12312], [1231], [12312]];

// // OBJECT => Lưu trữ nhiều giá trị, các giá trị này đại diện
// // cho 1 đối tượng nào đó (key - value)

// const student = {
//   name: "Thong",
//   age: 10,
//   fullName: "012394230918",
// };

// // ARRAY OF OBJECT
// // Shoppee
// const products = [
//   {
//     name: "Xe",
//     price: 1000,
//     promotions: ["MX1", "HALLOWEEN1", "TEACHERDAY2"],
//   },
//   {
//     name: "Sach",
//     price: 5000,
//     promotions: ["MX1", "HALLOWEEN1", "TEACHERDAY2"],
//   },
//   {
//     name: "Quan ao",
//     price: 5000,
//     promotions: ["MX1", "HALLOWEEN1", "TEACHERDAY2"],
//   },
// ];

// // Loop => Lặp đi lặp lại 1 công việc nào đó

// const students = ["Huy Bao", "Quoc Bao", "An", "Q Anh", "Duc Anh"];

// function loop(item, index) {
//   console.log(index, item);
// }

// students.forEach(loop);

// // document.createElement => tạo ra 1 thẻ
// // parent.appendChild(child)
// // element.innerText || element.src



// // Bootstrap => Components
// // Local Storage (5mb)
// // lưu trữ y như object: key-value
// // value của nó => chỉ nhận được kiểu dữ liệu number/string/boolean
// // array object

// // 1) Khi lưu vào localStorage =>
// // những array/object => phải được chuyển thành string
// // JSON.stringify

// // 2) Khi lấy ra dùng thì => chuyển ngược lại string thành
// // array/object JSON.parse


// Tạo 1 form đăng tải những cuốn sách

// mong muốn:
// books: [.....]

if (localStorage.getItem('books') === null) {
    localStorage.setItem('books', JSON.stringify([]))
}



document.getElementById('upload').addEventListener('click', function() {
    const name = document.getElementById('name').value
    const author = document.getElementById('author').value

    // Tạo 1 cuốn sách mới
    const book = {
        name: name,
        author: author
    }    

    //Lấy những cuốn sách cũ về
    const books = JSON.parse(localStorage.getItem('books'))

    // Thêm cuốn sách mới vào đuôi những cuốn sách cũ
    books.push(book)

    // Đẩy mảng những cuốn sách mới lên lại localStorage
    localStorage.setItem('books', JSON.stringify(books))
})

// .push => truyền 1 phần tử vào đuôi của mảng (array)
