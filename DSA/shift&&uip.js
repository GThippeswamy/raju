let task=["scrum","DSA","CSBT","ASSIGN","STANDUP"]
task.shift()
task.unshift("coding","ASK AND LECTURER")
task[task.length - 1] = "scrum";
console.log(task)