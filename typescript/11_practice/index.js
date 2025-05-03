// 1
function identity(value) {
    return value;
}
var userRepository = {
    values: [],
    add: function (value) {
        this.values.push(value);
    },
    delete: function (value) {
        if (this.values.length <= 0)
            return;
        var indexToRemove = this.values.indexOf(value);
        if (indexToRemove === -1) {
            console.log("Value not found");
            return;
        }
        this.values.splice(indexToRemove, 1);
    },
    update: function (value) {
        var updatedValues = this.values.map(function (valueToUpdate) { return valueToUpdate + value; });
        this.values = updatedValues;
    },
    getElementByID: function (id) {
        if (this.values[id] === undefined) {
            console.log("Value not found");
            return -1;
        }
        return this.values[id];
    },
    logValues: function () {
        console.log("Values: ", this.values);
    }
};
userRepository.logValues();
userRepository.add("123");
userRepository.add("456");
userRepository.add("789");
userRepository.logValues();
userRepository.delete("75464589");
userRepository.delete("789");
userRepository.logValues();
userRepository.update("abc");
userRepository.logValues();
console.log(userRepository.getElementByID(4));
console.log(userRepository.getElementByID(1));
