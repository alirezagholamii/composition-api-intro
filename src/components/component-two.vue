<template>
  <div class="container">
    <h2>ComponentTwo</h2>
    <div>
      <input type="text" v-model="searchedWord" placeholder="search" />
      <button @click.prevent="sortList" class="btn">sort</button>
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
import useFetchUsers from "@/composables/useFetchUsers";
import useSortList from "@/composables/useSortList";
import useSearch from "@/composables/useSearch";
export default {
  name: "ComponentTwo",
  props: {
    title: String,
  },
  setup() {
    const { originalList } = useFetchUsers();

    const { matchingSearchQuery, searchedWord, searchedWordUppercase } =
      useSearch(originalList);

    const { sort } = useSortList();
    const sortList = () => {
      sort(originalList);
    };

    return {
      list: matchingSearchQuery,
      sortList,
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