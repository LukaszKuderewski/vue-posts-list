<template>
  <ul class="list" v-for="post in posts" v-bind:key="post.id">
    <li class="element">
      <h2>
        {{ post.title }}
      </h2>
      <p>By {{ post.userId }}</p>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
  
<script >
export default {
  data() {
    return {
      posts: [],
      sortParam: this.$route.params.id
    }
  },
  mounted() {
    const url = this.sortParam === "all" ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts?userId=${this.sortParam}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.posts = data
      })
      .catch((err) => {
        console.error(err);
      });
  },
}
</script>

<style scoped>
.list {
  width: 701px;
  margin-top: 70px;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  list-style-type: none;

}

.element {
  margin-left: -36px;
}

h2 {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
}

p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}
</style>