// 1

interface Library {
    books: Array<Book>
}

interface Book {
    title: string,
    author: string,
    year: number,
    pages_count: number
}

const book1: Book = {
    title: "Some book 1",
    author: "Some author 1",
    year: 0,
    pages_count: 77
}

const book2: Book = {
    title: "Some book 2",
    author: "Some author 2",
    year: 1997,
    pages_count: 367
}

const library: Library = {
    books: [book1, book2]
}

// 2

interface App {
    users: Array<UserType>,
    isWorking: boolean,
    run: () => void
    stop: () => void
}

type scoreManipulation = (value?: number) => void

type UserType = Guest | Admin

interface User {
    id: number
    username: string
    score: number
}

interface Guest extends User {
    showScore: scoreManipulation
}

interface Admin extends User {
    showScore: scoreManipulation
    addScore: scoreManipulation
    getScore: scoreManipulation
}

const user1_guest: Guest = {
    id: 102984,
    username: "alex",
    score: 100,
    showScore: function () {
        console.log(this.score)
    }
}

const user2_admin: Admin = {
    id: 102985,
    username: "alex",
    score: 1000,
    showScore: function () {
        console.log(this.score)
    },
    addScore: function (value) {
        value ? this.score += value : this.score++
    },
    getScore: function (value) {
        value ? this.score -= value : this.score--
    }
}

const App: App = {
    users: [user1_guest, user2_admin],
    isWorking: true,
    run: () => console.log('App is running!'),
    stop: () => console.log('App is suspended!')
}

App.run()
App.users[0].showScore()
App.users[1].showScore()

if ('addScore' in App.users[1]) {
    App.users[1].addScore(10)
    App.users[1].showScore()
    App.users[1].addScore()
    App.users[1].showScore()
}

3

type Product = {
    id: number,
    title: string
}

type Order = {
    id: number
    product: Product,
    count: number,
    user: string
}

type OrderCountPreview = Pick<Order, "id" | "count">

type OrderWithoutUserInfo = Omit<Order, "user">

type OrderReadonly = Readonly<Order>

type OrderStatus = "no" | "processed" | "ready"





interface Shop {
    title: string,
    products: Array<Product>,
    order: Order | null,
    orderStates: Record<OrderStatus, boolean>
    makeOrder: (product: Product, count: number, user: string) => void,
    showOrder: () => void
    showOrderCountPreview: () => void
    showOrderWithoutUserInfo: () => void,
    makeOrderInfo: () => OrderReadonly,
    showOrderState: () => void
}









const cannabis: Product = {
    id: 109349,
    title: "Cannabis"
}

const heroin: Product = {
    id: 109350,
    title: "Heroin"
}




const shop: Shop = {
    title: "Online shop DRUGS 24/7 city",
    products: [cannabis, heroin],
    order: null,
    orderStates: {
        no: true,
        processed: false,
        ready: false
    },
    makeOrder: function (product, count, user) {
        const order: Order = {
            id: 123,
            product: product,
            count: count,
            user: user
        }

        this.order = order
        this.orderStates.no = false
        this.orderStates.processed = true
    },
    showOrder: function () {
        console.log(this.order ? this.order : "No order")
    },
    showOrderCountPreview: function () {
        const orderCountPreview: OrderCountPreview = {
            id: this.order?.id ? this.order.id : 0,
            count: this.order?.count ? this.order.count : 0
        }

        console.log(orderCountPreview)
    },
    showOrderWithoutUserInfo: function () {
        const orderWithoutUserInfo: OrderWithoutUserInfo = {
            id: this.order?.id ? this.order.id : 0,
            product: this.order?.product ? this.order?.product : 0,
            count: this.order?.count ? this.order.count : 0
        }
        console.log(orderWithoutUserInfo)
    },
    makeOrderInfo: function () {
        const orderInfo: OrderReadonly = {
            id: this.order?.id ? this.order.id : 0,
            product: this.order?.product ? this.order.product : 0,
            count: this.order?.count ? this.order.count : 0,
            user: this.order?.user ? this.order.user : 0
        }

        return orderInfo
    },
    showOrderState: function () {
        for (const state in this.orderStates) {
            if (this.orderStates[state as OrderStatus]) {
                console.log(state)
            }
        }
    }
}

shop.showOrderState()
shop.makeOrder(shop.products[1], 1, "dmfshove")
shop.showOrder()
shop.showOrderCountPreview()
shop.showOrderWithoutUserInfo()
const orderInfo = shop.makeOrderInfo()
console.log(orderInfo)
shop.showOrderState()

