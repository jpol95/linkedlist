const LinkedList = require('./LinkedList')

function main(){
    const SLL = new LinkedList();
    SLL.insertLast("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    SLL.insertBefore("Boomer", "Johnson");
    SLL.insertBefore("Doesntexist", "JJjjf");
    SLL.insertAfter("Apollo", "Second")
    SLL.insertBefore("Apollo", "First");
    SLL.insertAt(6, "Kenji");
    // SLL.insertAt(7, "Kenji");
    // SLL.insertAt(8, "Starbuck")
    SLL.insertAfter("Helo", "Hiya");
    SLL.remove("Boomer");
    // SLL.remove("Helo")
    SLL.remove("notinlist");
    // removeDuplicates(SLL)
    // console.log(isEmpty(new LinkedList()))
    // console.log(size(SLL))
    // console.log(findPrevious(SLL, "First"))
    // console.log(findLast(new LinkedList()))
    // reverse(SLL.head)
    // reverse(SLL)
    // console.log(hasCycle(SLL))
    console.log(middle(SLL))
    display(SLL)
}

const middle = (list) => {
    let currentNode = list.head;
    let twiceNode = list.head;

    while (twiceNode !== null && twiceNode.next !== null){
        twiceNode = twiceNode.next.next;
        currentNode = currentNode.next;
    }
    return currentNode;
}

const display = (list) => {
    let result = '';
    let currentNode = list.head;
    while (currentNode !== null){
        result += `${currentNode.val} --> ` 
        currentNode = currentNode.next;
    }
    console.log(result.slice(0, result.length - 4));
}

const reverse = (list) => {
    let current = list.head;
    let originalHead = list.head;
    let tempNext;
    let temp = current.next;
    while(temp !== null){
        tempNext = temp.next;
        temp.next = current;
        current = temp;
        temp = tempNext;
    }
    list.head = current;
    originalHead.next = null;
}


const thirdFromLast = (list) => {
    let currentNode = list.head;
    if (!currentNode || !currentNode.next || !currentNode.next.next) return null;
    while (currentNode.next.next.next !== null){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function removeDuplicates(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.val === current.val) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}


const hasCycle = (list) => {
    let currentNode = list.head;
    while (currentNode !== null){
        if (currentNode.flagged) return true;
        currentNode.flagged = true;
        currentNode = currentNode.next;
    }
    return false;
}

const findPrevious = (list, item) => {
    let currentNode = list.head;
    while (currentNode.next !== null && currentNode.next.val !== item){
        currentNode = currentNode.next;
    }
    if (currentNode.next === null) return null
    return currentNode;
}

const findLast = (list) => {
    let currentNode = list.head;
    if (!currentNode) return null;
    while (currentNode.next !== null){
        currentNode = currentNode.next;
    }
    return currentNode;
}

const size = (list) => {
    let currentNode = list.head;
    let i;
    for (i = 0; currentNode !== null; i++){
        currentNode = currentNode.next;
    }
    return i;
}


const isEmpty = (list) => {
    return !list.head
}

main()

