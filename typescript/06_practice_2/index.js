// // 1
var cannabis = {
    id: 109349,
    title: "Cannabis"
};
var heroin = {
    id: 109350,
    title: "Heroin"
};
var shop = {
    title: "Online shop DRUGS 24/7 city",
    products: [cannabis, heroin],
    order: null,
    orderStates: {
        no: true,
        processed: false,
        ready: false
    },
    makeOrder: function (product, count, user) {
        var order = {
            id: 123,
            product: product,
            count: count,
            user: user
        };
        this.order = order;
        this.orderStates.no = false;
        this.orderStates.processed = true;
    },
    showOrder: function () {
        console.log(this.order ? this.order : "No order");
    },
    showOrderCountPreview: function () {
        var _a, _b;
        var orderCountPreview = {
            id: ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id) ? this.order.id : 0,
            count: ((_b = this.order) === null || _b === void 0 ? void 0 : _b.count) ? this.order.count : 0
        };
        console.log(orderCountPreview);
    },
    showOrderWithoutUserInfo: function () {
        var _a, _b, _c, _d;
        var orderWithoutUserInfo = {
            id: ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id) ? this.order.id : 0,
            product: ((_b = this.order) === null || _b === void 0 ? void 0 : _b.product) ? (_c = this.order) === null || _c === void 0 ? void 0 : _c.product : 0,
            count: ((_d = this.order) === null || _d === void 0 ? void 0 : _d.count) ? this.order.count : 0
        };
        console.log(orderWithoutUserInfo);
    },
    makeOrderInfo: function () {
        var _a, _b, _c, _d;
        var orderInfo = {
            id: ((_a = this.order) === null || _a === void 0 ? void 0 : _a.id) ? this.order.id : 0,
            product: ((_b = this.order) === null || _b === void 0 ? void 0 : _b.product) ? this.order.product : 0,
            count: ((_c = this.order) === null || _c === void 0 ? void 0 : _c.count) ? this.order.count : 0,
            user: ((_d = this.order) === null || _d === void 0 ? void 0 : _d.user) ? this.order.user : 0
        };
        return orderInfo;
    },
    showOrderState: function () {
        for (var state in this.orderStates) {
            if (this.orderStates[state]) {
                console.log(state);
            }
        }
    }
};
shop.showOrderState();
shop.makeOrder(shop.products[1], 1, "dmfshove");
shop.showOrder();
shop.showOrderCountPreview();
shop.showOrderWithoutUserInfo();
var orderInfo = shop.makeOrderInfo();
console.log(orderInfo);
shop.showOrderState();
