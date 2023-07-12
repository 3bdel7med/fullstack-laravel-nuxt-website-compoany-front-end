<template>
    <div>
        <b-row>
          <b-col cols="4" style="margin-top: 20px;">
            
                  <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
                    <h3>company</h3>
                    <p>this is customers testmonials</p>
                    <b-img src="~/assets/images/test.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

                  </b-card>
          </b-col>
          <b-col cols="4" style="margin-top: 20px;">
            
            <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
              <h3>company</h3>
              <p>this is customers testmonials</p>
              <b-img src="~/assets/images/test1.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

            </b-card>
          </b-col>
          <b-col cols="4" style="margin-top: 20px;">
            
            <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
              <h3>company</h3>
              <p>this is customers testmonials</p>
              <b-img src="~/assets/images/test2.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

            </b-card>
          </b-col>
          <b-col cols="4" style="margin-top: 20px;">
            
            <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
              <h3>company</h3>
              <p>this is customers testmonials</p>
              <b-img src="~/assets/images/test.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

            </b-card>
    </b-col>
    <b-col cols="4" style="margin-top: 20px;">
      
      <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
        <h3>company</h3>
        <p>this is customers testmonials</p>
        <b-img src="~/assets/images/test1.jpg" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

      </b-card>
    </b-col>
    <b-col cols="4" style="margin-top: 20px;" v-for="item in items" :key="item.id">
      
      <b-card bg-variant="secondary" text-variant="white" header="" class="text-center">
        <h3>{{ item.name }}</h3>
        <p>{{ item.testimonial }}</p>
        <b-img :src="item.image" v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>

      </b-card>
    </b-col>
        </b-row>
        
    </div>
  </template>
  

  
<script>
import axios from 'axios'

export default {
  path: '/testimonials',
  name: 'testimonials',
 
 
  data() {
      return {
        items: [],
        mainProps: {  width: 75, height: 75, class: 'm1' }
      }
    },
    async created() {
    const response = await axios.get('http://127.0.0.1:8000/api/test')
    this.items = response.data
  },
 
}
</script>
