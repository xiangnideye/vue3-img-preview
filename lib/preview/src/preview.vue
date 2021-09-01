<template>
  <div>
    <img :src="src" class="img-com" @click="showPreview" />
    <!-- <preview-popup v-if="isPreviewShow" :src="src"></preview-popup> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, watch, watchEffect } from "vue";
import { createInstance, appendChildBody } from "./utils";
import PreviewPopup from "../../prveiew-popup/index";
import { IPreviewState } from "../../types/types";

export default defineComponent({
  name: "Preview",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  components: {
    PreviewPopup,
  },
  setup(props) {
    const state: IPreviewState = reactive({
      vm: "",
      src: "",
      isPreviewShow: false,
    });

    watchEffect(() => {
      state.src = props.src;
    });

    const showPreview = () => {
      (state.vm as any) = createInstance(
        PreviewPopup,
        // props 参数
        { src: state.src },
        // on 接收
        {
          removePrev: () => {
            removePreview();
          },
        }
      );
      appendChildBody(state.vm);
    };

    const removePreview = () => {
      document.body.removeChild(state.vm.$el);
    };

    return {
      ...toRefs(state),
      showPreview,
    };
  },
});
</script>

<style scoped>
.img-com {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>