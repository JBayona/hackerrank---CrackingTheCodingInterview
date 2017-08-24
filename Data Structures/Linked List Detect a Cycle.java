/*
https://www.hackerrank.com/challenges/ctci-linked-list-cycle
*/

/*
Check out the resources on the page's right side to learn more about linked lists. 
The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.
A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided in the editor below. It has one parameter: a pointer to a Node 
object named that points to the head of a linked list. Your function must return a boolean denoting 
whether or not there is a cycle in the list. If there is a cycle, return true; otherwise, return false.

Note: If the list is empty,  will be null.
*/

/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    if(head == null || head.next == null){
        return false;
    }
    Node slow = head;
    Node fast = head;
    while(slow != null && fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
}
