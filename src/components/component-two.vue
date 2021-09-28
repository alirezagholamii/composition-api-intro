<template>
  <div class="container">
    <h2>ComponentTwo</h2>
    <h4>{{ cmpTitle }}</h4>

    <div>
      <input type="text" v-model="searchedWord" placeholder="search" />
    </div>
    <ul>
      <li v-for="item of list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <p>{{ upperCaseSearchedWord }}</p>
  </div>
</template>

<script>
import useFetchUsers from "@/composables/useFetchUsers";
import useSearch from "@/composables/useSearch";
import { toRefs } from "vue";
export default {
  name: "ComponentTwo",
  props: {
    title: String,
  },
  setup(props) {
    const { originalList } = useFetchUsers();

    const { matchingSearchQuery, searchedWord, upperCaseSearchedWord } =
      useSearch(originalList);

    const { title } = toRefs(props);
    
    return {
      list: matchingSearchQuery,
      searchedWord,
      upperCaseSearchedWord,
      cmpTitle: title,
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