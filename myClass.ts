import{myQueue}from "./interface"

class myClass implements myQueue{
   
    arr:Array<string>=[];

    addTask(task: string):number {

        let num:number = this.arr.push(task);
        console.log("Item "+ task +" added to array");
    
    return num;
    }
    
     listAllTasks(){
        
        for(let item of this.arr){
            console.log(item);
        }
    }
    
     deleteTask(task:string):number{
        let index:number  =  this.arr.indexOf(task);
        if(index > -1)
        {
            this.arr.splice(index,1);
            console.log("we have deleted "+ task);
        }
        return this.arr.length;
    }
    

}
let newClass = new myClass();
let x= newClass.addTask("Hello");