<template>
  <section class="container">
    <p>{{ userName }}</p>
    <h3>{{ age }}</h3>
  </section>
  <section class="container">
    <p>{{ userNameOne }}</p>
    <p>{{ ageOne }}</p>
  </section>
  <section class="container">
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
  </section>
  <section class="container">
    <user-data
      class="test"
      :first-name="firstName"
      :last-name="lastName"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
// import { isRef } from "vue";
import { reactive } from "vue";
import { toRefs } from "vue";
import UserData from "./UserData.vue";

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Fulano');
    const uAge = ref(21);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);

    const user = reactive({
      name: "Fulano",
      age: 21,
    });

    // console.log(isRef(uName));
    // console.log(isRef(user), user.age);

    setTimeout(() => {
      // uName.value = "Cosme";
      // uAge.value = 90;

      user.name = "cosme";
      user.age = 30;
    }, 2000);

    provide("userAge", uAge);

    const uName = computed(function () {
      return firstName.value + " - " + lastName.value;
    });
    console.log(uName);
    //  Watch (dependecy, function)

    // watch(uAge, (newValue, oldValue) => {
    //   console.log("Old age: " + oldValue);
    //   console.log("New age: " + newValue);
    // });

    watch([uAge, uName], function (newValues, oldValues) {
      console.log("Old age: " + oldValues[0]);
      console.log("New age: " + newValues[0]);
      console.log("Old name: " + oldValues[1]);
      console.log("New name: " + newValues[1]);
    });

    function setNewAge() {
      uAge.value = 33;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    const userRefs = toRefs(user);

    return {
      user: user,
      userNameOne: userRefs.name,
      ageOne: userRefs.age,
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Fulano',
  //     age: 21
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // },
  // watch: {
  //   age(val) {
  //     console.log(val);
  //   }
  // }
  // provide() {
  //   return { age: this.age };
  // }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>