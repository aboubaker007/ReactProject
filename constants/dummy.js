import assets from "./assets";
export const RestData = [
{
    id:"1",
    name: "American Pizza",
    type:"Pizzas",
    price:30.00,
    image: assets.american,
    quantity:1,
    favoris:0,
    rating:4.7,
    prep1:30,
    prep2:40
},
{
    id:"2",
    name:"Asian Pizza",
    type:"Pizzas",
    price:25.00,
    image:assets.asian,
    quantity:1,
    favoris:0,
    rating:4,
    prep1:30,
    prep2:40
},
{
    id:"3",
    name:"Chicken Burger",
    type:"Burgers",
    price:40.00,
    image:assets.ChickenBurger,
    quantity:1,
    favoris:0,
    rating:4.5,
    prep1:5,
    prep2:10
},
{
    id:"4",
    name:"Cheese Burger",
    type:"Burgers",
    price: 20.00  ,
    image:assets.CheeseBurger,
    quantity:1,
    favoris:0,
    rating:3.8,
    prep1:5,
    prep2:10
},
{
    id:"5",
    name: "Sandwich Thon",
    type:"Sandwichs",
    price:30.00,
    image: assets.SandwichThon,
    quantity:1,
    favoris:0,
    rating:4,
    prep1:10,
    prep2:15
},
{
    id:"6",
    name:"Sandwich Escalope",
    type:"Sandwichs",
    price:25.00,
    image:assets.SandwichEscalope,
    quantity:1,
    favoris:0,
    rating:5,
    prep1:10,
    prep2:15
},
{
    id:"7",
    name:"Plat Escalope",
    type:"Plates",
    price:40.00,
    image:assets.PlatEscalope,
    quantity:1,
    favoris:0,
    rating:4.2,
    prep1:20,
    prep2:25
},
{
    id:"8",
    name:"Plat Fruit du mer",
    type:"Plates",
    price:30.00,
    image:assets.PlatFruit,
    quantity:1,
    favoris:0,
    rating:3.5,
    prep1:20,
    prep2:25
}
]
export const buttons = [
    {
        name: "All",
        value: "All",
        image: assets.All
      },
    {
        name:"Pizzas",
        value:"Pizzas",
        image: assets.Piz

    },
    {
        name:"Sandwichs",
        value:"Sandwichs",
        image:assets.Sand

    },

    {
        name:"Burgers",
        value:"Burgers",
        image:assets.Burg
    
    },
    {
        name:"Plates",
        value:"Plates",
        image:assets.Plate
    }
]
export const CartList =[];
export const favList=[];
export const Cards = [
    {   
        id:1,
        Name:"Attijari Card",
        Image:assets.Attijari
    },
    {
        id:2,
        Name:"E-Dinar Card",
        Image:assets.Edinar
    },
    {
        id:3,
        Name:"Zitouna",
        Image:assets.Zitouna
    },
    {
        id:4,
        Name:"BH Card",
        Image:assets.BH
    }
]
