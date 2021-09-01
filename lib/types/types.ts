export interface IPreviewState {
  vm: any,
  src: string,
  isPreviewShow: boolean
}

export interface IBtnItem {
  btn: string,
  type: string,
  img_src: string
}


export interface IPreviewPopupState{
  imgSrc: string
  windWid: number
  windHei:number
  dragstartX: number
  dragstartY: number
  marginTopNum: number
  marginLeftNum: number
  defaultRotate: number
  defaultScaleY: number
  defaultScaleX: number
  imgClientHeight: number
  imgClientWidth: number
  defaultScaleXStyle: string
  defaultScaleYStyle: string
  btnList: IBtnItem[],
  changeStyle: {
    transform: string
  }
}

export interface IBtnTypeFunc {
  [key: string]: (state: IPreviewPopupState) => void,
}