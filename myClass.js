"use strict";
exports.__esModule = true;
var myClass = /** @class */ (function () {
    function myClass() {
        this.arr = [];
    }
    myClass.prototype.addTask = function (task) {
        var num = this.arr.push(task);
        console.log("Item " + task + " added to array");
        return num;
    };
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.arr.indexOf(task);
        if (index > -1) {
            this.arr.splice(index, 1);
            console.log("we have deleted " + task);
        }
        return this.arr.length;
    };
    return myClass;
}());
var newClass = new myClass();
var x = newClass.addTask("Hello");
