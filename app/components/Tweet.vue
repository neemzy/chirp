<template>
  <div class="tweet">
    <div class="tweet__user">
      <img class="tweet__userAvatar" :src="user.avatar" />
      <span class="tweet__userName">{{user.name}}</span>
    </div>
    <div class="tweet__text" v-html="richText"></div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    text: String
  },
  computed: {
    richText() {
      return this.text.replace(
        /(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/g,
        '<a href="$1$2.$3$4" target="_blank">$1$2.$3$4</a>'
      );
    }
  }
}
</script>
