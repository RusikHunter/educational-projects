class Student {
    constructor(name, group) {
        this.name = name
        this.group = group
        this.grades = []

        console.log('Added new student ' + this.name)
    }

    addGrade(value) {
        this.grades.push(value)

        console.log('Grade ' + value + ' was added to student ' + this.name)
    }

    countAverageGrade() {
        if (this.grades.length === 0) {
            return 0
        }

        const sumOfGrades = this.grades.reduce((sum, grade) => sum + grade, 0)

        const averageGrade = (sumOfGrades / this.grades.length).toFixed(1)

        return averageGrade
    }

    logInfo() {
        return ('Student: ' + this.name + '; Group: ' + this.group + '; Average grade: ' + this.countAverageGrade() + ';')
    }

    ifBadStudent() {
        const ifHasBadGrades = this.grades.some(grade => grade <= 3)

        if (ifHasBadGrades) {
            console.log('Bad student')
        } else {
            console.log('Good student')
        }
    }
}

const studentExample = new Student('Nikita', 3)

studentExample.addGrade(1)
studentExample.addGrade(3)
studentExample.addGrade(5)
studentExample.addGrade(5)
studentExample.addGrade(4)
studentExample.addGrade(5)
studentExample.addGrade(1)

studentExample.logInfo()

studentExample.ifBadStudent()