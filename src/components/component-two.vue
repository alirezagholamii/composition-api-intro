<template>
  <div class="container">
    <h2>ComponentTwo</h2>
    <div>
      <input type="text" v-model="searchedWord" placeholder="search" />
      <button @click.prevent="search" class="btn">search</button>
      <button @click.prevent="sort" class="btn">sort</button>
    </div>
    <ul>
      <li v-for="item of list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <p>{{ searchedWordUppercase }}</p>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
export default {
  name: "ComponentTwo",
  props: {
    title: String,
  },
  setup() {
    const list = ref([]);
    const originalList = [];
    function getUsers() {
      fetch("https://part-quiz-app.herokuapp.com/users")
        .then((res) => res.json())
        .then((res) => {
          list.value = res;
          originalList.push(...res);
          console.log(originalList);
        })
        .catch((e) => console.log(e));
    }
    getUsers();

    function sort() {
      list.value.sort((a, b) => a.name.localeCompare(b.name));
    }

    const searchedWord = ref("");
    function search() {
      console.log(originalList);
      list.value = originalList.filter((item) =>
        item.name.includes(searchedWord.value)
      );
    }

    onMounted(() => {
      console.log("ComponentTwo Mounted");
    });

    const searchedWordUppercase = computed(() =>
      searchedWord.value.toUpperCase()
    );

    watch(searchedWord, (value, oldValue) => {
      console.log(value, oldValue);
      search();
    });

    return {
      list,
      sort,
      search,
      searchedWord,
      searchedWordUppercase,
    };
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
  background-color: rgb(155, 186, 243);
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