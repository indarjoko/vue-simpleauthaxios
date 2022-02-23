<template>



    <section>
  <b-notification type="is-info" aria-close-label="Close notification">
Vuex and Axios Authentication example        </b-notification>
       <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://codesource.io/ask/assets/logo-4nq0qhfj.png"
                    alt="Codesource Tutorial"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="https://codesource.io/">
                Visit codesource.io
            </b-navbar-item>
        </template>
        </b-navbar>

        <b-field label="Username" Username:
            :type="{ 'is-danger': hasError }"
            :message="{ 'Username is not available': hasError }">
            <b-input value="johnsilver" maxlength="30" v-model="username" required>    </b-input>
        </b-field>

        <b-field label="Password" Password:
            :type="{ 'is-danger': hasError }"
            :message="[
                { 'Password is too short': hasError },
                { 'Password must have at least 8 characters': hasError }
            ]">
            <b-input value="123" type="password" maxlength="30" v-model="password"></b-input>

                                    



        </b-field>
                                    <b-button label="Login" type="is-primary"  @click.prevent="login" />

    </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let response = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      if (response) {
        this.$router.replace("mobiles");
      } else {
        // handle a bad login here..
      }
    },
  },
};
</script>







