<template>
  <div>
    <b-notification type="is-info" aria-close-label="Close notification">
    Simple Vuex and Axios Authentication Example        </b-notification>
       <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/assets/logo.svg"
                    alt="Simple Vuex and Axios Authentication Example"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="https://github.com/indarjoko">
                Visit My Github Repository
            </b-navbar-item>
        </template>
        </b-navbar>

    <b-notification
      type="is-danger is-light"
      aria-close-label="Close notification"
      role="alert"
    >
      <ul>
        <li v-for="(mobiles, idx) in mobiles" :key="idx">
          {{ mobiles.name }} brand is {{ mobiles.brand }}
        </li>
      </ul>
    </b-notification>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("loadMobiles");
  },

  computed: {
    ...mapState(["mobiles"]),
  },
};
</script>
