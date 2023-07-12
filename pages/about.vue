<template>
   <div>
    <b-container class="bv-example-row" style="margin-top: 50px;">
        <b-row v-for="item in items" :key="item.id">
            <b-col>
                <b-row>
                   <h4>Overview:</h4> <p>{{item.overview}}</p>
                </b-row>
                <b-row>
                    <h4>Our Mission:</h4>
                    <p>
                        {{item.our_mission}}                    
                    </p>
                </b-row>
                <b-row>
                    <h4>Our Team:</h4>
                    <p>
                        {{item.our_team}}
                    </p>
                </b-row>
                <b-row>
                    <h4>Customer Testimonials:</h4>
                    <p>
                        Here's what some of our satisfied customers have to say:

"Working with XYZ Company was a fantastic experience. Their team was knowledgeable, responsive, and went above and beyond to ensure our project was a success."
"I've been a customer of XYZ Company for years, and I have always been impressed with their commitment to quality and customer service."
                    </p>
                </b-row>
                <b-row>
                    <h4>Call to Action:</h4>
                    <p>Ready to learn more about how we can help you achieve your goals? Contact us today to schedule a consultation or sign up for our newsletter to stay up-to-date on the latest news and industry trends.</p>
                </b-row>
            </b-col>
            <b-col>      <img style="width: 400px;" :src="item.image" /></b-col>
           
        </b-row>
    </b-container>
   </div>
  

    
</template>
<script>
import axios from 'axios'
export default {
  path: '/about',
  name: 'about',
  data() {
      return {
        items: [],
      }
    },
    async created() {
    const response = await axios.get('http://127.0.0.1:8000/api/about')
    this.items = response.data
  },
}
</script>

  