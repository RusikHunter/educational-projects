class BinarySearchTree {
    root = new Node(20)

    // метод insert добавляет узел в дерево
    insert(node) {
        const nodeToInsert = node // перезаписываем для удобства узел на добавление

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        // объявляем цикл, пока он не завершит операцию по вставке
        while (true) {
            if (nodeToInsert.key === nodeToCheck.key) {
                console.log('The node with key ' + nodeToInsert.key + ' already exists.')

                return
            }

            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (nodeToInsert.key < nodeToCheck.key) {
                // проверяем, существует ли
                if (nodeToCheck.left !== null) {
                    let nextNodeToCheck = nodeToCheck.left // temp var

                    nodeToCheck = nextNodeToCheck

                    continue
                }

                nodeToCheck.left = nodeToInsert

                break
            } else {
                if (nodeToCheck.right !== null) {
                    let nextNodeToCheck = nodeToCheck.right // temp var

                    nodeToCheck = nextNodeToCheck

                    continue
                }

                nodeToCheck.right = nodeToInsert

                break
            }
        }
    }
}

class Node {
    constructor(key) {
        this.key = key

        this.left = null
        this.right = null
    }
}

const bst = new BinarySearchTree()

const someNode1 = new Node(19)
const someNode2 = new Node(21)
const someNode3 = new Node(138)
const someNode4 = new Node(8)
const errorNode = new Node(138)
const someNode5 = new Node(129)


bst.insert(someNode1)
bst.insert(someNode2)
bst.insert(someNode3)
bst.insert(someNode4)
bst.insert(errorNode)
bst.insert(someNode5)




console.log(bst.root)