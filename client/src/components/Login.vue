<template>
  <div>
     <b-container fluid>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="userName"
                    label="Username:"
                    label-for="userName">
        <b-form-input id="userName"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
                     label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
     </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      show: true
    };
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
