class BinarySearchTree {
    root = null

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
    insert(key) {
        // если корневой узел пустой - добавить
        if (this.root === null) {
            this.root = new Node(key)

            return
        }

        // проверка на число
        if (typeof key !== 'number') {
            throw new Error('Invalid node')
        }

        const nodeToInsert = new Node(key) // перезаписываем для удобства узел на добавление

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

    // удаление элемента
    delete(key) {
        const nodeToDelete = this.search(key)

        if (!nodeToDelete) return

        // логика удаления, если элемент на удаление не имеет потомков
        if (nodeToDelete.right === null && nodeToDelete.left === null) {
            this.#removeLeaf(nodeToDelete)
            // логика удаления, если элемент на удаление имеет одного потомка
        } else if (nodeToDelete.right === null && nodeToDelete.left !== null || nodeToDelete.right !== null && nodeToDelete.left === null) {
            this.#replaceNodeWithChild(nodeToDelete)
        }
    }

    #removeLeaf(node) {
        const nodeToDelete = node // искомый узел, который нужно удалить

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        while (nodeToCheck !== null) {
            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (nodeToDelete.key < nodeToCheck.key) {
                if (nodeToCheck.left === nodeToDelete) {
                    nodeToCheck.left = null

                    return
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === nodeToDelete) {
                    nodeToCheck.right = null

                    return
                }

                nodeToCheck = nodeToCheck.right
            }
        }
    }

    #replaceNodeWithChild(node) {
        const nodeToDelete = node // искомый узел, который нужно удалить

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root

        while (nodeToCheck !== null) {
            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (nodeToDelete.key < nodeToCheck.key) {
                if (nodeToCheck.left === nodeToDelete) {
                    if (nodeToCheck.left.right !== null && nodeToCheck.left.left === null) {
                        nodeToCheck.left = nodeToCheck.left.right
                    } else {
                        nodeToCheck.left = nodeToCheck.left.left
                    }
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === nodeToDelete) {
                    if (nodeToCheck.right.right !== null && nodeToCheck.right.left === null) {
                        nodeToCheck.right = nodeToCheck.right.right
                    } else {
                        nodeToCheck.right = nodeToCheck.right.left
                    }
                }

                nodeToCheck = nodeToCheck.right
            }
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

bst.insert(50)
bst.insert(100)
bst.insert(120)
bst.insert(130)
bst.insert(125)
bst.insert(10)
bst.insert(80)
bst.insert(70)
bst.insert(69)
bst.insert(71)
bst.insert(119)
bst.insert(90)
bst.insert(200)

bst.delete(80)




console.log(bst.root)
