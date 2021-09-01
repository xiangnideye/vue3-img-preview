import { handleBtnSpinLeft, handleBtnSpinRight, handleBtnReset, handleBtnFlipHorizontalX, handleBtnFlipHorizontalY, handleBtnImgIncreased, handleBtnImgreduced } from './methods'

import { IBtnItem, IBtnTypeFunc } from '../../types/types'

export const BTN_TYPE:IBtnItem[] = [
  {
    btn: "left",
    type: "handleBtnSpinLeft",
    img_src: require("../img/xiangzuoxuanzhuan.png"),
  },
  {
    btn: "right",
    type: "handleBtnSpinRight",
    img_src: require("../img/xiangyouxuanzhuan.png"),
  },
  {
    btn: "reset",
    type: "handleBtnReset",
    img_src: require("../img/zhongzhi.png"),
  },
  {
    btn: "flip horizontal Y",
    type: "handleBtnFlipHorizontalY",
    img_src: require("../img/shangxia.png"),
  },
  {
    btn: "flip horizontal X",
    type: "handleBtnFlipHorizontalX",
    img_src: require("../img/zuoyou.png"),
  },
  {
    btn: "ImgIncreased",
    type: "handleBtnImgIncreased",
    img_src: require("../img/fangda.png"),
  },
  {
    btn: "Imgreduced",
    type: "handleBtnImgreduced",
    img_src: require("../img/suoxiao.png"),
  },
]

export const BTNTYPE_FUNC:IBtnTypeFunc = {
  handleBtnReset: handleBtnReset,
  handleBtnSpinLeft: handleBtnSpinLeft,
  handleBtnSpinRight: handleBtnSpinRight,
  handleBtnImgreduced: handleBtnImgreduced,
  handleBtnImgIncreased: handleBtnImgIncreased,
  handleBtnFlipHorizontalY: handleBtnFlipHorizontalY,
  handleBtnFlipHorizontalX: handleBtnFlipHorizontalX,
}