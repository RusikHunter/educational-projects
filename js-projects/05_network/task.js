let networkID = 0
let nodeID = 0

class Network {
    nodesList = []

    constructor(title) {
        this.title = title
        this.ID = networkID

        networkID++
    }

    createNode(title, model, url) {
        const node = new Node(title, model, url, this)

        this.nodesList.push(node)
    }

    // todo delete node

    async routeMessage(message) {
        const { urlOfSender, urlOfRecipient, text } = message

        const recipientNode = this.nodesList.find(node => node.url === urlOfRecipient)

        console.log(`Node [${urlOfSender}] is sending ${text} to node [${recipientNode.url}]`)

        recipientNode.receiveMessage(text)
    }

    logStat() {
        console.log(`[${this.ID}] ${this.title}\n\nNodes:\n`)
        this.nodesList.forEach(node => {
            console.log(`[${node.ID}] ${node.title} ${node.model}`)
        })
    }
}

class Node {
    messageQueue = []

    constructor(title, model, url, network) {
        this.ID = nodeID
        this.title = title
        this.model = model
        this.url = url
        this.network = network

        nodeID++
    }

    async sendMessage(url, text) {
        const messageToSending = new Message(this.url, url, text)

        this.network.routeMessage(messageToSending)
    }

    async receiveMessage(text) {
        const receivedMessage = text

        console.log(`${this.url} received ${receivedMessage}`)
    }
}


class Message {
    constructor(urlOfSender, urlOfRecipient, text) {
        this.urlOfSender = urlOfSender
        this.urlOfRecipient = urlOfRecipient
        this.text = text
    }
}

const network = new Network('My network')

network.createNode('Computer', 'AMD-Ryzen-5-2600', 'https://www.google.com/123')
network.createNode('Laptop', 'Intel-Celeron-2.3KHz', 'https://www.google.com/fdfdg')
network.createNode('iPhone', 'RTX-3090', 'https://www.google.com/jidjgijigjf')

network.logStat()

network.nodesList[0].sendMessage('https://www.google.com/jidjgijigjf', 'Hello!!!!!!')
network.nodesList[2].sendMessage('https://www.google.com/123', 'Also hello!!!!!!')
console.log('Some...')