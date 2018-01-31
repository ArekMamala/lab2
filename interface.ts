export interface myQueue
{
     arr:Array<string>;
     addTask(task: string):number;
     listAllTasks():void;
     deleteTask(task):number;    
}

