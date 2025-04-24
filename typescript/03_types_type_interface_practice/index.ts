// 1

type AuthorName = {
    name: string
    surname: string
}

interface Book {
    title: string
    author: AuthorName
    pages: Array<number>
}

const book: Book = {
    title: "Bible",
    author: {
        name: "Jesus",
        surname: "Christ"
    },
    pages: [1, 2, 3, 4, 5]
}

// 2

type UserID = string | number

interface UserProfile {
    id: UserID,
    username: string,
    email: string
}

const user: UserProfile = {
    id: 1,
    username: "dmfshove",
    email: "funnymoments610@gmail.com"
}

// 3

interface Employee {
    id: number,
    name: string,
    department: string
}

interface Freelancer {
    id: number,
    name: string,
    hourlyRate: number
}

type _Worker = Employee | Freelancer

const someFreelancer: _Worker = {
    id: 1,
    name: "sasha",
    department: "LSPD",
    hourlyRate: 14
}

// 4

interface FullTimeEmployee {
    type: 'full'
    id: number
    name: string
    salary: number
}

interface Contractor {
    type: 'contract'
    id: number
    name: string
    hourlyRate: number
    hoursPerWeek: number
}

type TeamMember = FullTimeEmployee | Contractor

function printMemberInfo(member: TeamMember): void {
    console.log("Member type: ", member.type)

    if (member.type === "full") {
        console.log("Salary: ", member.salary)
    } else {
        console.log("Weekly salary: ", member.hourlyRate * member.hoursPerWeek)
    }
}

const programmer: TeamMember = {
    type: "full",
    id: 1323423,
    name: "alex",
    salary: 1460
}

const doctor: TeamMember = {
    type: "contract",
    id: 645645,
    name: "jahseh",
    hourlyRate: 19,
    hoursPerWeek: 38
}

printMemberInfo(programmer)
printMemberInfo(doctor)