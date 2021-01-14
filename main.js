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
    SLL.remove("notinlist");
    // removeDuplicates(SLL)
    // console.log(isEmpty(new LinkedList()))
    // console.log(size(SLL))
    // console.log(findPrevious(SLL, "First"))
    // console.log(findLast(new LinkedList()))
    // reverse(SLL.head)
    display(SLL)
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
    if (list.next === null){
         list.head = list;
         return;
    }
    reverse(list.next);
    list.next.next = list;
    list.next = null;
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

