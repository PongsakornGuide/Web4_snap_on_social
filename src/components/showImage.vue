<template>
  <div class="">
      {{cardprop}}
      <div class="card" style="width: 18rem;" :class="styleClass">
        <img :src="cardprop.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card {{cardprop.title}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a :href="cardprop.link" class="btn btn-primary" v-if="cardprop.link">Go somewhere</a>
        </div>
    </div>

  </div>
</template>

<script>
export default {
props:['cardprop','styleClass']
}
</script>

<style>

</style>