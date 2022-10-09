class Popups {
  constructor(x,y,w,h, timer,text1, text2, text3) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.timer = timer;
    popupFade = this.timer;
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
  }
  show(){
    fill(0,255,0, popupFade);
    rect(this.x, this.y, this.w, this.h);
    fill(255,0,0, popupFade)
    textAlign(LEFT, TOP);
    text(this.text1, this.x, this.y)
    text(this.text2, this.x, this.y+50)
    text(this.text3, this.x, this.y+100)
    popupFade += fadeAmount; 

  }
}