class BinarySearchTree {
    root = null

    #removeLeaf(node) {
        const searchedNode = node

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        while (nodeToCheck !== null) {
            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (searchedNode.key < nodeToCheck.key) {
                if (nodeToCheck.left === searchedNode) {
                    nodeToCheck.left = null

                    return
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === searchedNode) {
                    nodeToCheck.right = null

                    return
                }

                nodeToCheck = nodeToCheck.right
            }
        }
    }

    // метод search осуществляет поиск по дереву
    search(key) {
        // проверка на число
        if (typeof key !== 'number') {
            throw new Error('Invalid node')
        }

        const searchedNode = new Node(key) // перезаписываем для удобства искомый узел

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        while (true) {
            // проверка на совпадение
            if (searchedNode.key === nodeToCheck.key) {
                console.log('Node ' + nodeToCheck.key + ' found')

                return nodeToCheck
            }

            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (searchedNode.key < nodeToCheck.key) {
                if (nodeToCheck.left === null) {
                    return console.log('Node ' + key + ' not found')
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === null) {
                    return console.log('Node ' + key + ' not found')
                }

                nodeToCheck = nodeToCheck.right
            }
        }
    }

    // метод insert добавляет узел в дерево
    insert(node) {
        // если корневой узел пустой - добавить
        if (this.root === null) {
            this.root = node

            return
        }

        // проверка на число
        if (!(node instanceof Node)) {
            throw new Error('Invalid node')
        }

        const nodeToInsert = node // перезаписываем для удобства узел на добавление

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        // объявляем цикл, пока он не завершит операцию по вставке
        while (true) {
            // проверка на уже существующий узел
            if (nodeToInsert.key === nodeToCheck.key) {
                console.log('The node with key ' + nodeToInsert.key + ' already exists.')

                return
            }

            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (nodeToInsert.key < nodeToCheck.key) {
                if (nodeToCheck.left === null) {
                    nodeToCheck.left = nodeToInsert

                    break;
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === null) {
                    nodeToCheck.right = nodeToInsert

                    break
                }

                nodeToCheck = nodeToCheck.right
            }
        }
    }

    delete(key) {
        const nodeToDelete = this.search(key)

        if (!nodeToDelete) return

        if (nodeToDelete.right === null && nodeToDelete.left === null) {
            this.#removeLeaf(nodeToDelete)
        }
    }
}

class Node {
    constructor(key, value = 'default') {
        this.key = key
        this.value = value

        this.left = null
        this.right = null
    }
}

const bst = new BinarySearchTree()

const someNode1 = new Node(19)
const someNode2 = new Node(21)
const someNode3 = new Node(138)
const someNode4 = new Node(8)
const someNode5 = new Node(129, 'some value...')
const someNode6 = new Node(7)



bst.insert(someNode1)
bst.insert(someNode2)
bst.insert(someNode3)
bst.insert(someNode4)
bst.insert(someNode5)
bst.insert(someNode6)

bst.delete(129)

console.log(bst.root)
