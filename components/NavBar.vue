<template>
  <div>
    <b-navbar toggleable="lg" class="nav" type="dark" variant="">

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item  ><nuxt-link to="/"> Home</nuxt-link></b-nav-item>
          <b-nav-item  >  <nuxt-link to="/about">About</nuxt-link></b-nav-item>
          <b-nav-item  >  <nuxt-link to="/contact">Contact_us</nuxt-link></b-nav-item>
          <b-nav-item  ><nuxt-link to="/testimonials"> Testmonials</nuxt-link></b-nav-item>
          <b-nav-item  >  <nuxt-link to="/teams">Teams</nuxt-link></b-nav-item>
          <b-nav-item  >  <nuxt-link to="/works">Our_Works</nuxt-link></b-nav-item>
       
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
  
   
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em style="color: #000;">Language</em>
            </template>
            <b-dropdown-item >English</b-dropdown-item>
            <b-dropdown-item >Arabic</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.nav{
  color: black;
}
</style>
