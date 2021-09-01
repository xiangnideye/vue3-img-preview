import { IPreviewPopupState } from '../../types/types'

// 计算图片位置和大小
export const computedImgPosi = (marLeft: number, marTop: number, width: number) => {
  return {
    "margin-left": marLeft + "px",
    "margin-top": marTop + "px",
    width: width + "px",
  }
}

export const defaultImgPosi = (state: IPreviewPopupState) => {
  state.marginLeftNum = (state.windWid - state.imgClientWidth) / 2;
  state.marginTopNum = (state.windHei - state.imgClientHeight) / 2;
}

// 监听窗口变化
export const windowResize = (state: IPreviewPopupState) => {
  state.windWid = document.documentElement.clientWidth || document.body.clientWidth,
    state.windHei = document.documentElement.clientHeight || document.body.clientHeight

  defaultImgPosi(state)
}

// 左旋转
export const handleBtnSpinLeft = (state: IPreviewPopupState) => {
  const rotate = (state.defaultRotate -= 90);
  console.log(1);
  state.changeStyle.transform = `rotate(${rotate}deg)`;
}
// 右旋转
export const handleBtnSpinRight = (state: IPreviewPopupState) => {
  const rotate = (state.defaultRotate += 90);
  state.changeStyle.transform = `rotate(${rotate}deg)`;
}
// 重置
export const handleBtnReset = (state: IPreviewPopupState) => {
  state.defaultRotate = 0;
  state.changeStyle.transform = `none`;
  state.imgClientWidth = 300;
}
// 左右翻转
export const handleBtnFlipHorizontalX = (state: IPreviewPopupState) => {
  state.defaultScaleXStyle = state.defaultScaleX % 2 ? "scaleX(-1)" : "none";
  state.changeStyle.transform = mergeScaleOptions(state.defaultScaleXStyle, state.defaultScaleYStyle);
  state.defaultScaleX++;
}
// 上下翻转
export const handleBtnFlipHorizontalY = (state: IPreviewPopupState) => {
  state.defaultScaleYStyle = state.defaultScaleY % 2 ? "scaleY(-1)" : "none";
  state.changeStyle.transform = mergeScaleOptions(state.defaultScaleXStyle, state.defaultScaleYStyle);
  state.defaultScaleY++;
}
// 图片放大
export const handleBtnImgIncreased = (state: IPreviewPopupState) => {
  const increasedWidth = state.imgClientWidth * 0.1;
  const increasedHeight = state.imgClientHeight * 0.1;

  state.imgClientWidth += state.imgClientWidth * 0.1;
  state.marginLeftNum -= increasedWidth / 2;
  state.marginTopNum -= increasedHeight / 2;

}
// 图片缩小
export const handleBtnImgreduced = (state: IPreviewPopupState) => {
  const increasedWidth = state.imgClientWidth * 0.1;
  const increasedHeight = state.imgClientHeight * 0.1;

  state.imgClientWidth -= state.imgClientWidth * 0.1;
  state.marginLeftNum += increasedWidth / 2;
  state.marginTopNum += increasedHeight / 2;
}
// 合并 Scale 属性
export const mergeScaleOptions = (x: string, y: string) => {
  let result = "";
  if (x == "none" && y == "none") {
    result = "none";
  } else if (x == "none" && y !== "none") {
    result = `${y}`;
  } else if (x !== "none" && y == "none") {
    result = `${x}`;
  } else if (x !== "none" && y !== "none") {
    result = `${x} ${y}`;
  }

  return result;
}

export const dragover = (event: MouseEvent, state: IPreviewPopupState) => {
  event.preventDefault();
  state.marginLeftNum = event.clientX - state.dragstartX;
  state.marginTopNum = event.clientY - state.dragstartY;
}

export const moveDragstart = (event: MouseEvent, state: IPreviewPopupState) => {
  state.dragstartX = event.offsetX;
  state.dragstartY = event.offsetY;
}

export const drop = (event: MouseEvent, state: IPreviewPopupState) => {
  state.marginLeftNum =
    event.clientX - state.dragstartX >= 0
      ? event.clientX - state.dragstartX
      : 0;
  state.marginTopNum =
    event.clientY - state.dragstartY >= 0
      ? event.clientY - state.dragstartY
      : 0;
}