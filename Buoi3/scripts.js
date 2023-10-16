// object trong js

const listPhones = [
  {
    name: "Điện thoại OPPO Reno10 5G (8GB/256GB) - Hàng Chính Hãng",
    price: 9190000,
    imageUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/36/db/91/1404e9f2af2196d73fcc90c5529908de.jpg.webp"
  },
  {
    name: "Điện thoại OPPO Reno10 5G (8GB/256GB) - Hàng Chính Hãng",
    price: 9190000,
    imageUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/36/db/91/1404e9f2af2196d73fcc90c5529908de.jpg.webp"
  },
  {
    name: "Điện thoại OPPO Reno10 5G (8GB/256GB) - Hàng Chính Hãng",
    price: 9190000,
    imageUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/36/db/91/1404e9f2af2196d73fcc90c5529908de.jpg.webp"
  },
  {
    name: "Điện thoại OPPO Reno10 5G (8GB/256GB) - Hàng Chính Hãng",
    price: 9190000,
    imageUrl: "https://salt.tikicdn.com/cache/368x368/ts/product/36/db/91/1404e9f2af2196d73fcc90c5529908de.jpg.webp"
  },
];

const container = document.getElementById("container");




listPhones.forEach(function (item, index) {
    const divTag = document.createElement("div")

    const imgTag = document.createElement("img")
    const h4Tag = document.createElement("h4")
    const h3Tag = document.createElement("h3")

    divTag.appendChild(imgTag)
    divTag.appendChild(h4Tag)
    divTag.appendChild(h3Tag)

    imgTag.src = item.imageUrl
    h4Tag.innerText = item.name
    h3Tag.innerText = item.price

    container.appendChild(divTag)
})

