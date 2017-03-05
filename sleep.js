export default class Sleeper{
  constructor(s){
    this.sleep = s; // 间隔时间
    this.step = 0;
    this.actions = [];
  }
  
  push(fn){
    this.actions.push(fn);
    return this;
  }
  
  _run_next(){
    if(this.step < this.actions.length){
      var action = this.actions[this.step];
      action();
      ++this.step;
      setTimeout(this._run_next,this.sleep);
    }
  }
  
  run(){
    this._run_next();
  }
  
}