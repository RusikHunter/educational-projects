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
    insert(key, value = 'default') {
        // если корневой узел пустой - добавить
        if (this.root === null) {
            this.root = new Node(key, value)

            return
        }

        // проверка на число
        if (typeof key !== 'number') {
            throw new Error('Invalid node')
        }

        const nodeToInsert = new Node(key, value) // перезаписываем для удобства узел на добавление

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
        } else {
            this.#replaceNodeWithTwoChild(nodeToDelete)
        }
    }

    getNodesInOrder() {
        const nodes = []

        this.#inOrder(this.root, nodes)

        return nodes
    }

    getNodesPreOrder() {
        const nodes = []

        this.#preOrder(this.root, nodes)

        return nodes
    }

    getNodesPostOrder() {
        const nodes = []

        this.#postOrder(this.root, nodes)

        return nodes
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

    #replaceNodeWithTwoChild(node) {
        const nodeToDelete = node // удаляемый узел = 100

        const temporaryNode = nodeToDelete.right // временно копируем правый подузел удаляемого узла

        let iterableNode = nodeToDelete.left // итерируемый узел для поиска наибольшего узла левого поддерева (изначально - это левый подузел удаляемого узла = 80) 

        let nodeToCheck = this.root // изначально начинаем поиск с корневого узла - root 

        let largestNodeOfLeftSubtree = null // наибольший узел левого поддерева (нужен для того, чтобы в его правый подузел вставить сохраняемый узел) = 91

        while (largestNodeOfLeftSubtree === null) {
            if (iterableNode.right === null) {
                largestNodeOfLeftSubtree = iterableNode // 91

                break
            }

            iterableNode = iterableNode.right
        }

        while (nodeToCheck !== null) {
            // если ключ добавляемого узла меньше ключа текущего проверяемого узла, то тогда идём в левый подузел, если больше - в правый
            if (nodeToDelete.key < nodeToCheck.key) {
                if (nodeToCheck.left === nodeToDelete) {
                    nodeToCheck.left = nodeToCheck.left.left
                }

                nodeToCheck = nodeToCheck.left
            } else {
                if (nodeToCheck.right === nodeToDelete) {
                    // 

                    nodeToCheck.right = nodeToCheck.right.left
                }

                nodeToCheck = nodeToCheck.right
            }
        }

        largestNodeOfLeftSubtree.right = temporaryNode
    }

    #inOrder(node, result) {
        if (node.left !== null) {
            this.#inOrder(node.left, result)
        }

        result.push(node.key)

        if (node.right !== null) {
            this.#inOrder(node.right, result)
        }

        return
    }

    #preOrder(node, result) {
        result.push(node.key)

        if (node.left !== null) {
            this.#preOrder(node.left, result)
        }

        if (node.right !== null) {
            this.#preOrder(node.right, result)
        }

        return
    }

    #postOrder(node, result) {
        if (node.left !== null) {
            this.#postOrder(node.left, result)
        }

        if (node.right !== null) {
            this.#postOrder(node.right, result)
        }

        result.push(node.key)

        return
    }
}

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value

        this.left = null
        this.right = null
    }
}

const bst = new BinarySearchTree()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

const arr = bst.getNodesPostOrder()

console.log(arr)
