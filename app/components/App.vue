<template>
  <div class="tweets">
    <Tweet
      v-for="tweet in tweets"
      v-bind="tweet"
    />
  </div>
</template>

<script>
import Tweet from './Tweet.vue';

export default {
  data() {
    return {
      tweets: []
    }
  },
  created() {
    fetch('/api/tweets')
      .then(response => response.json())
      .then(tweets => {
        this.tweets = tweets;
      });
  },
  components: { Tweet }
}
</script>
