<template>
    <div class="container">
      <h1 class="my-4">Our Work</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="item in items" :key="item.id">
          <div class="card">
            <img :src="item.image" class="card-img-top" :alt="item.alt">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.about }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    path: '/works',
    name: 'works',
    data() {
      return {
        items: [],
      }
    },
    async created() {
    const response = await axios.get('http://127.0.0.1:8000/api/works')
    this.items = response.data
  },
  }
  </script>