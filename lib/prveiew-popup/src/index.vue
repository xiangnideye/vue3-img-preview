<template>
  <div class="img-preview-container">
    <div class="close-con" @click="closePreview">
      <img src="../img/close.png" class="close-btn" />
    </div>
    <div
      class="img-preview-parent"
      @drop="handledrop"
      @dragover="handleDragover"
    >
      <div
        class="img-wrap"
        @dragstart="handleMoveDragstart"
        :style="positionStyle"
      >
        <img
          id="img-preview-img"
          class="img-preview-img"
          ref="imgRef"
          :src="imgSrc"
          :style="transformStyle"
        />
      </div>
    </div>
    <ul class="img-preview-btn-list">
      <li
        class="img-preview-btn-item"
        v-for="(item, index) in btnList"
        :key="index"
        @click="handleBtnOptions(item)"
      >
        <div class="img-con">
          <img :src="item.img_src" class="btn-img" :alt="item.btn" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  watchEffect,
} from "vue";

import {
  computedImgPosi,
  windowResize,
  dragover,
  moveDragstart,
  drop,
} from "./methods";

import { BTN_TYPE, BTNTYPE_FUNC } from "./config";

import { IBtnItem, IPreviewPopupState } from '../../types/types'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  emits: ["removePrev"],
  setup(props, ctx) {
    const state: IPreviewPopupState = reactive({
      imgSrc: "",
      windWid: 0,
      windHei: 0,
      dragstartX: 0,
      dragstartY: 0,
      marginTopNum: 0,
      marginLeftNum: 0,
      defaultRotate: 0,
      defaultScaleY: 1,
      defaultScaleX: 1,
      imgClientHeight: 0,
      imgClientWidth: 300,
      defaultScaleXStyle: "none",
      defaultScaleYStyle: "none",
      btnList: BTN_TYPE,
      changeStyle: {
        transform: "none",
      },
    });

    const imgRef = ref(null);

    // watch
    watchEffect(() => {
      console.log(props.src, 'children props.src');
      state.imgSrc = props.src;
    });

    // computed
    const positionStyle = computed(() => {
      return computedImgPosi(
        state.marginLeftNum,
        state.marginTopNum,
        state.imgClientWidth
      );
    });

    const transformStyle = computed(() => state.changeStyle);

    onMounted(() => {
      window.onresize = () => {
        windowResize(state);
      };

      setTimeout(() => {
        state.imgClientHeight = (
          imgRef.value as any as HTMLImageElement
        ).clientHeight;

        // 初始图片位置和大小
        windowResize(state);
      }, 200);
    });

    // <methods>
    // 关闭预览
    const closePreview = () => {
      ctx.emit("removePrev");
    };

    const handleBtnOptions = (btn: IBtnItem) => {
      const btnFn: string = btn.type;
      BTNTYPE_FUNC[btnFn](state);
    };

    const handledrop = (e: MouseEvent) => drop(e, state);
    const handleDragover = (e: MouseEvent) => dragover(e, state);
    const handleMoveDragstart = (e: MouseEvent) => moveDragstart(e, state);
    

    return {
      ...toRefs(state),
      imgRef,
      positionStyle,
      transformStyle,
      handledrop,
      closePreview,
      handleDragover,
      handleBtnOptions,
      handleMoveDragstart,
    };
  },
});
</script>

<style scoped>
.img-preview-container {
  position: fixed;
  z-index: 100000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.img-preview-parent {
  position: relative;
  margin-bottom: 50px;
  width: 100%;
  height: 100%;
}

.img-wrap {
  cursor: move;
}

.img-preview-img {
  transition: all 0.3s;
  width: 100%;
}

.img-preview-btn-list {
  position: fixed;
  bottom: 30px;
  left: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.img-preview-btn-item {
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
}

.close-con {
  position: fixed;
  top: -50px;
  right: -50px;
  z-index: 100;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
}
.close-con:hover {
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}

.close-btn {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 20px;
}
.img-con {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.img-con:hover {
  background: rgba(0, 0, 0, 0.8);
}
.btn-img {
  width: 20px;
}
</style>
