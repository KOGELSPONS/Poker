class PlayerProfile {
  constructor(x,y,w,h,text,chips) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.text = text
    this.chips = chips
  }
  show(){
    fill(255,0,0);
    rect(this.x, this.y, this.w, this.h);
    fill(0, 255, 0)
    textAlign(LEFT, TOP);
    text(this.text, this.x, this.y);
    text(this.chips + " $", this.x, this.y+50);
  }
}