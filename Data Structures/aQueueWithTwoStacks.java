/*
https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks
*/

/*
A queue is an abstract data type that maintains the order in which elements were added to it, 
allowing the oldest elements to be removed from the front and new elements to be added to the rear. 
This is called a First-In-First-Out (FIFO) data structure because the first 
element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process  queries, 
where each query is one of the following  types:

1 x: Enqueue element  into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.
*/

//Best option

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    public static class MyQueue<T> {
        Stack<T> s1 = new Stack<T>();
        Stack<T> s2 = new Stack<T>();

        public void enqueue(T value) { // Push onto newest stack
            if(s2.isEmpty()) s2.push(value);
            else s1.push(value);
        }

        public T peek() {
             return s2.peek();
        }

        public T dequeue() {
            /*Si tiene mas de un elemento nuestro stack s2, podemos
            retornar el primero que es el tope*/
            if(s2.size() > 1) return s2.pop();
            /*De lo contrario significa que tenemos solo un elemento
            entonces lo sacamos de la pila y insertamos todo de s1 a s2
            al hacer esta operacion el primer elemento agregado al stack s1
            estara en la cima del stack 2 y asi podemos retornarlo con un
            pop o si queremos consultarlo con un peek, en s2 tendremos en el
            tope del stack a los primeros elementos agregados*/
            T current = s2.pop();
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
            return current;
        }
    }

    
    public static void main(String[] args) {
        MyQueue<Integer> queue = new MyQueue<Integer>();
        
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        
        for (int i = 0; i < n; i++) {
            int operation = scan.nextInt();
            if (operation == 1) { // enqueue
                queue.enqueue(scan.nextInt());
            } else if (operation == 2) { // dequeue
                queue.dequeue();
            } else if (operation == 3) { // print/peek
                System.out.println(queue.peek());
            }
        }
        scan.close();
    }
}



//Alternative, not very good performance

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    public static class MyQueue<T> {
        Stack<T> s1 = new Stack<T>();
        Stack<T> s2 = new Stack<T>();

        public void enqueue(T value) { // Push onto newest stack
            //if(s1.isEmpty()) s1.push(value);
            while(!s1.isEmpty()){
                s2.push(s1.pop());
            }
            s2.push(value);
            while(!s2.isEmpty()){
                s1.push(s2.pop());
            }
        }

        public T peek() {
             return s1.peek();
        }

        public T dequeue() {
            return s1.pop();
        }
    }

    
    public static void main(String[] args) {
        MyQueue<Integer> queue = new MyQueue<Integer>();
        
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        
        for (int i = 0; i < n; i++) {
            int operation = scan.nextInt();
            if (operation == 1) { // enqueue
                queue.enqueue(scan.nextInt());
            } else if (operation == 2) { // dequeue
                queue.dequeue();
            } else if (operation == 3) { // print/peek
                System.out.println(queue.peek());
            }
        }
        scan.close();
    }
}