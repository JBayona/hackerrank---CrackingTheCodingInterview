/*
We're going to make our own Contacts application! The application must perform two types of operations:

add name, where  is a string denoting a contact name. This must store  as a new contact in the application.
find partial, where  is a string denoting a partial name to search the application for. It must count the number of 
contacts starting with  and print the count on a new line.
Given  sequential add and find operations, perform each operation in order.

Input Format

The first line contains a single integer, , denoting the number of operations to perform. 
Each line  of the  subsequent lines contains an operation in one of the two forms defined above.

Constraints

It is guaranteed that  and  contain lowercase English letters only.
The input doesn't have any duplicate  for the  operation.
Output Format

For each find partial operation, print the number of contact names starting with  on a new line.

Sample Input

4
add hack
add hackerrank
find hac
find hak

https://www.hackerrank.com/challenges/ctci-contacts
*/

function main(array) {
    
  var trie = {count:0,children:{}};
    
  for(var i = 0; i < array.length; i++){
      var op_temp = array[i].split(' ');
      var op = op_temp[0];
      var contact = op_temp[1];
      
      if(op=='add'){
          add(contact);
      }else{
          console.log(count(contact));
      }
  }
   
   /*
   trie = {
    count: 0,
    children: {
      h : {
      count: 1,
      children: {
        a : {
          count: 1,
          chilldren : {
            c: {
              count: 1,
              children: {
                k: {
                  count: 1,
                  children: {
                    ...
                  }
                }
              }
            }
          }
        }
      }
    }
   }
  */ 
  function add(s){
      //Node is the object we declare of the beginning
      var node = trie;
      for (var i = 0; i < s.length; i++) {
          /*Si ya tenemos el trie definido, asignamos ese, de lo contrario
          creamos un objeto con la clave, en este caso será algo como h:{count: 0, children {}}*/
          node.children[s[i]] = node.children[s[i]] || {count:0,children:{}};
          /*Movemos el nodo al actual*/
          node = node.children[s[i]];
          /*Incrementamos el count*/
          node.count++;
      };
  }
    
  function count(s){
      var node = trie;
      /*Recorremos el string*/
      for (var i = 0; i < s.length; i++) {
        /*Si no encontramos el caracter significa
        que no tenemos ese nodo en nuestro trie y
        retornamos cero*/
          if (!node.children[s[i]]) {
              return 0;
          }
          /*En caso contrario si lo encontramos vamos recorriendo
          */
          node = node.children[s[i]];
      };
      /*Ya que lo recorrimos habremos registrado el nùmero de veces
      que lo encontramos y regresamos el nodo*/
      return node.count
  }

}

var array = [
  "add hack",
  "add hackerrank",
  "find hac",
  "find hak"
]
console.log(main(array));