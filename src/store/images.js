const images = {
  state: {
    bestSellers: [],
    goods: [],
    coffee: [],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    },
    setGoodsData(state, data) {
      state.goods = data
    },
    setBestSellersData(state, data) {
      state.bestSellers = data
    }
  },
  actions: {
    setCoffeeData({
      commit
    }, data) {
      commit('setCoffeeData', data)
    },
    setGoodsData({
      commit
    }, data) {
      commit('setGoodsData', data)
    },
    setBestSellersData({
      commit
    }, data) {
      commit('setBestSellersData', data)
    }
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