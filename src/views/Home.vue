<template>
  <div class="home">
    <component-one :title="optionApi" />
    <component-two :title="compositionApi" />
  </div>
</template>

<script>
import ComponentOne from "@/components/component-one.vue";
import ComponentTwo from "@/components/component-two.vue";

export default {
  name: "Home",
  components: {
    "component-one": ComponentOne,
    "component-two": ComponentTwo,
  },
  data() {
    return {
      optionApi: "option api",
      compositionApi: "composition api",
    };
  },
  created() {
    setTimeout(() => {
      this.optionApi = this.optionApi.toUpperCase();
      this.compositionApi = this.compositionApi.toUpperCase();
    }, 10_000);
  },
  methods: {
    messageChanged(value) {
      this.msg = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
