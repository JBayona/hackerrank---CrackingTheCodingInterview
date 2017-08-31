function Tries(){
    this.node = [];
    this.count = [];
    this.state = 1;
    this.MAX = 2100000;
}

Tries.prototype.clearNode = function(){
    for(let i = 0; i < this.MAX; i++){
      this.node[i] = new Array(26).fill(-1);
    }
}

Tries.prototype.clearCount = function(){
    for(let i = 0; i < this.MAX; i++){
      this.count[i] = new Array(26).fill(0);
    }
}

Tries.prototype.add = function(str){
    let state = 0; //Representa un nivel diferente el state, cada nivel es una letra
    for(let i = 0; i < str.length; i++){
      let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
      if(this.node[state][index] === -1){
        this.node[state][index] = this.state++;
      }
      state = this.node[state][index];
      this.count[state][index]++;
    }
}

function main(commands){
    trie = new Tries();
    //Init function
    trie.clearNode();
    trie.clearCount();
    for(let i = 0; i < commands.length; i++){
      let tmp = commands[i].split(' ');
      let command = tmp[0];
      let value = tmp[1];
      //Init functions
      if(command === 'add'){
        trie.add(value);
      }
    }
    console.log(trie);
}

commands = ['add hack', 'add hackerrank'];
console.log(main(commands));