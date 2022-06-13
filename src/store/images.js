import {
  v4 as uuidv4
} from "uuid";

const images = {
  state: {
    bestSellers: [{
        id: uuidv4(),
        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
    goods: [{
        id: uuidv4(),
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
    ],
    coffee: [{
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
    ],
  },
  getters: {
    getBestSellersImage(state) {
      return {
        bestSellers: state.bestSellers,
      };
    },
    getGoodsImage(state) {
      return {
        goods: state.goods,
      };
    },
    getСoffeeImage(state) {
      return {
        coffee: state.coffee,
      };
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === id)
      }
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === id)
      }
    }
  },
}

export default images