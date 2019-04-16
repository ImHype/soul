/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) {
        return head;
    }

    let crt = head;
    let newHead;
    let prevEndNode;

    while (crt) {
        let i = 0;
        let temp;
        let tempPrevEndNode = prevEndNode;
        prevEndNode = crt;

        let count = 0;
        let countCrt = crt;

        while (count < k) {
            if (countCrt) {
                countCrt = countCrt.next;
                count++;
            } else {
                break;
            }
        }

        if (count == k) {
            while (i < k) {
                let next = crt.next;
                if (temp) {
                    crt.next = temp;
                }
    
                temp = crt;
                crt = next;
                i++;
            }
            if (tempPrevEndNode) {
                tempPrevEndNode.next = temp;
            }
        } else {
            if (tempPrevEndNode) {
                tempPrevEndNode.next = crt;
            }
            if (newHead) {
                break;
            } else {
                return head
            }
        }


        if (!newHead) {
            newHead = temp;
        }
        prevEndNode.next = null;
    }
    return newHead;
};

const l1 = new ListNode(1);
const l2 = new ListNode(2);
const l3 = new ListNode(3);
const l4 = new ListNode(4);
const l5 = new ListNode(5);
(
    (
        (
            l1.next = l2
        ).next = l3
    ).next = l4
).next = l5;


// console.log(l1);
const res = reverseKGroup(l1, 2);
console.log(res);
console.log(res.val);
console.log(res.next.val);
console.log(res.next.next.val);
console.log(res.next.next.next.val);
// console.log(res.next.next.next.next.val);