<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }" @click.prevent="register = false">
          <a href="">Login</a>
        </li>
        <li :class="{ 'is-active': register }" @click.prevent=" register = true">
          <a href="">Register</a>
        </li>
      </ul>


    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="credentials.email" type="email" class="input" placeholder="example@email.com">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="credentials.password" type="password" class="input" placeholder="Enter password..">
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref, computed, reactive } from 'vue';

// register / login

const register = ref(false);

// form title

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
})

// Credentials
const credentials = reactive({
  email: '',
  password: ''
})

// submit

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please enter an email my boi.");
  } else {
    if (register.value == true) {
      console.log("Register user with these credentials:", credentials);
    } else {
      console.log("Login user with these credentials:", credentials);
    }
  }
}

</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>