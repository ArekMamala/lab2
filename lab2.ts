let arr: string[] = ["one","two","three"];

function addTask(task: string):number {

    let num:number = arr.push(task);
    console.log("Item "+ task +" added to array");

return num;
}

function listAllTasks(){
    
    for(let item of arr){
        console.log(item);
    }
}

function deleteTask(task:string):number{
    let index:number  = arr.indexOf(task);
    if(index > -1)
    {
        arr.splice(index,1);
        console.log("we have deleted "+ task);
    }
    return arr.length;
}

let x:number = addTask("test");
console.log(x);
listAllTasks();
let count: number = deleteTask("one");
console.log(count);