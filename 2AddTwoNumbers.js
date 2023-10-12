// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;
    var sum = 0;
    var carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
        sum = carry;
        carry = 0;
    }

    return newListNode.next;
}

// Create linked lists from arrays
function createLinkedListFromArray(arr) {
    var Head = new ListNode(0);
    var current = Head;
    for (var i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return Head.next;
}

var l1 = createLinkedListFromArray([2, 3, 4]);
var l2 = createLinkedListFromArray([4, 5, 6]);
console.log(addTwoNumbers(l1, l2));
