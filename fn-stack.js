//一个简单的函数队列实现
export default class FnStack{
  constructor(){
    this.index = 0;
    this.stack = [];
  }
  
  push(fn){
      this.stack.push(fn);
      return this;
  }
  
  next(){
    if(this.index < this.stack.length){
      var fn = this.stack[this.index];
      ++this.index;
      
      if(typeof fn === 'function') fn(this.next.bind(this));
    }
  }
}