<template>
  <div class="container">
    <h2>ComponentOne</h2>
    <h4>{{cmpTitle}}</h4>
    <div>
      <input type="text" v-model="searchedWord" placeholder="search" />
      <button @click.prevent="search" class="btn">search</button>
    </div>
    <ul>
      <li v-for="item of list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <p>
      {{ upperCaseSearchedWord }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ComponentOne",
  props: {
    title: String,
  },
  data() {
    return {
      list: [],
      originalList: [],
      searchedWord: "",
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    upperCaseSearchedWord() {
      return this.searchedWord.toUpperCase();
    },
    cmpTitle(){
      return this.title
    }
  },
  watch:{
    searchedWord(){
      this.search()
    }
  },
  methods: {
    getUsers() {
      fetch("https://part-quiz-app.herokuapp.com/users")
        .then((res) => res.json())
        .then((res) => {
          this.list = res;
          this.originalList = [...res];
        })
        .catch((e) => console.log(e));
    },
    search() {
      this.list = this.originalList.filter((item) =>
        item.name.includes(this.searchedWord)
      );
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 48%;
  height: 20rem;
  padding: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  background-color: rgb(162, 196, 223);
}
.btn {
  display: inline-block;
  padding: 0.2em 1.45em;
  margin: 0.1em;
  border: 0.15em solid #cccccc;
  text-decoration: none;
  font-weight: 400;
  color: #000000;
  background-color: #cccccc;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
