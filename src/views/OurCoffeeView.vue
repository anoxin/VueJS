<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                @input="onSearch($event)"
                v-model="searchValue"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div
                class="shop__filter-label"
                style="cursor: pointer"
                @click="resetFilter('')"
              >
                Or filter
              </div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper" v-if="!isLoading">
              <product-card
                v-for="card in images.coffee"
                :key="card.id"
                classItem="shop__item"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
            <spinner-component v-else />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SpinnerComponent from "../components/SpinnerComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";

import { navigate } from "../mixins/navigate";
import { debounce } from "debounce";
export default {
  components: { NavBarComponent, ProductCard, SpinnerComponent },
  computed: {
    images() {
      return this.$store.getters["getСoffeeImage"];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      },
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  data() {
    return {
      name: "coffee",
    };
  },
  mixins: [navigate],
  mounted() {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setCoffeeData", data);
      });
  },
  beforeMount() {
    this.$store.dispatch("setIsLoading", true);
    setTimeout(() => {
      fetch("http://localhost:3000/coffee")
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("setCoffeeData", data);
          this.$store.dispatch("setIsLoading", false);
        });
    }, 500);
  },
  methods: {
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),
    onSort(value) {
      fetch(`http://localhost:3000/coffee?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("setCoffeeData", data);
          this.$store.dispatch("setIsLoading", false);
        });
    },
    resetFilter(value) {
      this.onSort(value);
      this.$store.dispatch("setSearchValue", value);
      // this.onSort("");
    },
  },
};
</script>
