var arr = ["one", "two", "three"];
function addTask(task) {
    var num = arr.push(task);
    console.log("Item " + task + " added to array");
    return num;
}
function listAllTasks() {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = arr.indexOf("test");
    if (index > -1) {
        arr.splice(index, 1);
        console.log("we have deleted " + task);
    }
    return arr.length;
}
var x = addTask("test");
console.log(x);
listAllTasks();
var couont = deleteTask("one");
console.log(couont);
