function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var toArray = (l) => {
  let node = l;
  let results = [node.val];

  while(node.next) {
    node = node.next;
    results.push(node.val);
  }

  return results;
}

var toList = (arr) => {
  if (arr.length === 0) return null;

  var head = node = new ListNode(arr[0]);
  if (arr.length === 1) return head;

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    node.next = new ListNode(item);
    node = node.next;
  }

  return head;
}

var addTwoNumbers = function(l1, l2) {
  const num1 = toArray(l1).reverse();
  const num2 = toArray(l2).reverse();
  const arr = num1.length > num2.length ? num1: num2;
  const another = num1.length > num2.length ? num2: num1;

  const results = [];

  let cur = 0;
  const anotherSize = another.length;
  let isAdd = false;
  let i = arr.length - 1;

  while (i >= 0 || isAdd) {
    let result;
    const item = arr[i] || 0;
    cur++;

    const item2 = another[anotherSize - cur] || 0;
    let sum = item + item2;

    if (isAdd) {
      sum += 1;
      isAdd = false;
    }

    if (sum >= 10) {
      result = sum - 10;
      isAdd = true;
    } else {
      result = sum;
    }

    results.push(result);
    i--;
  }

  const list = toList(results);
  return list;
};

console.log(toArray(addTwoNumbers(toList([2, 4, 3]), toList([5, 6, 4]))));