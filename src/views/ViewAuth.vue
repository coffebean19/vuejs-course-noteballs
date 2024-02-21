<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }" @click.prevent="register = false">
          <a href="">Login</a>
        </li>
        <li :class="{ 'is-active': register }" @click.prevent=" register = true"">
              <a href="">Register</a>
            </li>

          </ul>


        </div>
      </div>
</template>

<script setup>
// imports
import { ref } from 'vue';

// register / login

const register = ref(false);

</script>