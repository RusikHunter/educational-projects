// 1
var book = {
    title: "Bible",
    author: {
        name: "Jesus",
        surname: "Christ"
    },
    pages: [1, 2, 3, 4, 5]
};
var user = {
    id: 1,
    username: "dmfshove",
    email: "funnymoments610@gmail.com"
};
var someFreelancer = {
    id: 1,
    name: "sasha",
    department: "LSPD",
    hourlyRate: 14
};
function printMemberInfo(member) {
    console.log("Member type: ", member.type);
    if (member.type === "full") {
        console.log("Salary: ", member.salary);
    }
    else {
        console.log("Weekly salary: ", member.hourlyRate * member.hoursPerWeek);
    }
}
var programmer = {
    type: "full",
    id: 1323423,
    name: "alex",
    salary: 1460
};
var doctor = {
    type: "contract",
    id: 645645,
    name: "jahseh",
    hourlyRate: 19,
    hoursPerWeek: 38
};
printMemberInfo(programmer);
printMemberInfo(doctor);
