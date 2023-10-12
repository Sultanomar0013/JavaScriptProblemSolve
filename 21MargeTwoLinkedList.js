class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var mergeTwoLists = function (l1, l2) {

    let newList = new ListNode(0);
    let headOfNewList = newList;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next;
        }
        newList = newList.next;
    }
    if (l1 == null) {
        newList.next = l2;
    }
    else {
        newList.next = l1;
    }

    return headOfNewList.next;
};

const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(4);

const list2 = new ListNode(4);
list2.next = new ListNode(5);
list2.next.next = new ListNode(6);

const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);


//.............................................//
/* 
var mergeTwoLists = function (l1, l2) {

    if (l1 == null) return l2;
    if (l2 == null) return l1;


    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }

    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}; */



//...................................................//
/* var mergeTwoLists = function (list1, list2) {
    let newlist = new ListNode(0);
    let head = newlist;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            newlist.next = list1;
            list1 = list1.next;
        } else {
            newlist.next = list2;
            list2 = list2.next;
        }
        newlist = newlist.next;
    }

    if (list1 == null) {
        newlist.next = list2;
    } else {
        newlist.next = list1
    }
}; */