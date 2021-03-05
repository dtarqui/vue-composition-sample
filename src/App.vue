<template>
  <app-two></app-two>
  <hr />
  <app-one></app-one>
  <hr />
  <h2 align="center">Samples</h2>
  <samples></samples>
</template>

<script>
import Samples from "./components/Samples";
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";
export default {
  components: {
    Samples,
    AppOne,
    AppTwo,
  },
};
</script>

<style>
</style>