const images = {
  state: {
    bestSellers: [],
    goods: [],
    coffee: [],
    searchValue: "",
    sortValue: ""
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
    },
    setSearchValue(state, value) {
      state.searchValue = value
    },
    setSortValue(state, value) {
      state.sortValue = value
    },
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
    },
    setSearchValue({
      commit
    }, value) {
      commit('setSearchValue', value)
    },
    setSortValue({
      commit
    }, value) {
      commit('setSortValue', value)
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
        coffee: state.coffee
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
    },
    getSearchValue(state) {
      return state.searchValue;
    }
  },
}

export default images