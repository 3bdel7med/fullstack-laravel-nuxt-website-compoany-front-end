<template>
    <div>
        <p>Our Perfect Team</p>
        <b-row>
            <b-col v-for="item in items" :key="item.id">
                <b-row>
                    <b-col>
                        <b-img v-bind="mainProps" :src="item.image" rounded="circle" alt="Circle image"></b-img>
                    </b-col>
                    <b-col>
                        <h4>{{item.name}}</h4>
                        <h6>{{item.jop}}</h6>
                        <h6>{{item.about}}</h6>
                    </b-col>
                </b-row>
            </b-col>
            <b-col></b-col>
        </b-row>
    </div>
    
</template>
<script>
import axios from 'axios'

export default {
  path: '/teams',
  name: 'teams',
  data() {
      return {
        items: [],
      }
    },
    async created() {
    const response = await axios.get('http://127.0.0.1:8000/api/teams')
    this.items = response.data
  },
}
</script>