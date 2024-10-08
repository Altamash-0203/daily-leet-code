/*
725. Split Linked List in Parts
Medium
Topics
Companies
Hint
Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.

 

Example 1:


Input: head = [1,2,3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
Example 2:


Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.





*/


// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var splitListToParts = function(head, k) {
    let length = 0;
    let current = head;
    
    // Step 1: Calculate the total length of the linked list
    while (current) {
        length++;
        current = current.next;
    }

    // Step 2: Determine the size of each part
    const partSize = Math.floor(length / k);
    let extraNodes = length % k;

    const result = new Array(k).fill(null);
    current = head;
    
    // Step 3: Split the linked list into parts
    for (let i = 0; i < k && current; i++) {
        result[i] = current;
        let partLength = partSize + (extraNodes > 0 ? 1 : 0);
        extraNodes--;

        // Advance through the current part
        for (let j = 1; j < partLength; j++) {
            current = current.next;
        }
        
        // Break the current part from the next one
        let nextPart = current.next;
        current.next = null;
        current = nextPart;
    }

    return result;
};
