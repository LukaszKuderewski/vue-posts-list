<template>
   <main>
      <divider>
        <header>
          <h1>Posts</h1>
        </header>
          <list v-for="post in posts" v-bind:key="post.id" >
            <h2>
              {{post.title}}
            </h2>
            <p>By {{post.userId}}</p>
            <p>{{post.body}}</p>
          </list>
      </divider>
      <dropdown>
        <select v-model="sortParam"  @change="sortBy($event)">
          <option v-for="option in options" v-bind:key="option" :value="option">
              {{ option }}
          </option>
        </select>
      </dropdown>
    </main>
</template>
  
  <script>
    export default {
      data() {
        return {
          options: ["all"],
          posts: [],
          filter: "all", // TODO: sprawdzić te all ****************************
          sortParam: this.$route.params.id
        }
      },
      mounted() {
        console.log("PARAM: ", this.sortParam)
        // this.$router.push({ path: `/sort/all` })
        // this.filter === "All" ?
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data)
        //     this.posts = data
  
        //     const userNameArray = new Set(data.map( post => post.userId))
        //     this.options = ["All", ...userNameArray]
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   }) : null;
        const url = this.sortParam === "all" ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts?userId=${this.sortParam}`
          fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            this.posts = data

            const userNameArray = new Set(data.map( post => post.userId))
            this.options = ["all", ...userNameArray]
          })
          .catch((err) => {
            console.error(err);
          });
      },
      methods: {
        sortBy(event) {
          this.$router.push({ name: 'sort', params: { id: event.target.value} })
          this.filter = event.target.value
          const url = event.target.value === "all" ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts?userId=${event.target.value}`
          fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            this.posts = data
          })
          .catch((err) => {
            console.error(err);
          });
        }
      },
    }
  </script>

<style scoped>
  main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 90px;
  
  }
  
  divider {
    display: flex;
    flex-direction: column
   
  }
  
  header {
  /* height: 105px; */
  width: 772px;
  font-family: Lato;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  }
  
  list {
    width: 701px;
  margin-top: 70px;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  }
  
  h2 {
    font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  }
  
  p {
    font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  }
  
  </style>