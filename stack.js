# Operations that we are going to implement:
# Push → Add an element to the stack.
# Pop → Delete an element from the stack.
# Peek → Get the top element of the stack.
# Length → Return the length of the stack.
# Search → Search for the element in the stack.
# IsEmpty → Check if the stack is empty.
# Print → Print the elements of the stack.

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
    
    pop() {
      if( this.isEmpty() === false ) {
        this.top = this.top -1;
        return this.data.pop(); // removes the last element
      }
    }
    
    peek() {
      return this.data[this.top -1];
    }
    
    length() {
      return this.top;
    }
    
    search(item) {
      for(i=0; i<this.length(); i++) {
        if(this.data[i] === item) {
          return this.data[i];
        }
      }
    }
    
    isEmpty() {
      return this.top === 0;
    }
    
    print() {
     var top = this.top - 1; // because top points to index where new    element to be inserted
     while(top >= 0) { // print upto 0th index
      console.log(this.data[top]);
      top--;
     }
    }
    
    reverse() {
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       console.log(this.data[index]);
    }
}
