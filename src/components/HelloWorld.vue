<template>
  <v-container>
    <h2>{{ subject }}</h2>
    <v-divider></v-divider>
    <v-list lines="one">
      <v-list-item v-for="topic in topics" :key="topic.title" :title="topic.title"><b>{{ topic.title }}</b> - {{ topic.content }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        subject: "Hi all, It is my vue learning app",
        topics: [
          {
            title : "Basics of vue js",
            content : "The basic component structure and parameters"
          },
          {
            title : "Vue router",
            content : "How routing in vue js works and how it can be used to make SPA"
          },
           {
            title : "Vues Store",
            content : "to manage the state of the data and use it efficiently to make the life a bit easier"
          }
        ]
      }
    },
  }
</script>