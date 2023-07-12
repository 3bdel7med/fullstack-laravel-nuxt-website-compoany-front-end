<template>
  <div>
 
    <CardPage />
    <b-button variant="primary">
  <i class="bi bi-heart-fill"></i> Like
</b-button>
  </div>
 
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    name: "IndexPage",
    components: { NavBar }
}
</script>
