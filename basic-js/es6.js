// ES6

// console.log(number)
// var number = 10

// let angka= 10;
// angka = 5;

// const pi = 3.14
// pi = 5;
// console.log(pi);

// Tempate literal

// let kata1 = "buka";
// let kata2  = "puasa";
// let kata3 = "segar";

//result: buka puasa segar

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

// ES6
// console.log(`${kata1} ${kata2} ${kata3}' )

// arrow function

// function declaration
// function hello(){
//     console.log("Hello");
// }
// hello();

// fucntion expression
// const helloExpression = function (){
//     console.log("Gaes");
// }
// helloExpression();

// study case membuat inventory management

let carts = [
    {
        id: 1,
        name: "Dell i5-12700",
        type: "laptop",
        price: 10000000,
        stock: 5,
        status:  true,
    },
    {
        id: 2,
        name: "HP i5-12700",
        type: "laptop",
        price: 7000000,
        stock: 5,
        status:  true,
    },
    {
        id: 3,
        name: "Razor gaming mouse",
        type: "mouse",
        price: 175000,
        stock: 3,
        status:  false,
    },
];

const showCarts = () => {
    console.log("Cart list: ");
    carts.forEach((cart) => {
        const { id, name, type, price, status, stock } = cart;
        if (status === true) {
            console.log(`${id}. [X] ${name} - Rp. ${price}.`);
            console.log(`${type} - Stocks: ${stock} pcs`);
        }else{
            console.log(`${id}. [ ] ${name} - Rp. ${price}.`);
            console.log(`${type} - Stocks: ${stock} pcs`);
        }
    });
};

// showCarts()

const addItem = (name, type, price, stock) => {
    const id = carts[carts.length - 1].id + 1;
    const status = true;

    carts.push({
        id,
        name,
        type,
        price,
        status,
        stock,
    });
};

// addItem()

const getCartById = (id) => {
    let temp = {}
    carts.forEach(cart => {
        if (cart.id === id){
            temp = cart
        }
    })
    console.log(temp);
};

const deleteCart = id => {
    carts = carts.filter(cart => cart.od !== id)
}

const updateCart = (id,name,type,price,status, stock) => {
    carts = carts.map(cart => {
        if(carts.id === id){
            cart.name= name;
            cart.type= type;
            cart.price= price;
            cart.status= status;
            cart.stock= stock;
        }
        return cart
    })
};

// addItem("Keyboard gaming", "keyboard", 50000, 2);
// showCarts();

getCartById(1);

