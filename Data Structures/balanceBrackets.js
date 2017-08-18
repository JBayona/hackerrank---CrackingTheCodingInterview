/*
https://www.hackerrank.com/challenges/ctci-balanced-brackets
*/

function balanceBrackets(array){
  let stack = [];
  let tmp ='';
  let top;
  let flag = true;
  map = {'{' : '}', '[' : ']', '(' : ')'};
  for(let i = 0; i < array.length; i++){
    let parenthesis = array[i].split('');
    for(let j = 0; j < parenthesis.length; j++){
      tmp = parenthesis[j];
      if(tmp in map){
        stack.push(tmp);
      }else{
        if(stack.length === 0){
          flag = false;
          break;
        }else{
          top = stack.pop();
          if(map[top] !== tmp){
            flag = false;
            break;
          }
        }
      }
    }
    if(stack.length === 0 && flag){
      console.log('YES');
    }else{
      console.log('NO');
    }
    stack = [];
    flag = true;
  }
}

array = ['{[()]}', '{[(])}', '{{[[(())]]}}'];
console.log(balanceBrackets(array));