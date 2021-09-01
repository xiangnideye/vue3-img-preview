<template>
  <preview :src="imgSrc"></preview>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  setup() {
    const state = reactive({
      imgSrc: ''
    })

    setTimeout(() => {
      state.imgSrc = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fccm.ddcdn.com%2Fext%2Fphoto-w%2F1a%2F4f%2Faa%2F6a%2Ftupaq-restaurant.jpg&refer=http%3A%2F%2Fccm.ddcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632992016&t=80a0c521bcac99b838f0d85a9a6ebd45'
    }, 10);

    return {
      ...toRefs(state)
    }
  }
});
</script>

<style>

</style>
