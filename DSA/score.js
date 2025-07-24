let count = 0;
let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
        marks[i] += 20;
    }
    if (marks[i] > 90) {
        marks[i] = 90;
    }
    if (marks[i] >= 50) {
        count++;
    }
}
console.log("Number of students who passed:", count);