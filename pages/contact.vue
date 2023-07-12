<template>
    <div>
      <b-row style="margin: 100px;">
        <b-col>
          <img style="width: 400px; height: 400px;" src="~/assets/images/Contact.jpg" />
        </b-col>
        <b-col>
          
         
            <h2>Contact Us</h2>
            <div style="border: 1px solid gold;padding: 20px;">
            <b-row >
              <b-col>
                <b-form  @submit.prevent="products">
                <b-form-group id="name-group" label="Name:" label-for="name-input">
                  <b-form-input id="name-input" v-model="name" required></b-form-input>
                </b-form-group>

                <b-form-group id="email-group" label="Email:" label-for="email-input">
                  <b-form-input id="email-input" type="email" v-model="email" required></b-form-input>
                </b-form-group>

                <b-form-group id="message-group" label="Message:" label-for="message-input">
                  <b-form-textarea id="message-input" v-model="message" required></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
              </b-col>
              
             
              

            </b-row>
          </div>
          
       
       

      </b-col>
      
      </b-row>
    </div>
</template> 
<script>


</script>