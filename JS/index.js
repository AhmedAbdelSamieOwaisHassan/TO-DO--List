
// let task={
//     "id":1,
//     "title":"قراءة كتاب",
//     "date":"12/10/2022",
//     "isDone":false
// }
let TasksARR=[
    {
        "id":1,
        "title":"قراءة الكتاب ",
        "date":"10/10/2022",
        "isDone":false
    },
     {
        "id":1,
        "title":"فهرس الكتاب",
        "date":"10/10/2022",
        "isDone":false
    },
   {
        "id":1,
        "title":"موضوع الكتاب",
        "date":"10/10/2022",
        "isDone":false
    },
     {
        "id":1,
        "title":" انهاء الكتاب",
        "date":"10/10/2022",
        "isDone":false
    },
     {
        "id":1,
        "title":"  قراءة كتاب جديد",
        "date":"10/10/2022",
        "isDone":false
    },
];
// =======================

function  getTasks(){
    let retrieveTasks=JSON.parse(localStorage.getItem("myTasks"))
    
    TasksARR = retrieveTasks ?? []
}
getTasks()
// ======================
function fillTask(){

document.getElementById("tasks").innerHTML=""
let indexs=0
for(Open of TasksARR){
    let conent=
                 ` <div id="taskss" class="task  "> 
                         <div class="tasks ${Open.isDone ?'done':''}" >
                        <!-- tasks info -->
                         <div style="width: 70%; " >
                            <h2>${Open.title} </h2>
                            <div>
                                <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md --><path fill="currentColor" d="M6 5h2.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6zm2 2h7V6H8zm3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2m5.65 8.6L10 18.75l-3.2-3.2l.7-.71l2.5 2.5l6.44-6.45z"/></svg>
                                     ${Open.date}
                                </span>
                            </div>
                         </div> 
                         <!-- tasks Actions --> 
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 20%;">
                            <button onclick="addTasks(${indexs})" class="add bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Huge Icons by Hugeicons - undefined --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 12.648l2.37-2.37c.294-.293.44-.44.518-.598c.15-.3.15-.653 0-.954c-.078-.158-.224-.304-.517-.597s-.44-.439-.597-.517a1.07 1.07 0 0 0-.954 0c-.158.078-.305.224-.598.517l-2.37 2.371M14 12.648l-8.222 8.223c-.293.293-.44.439-.598.517c-.3.15-.653.15-.954 0c-.158-.078-.304-.224-.597-.517s-.439-.44-.517-.597a1.07 1.07 0 0 1 0-.954c.078-.158.224-.305.517-.598l8.223-8.222M14 12.648L11.852 10.5m7.648-8l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L18 4l.299.11c.391.145.587.218.73.36c.143.144.215.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L21 4l-.299-.11c-.391-.145-.587-.218-.73-.36c-.143-.144-.215-.34-.36-.731zm0 10l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L18 14l.299.11c.391.146.587.218.73.36c.143.144.215.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L21 14l-.299-.11c-.391-.146-.587-.218-.73-.36c-.143-.144-.215-.34-.36-.731zm-9-10l-.11.299c-.146.391-.218.587-.36.73c-.144.143-.34.216-.731.36L9 4l.299.11c.391.145.587.218.73.36c.143.144.216.34.36.731l.111.299l.11-.299c.146-.391.218-.587.36-.73c.144-.143.34-.216.731-.36L12 4l-.299-.11c-.391-.145-.587-.218-.73-.36c-.143-.144-.216-.34-.36-.731z" color="currentColor"/></svg>
                            </button>
                           ${Open.isDone ?  `
                            <button onclick="toggleTaskCompletion(${indexs})" class="add bg-Info ">
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Pixelarticons by Gerrit Halfmann - https://github.com/halfmage/pixelarticons/blob/master/LICENSE --><path fill="currentColor" d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"/></svg>

                            </button>`:
                           `
                            <button onclick="toggleTaskCompletion(${indexs})" class="add bg-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Basil by Craftwork - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M18.03 7.97a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.47 3.47l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>

                            </button>`}
                             <button  onclick="deletetask(${indexs})" class="add bg-danger">
                               <!-- icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><!-- Icon from Fluent UI System Color Icons by Microsoft Corporation - https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE --><g fill="none"><path fill="url(#fluentColorCalendarCancel160)" d="M14 11.5v-6l-6-1l-6 1v6A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5"/><path fill="url(#fluentColorCalendarCancel161)" d="M14 11.5v-6l-6-1l-6 1v6A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5"/><path fill="url(#fluentColorCalendarCancel165)" fill-opacity=".3" d="M14 11.5v-6l-6-1l-6 1v6A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5"/><path fill="url(#fluentColorCalendarCancel162)" d="M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V6h12z"/><path fill="url(#fluentColorCalendarCancel163)" d="M16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"/>
                            <path fill="url(#fluentColorCalendarCancel164)" fill-rule="evenodd" d="M9.646 9.646a.5.5 0 0 1 .708 0l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708.708L12.207 11.5l1.147 1.146a.5.5 0 0 1-.708.708L11.5 12.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 0-.708" clip-rule="evenodd"/><defs><linearGradient id="fluentColorCalendarCancel160" x1="6.286" x2="9.327" y1="4.5" y2="13.987" gradientUnits="userSpaceOnUse"><stop stop-color="#B3E0FF"/><stop offset="1" stop-color="#8CD0FF"/></linearGradient><linearGradient id="fluentColorCalendarCancel161" x1="9.286" x2="11.025" y1="8.386" y2="16.154" gradientUnits="userSpaceOnUse"><stop stop-color="#DCF8FF" stop-opacity="0"/><stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"/>
                            </linearGradient><linearGradient id="fluentColorCalendarCancel162" x1="2.482" x2="4.026" y1="2" y2="8.725" gradientUnits="userSpaceOnUse"><stop stop-color="#0094F0"/><stop offset="1" stop-color="#2764E7"/></linearGradient><linearGradient id="fluentColorCalendarCancel163" x1="8.406" x2="14.313" y1="7.563" y2="16.281" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F83F54"/><stop offset="1" stop-color="#CA2134"/></linearGradient><linearGradient id="fluentColorCalendarCancel164" x1="9.977" x2="11.771" y1="11.652" y2="13.518" gradientUnits="userSpaceOnUse"><stop stop-color="#FDFDFD"/>
                            <stop offset="1" stop-color="#FECBE6"/></linearGradient><radialGradient id="fluentColorCalendarCancel165" cx="0" cy="0" r="1" gradientTransform="matrix(.14285 6.79546 -6.61306 .13902 11.857 12.704)" gradientUnits="userSpaceOnUse"><stop offset=".497" stop-color="#4A43CB"/><stop offset="1" stop-color="#4A43CB" stop-opacity="0"/></radialGradient></defs></g></svg>
                             <!-- icon // -->
                            </button>
                        </div>
                           <!-- tasks Actions // -->
                        <!-- tasks info //-->
                        
                         </div> `
document.getElementById("tasks").innerHTML+=conent
indexs++

}
}

fillTask()

setTimeout(function(){
   document.getElementById("filter").style.filter='drop-shadow(3px 12px 17px black)'

},3000)  
document.getElementById("add-btn").addEventListener("click", function () {
    let nowDate = new Date();
    let date = nowDate.getDate() + "/" + [nowDate.getMonth() + 1] + "/" + nowDate.getFullYear() + "   |  " + nowDate.getHours() + ":" + nowDate.getMinutes();
    let teskName = prompt("    من فضلك أدخل موضوع المهمة الجديدة التي تريد أضافتها: ");

    
    if (teskName !== null && teskName.trim() !== "") {
        let teskObj = {
            "title": teskName.trim(),
            "date": date,
            "isDone": false
        };
        TasksARR.push(teskObj);
        storData();
        fillTask();
    }
});
function deletetask(index){
    let taskd=TasksARR[index]
  let mss=  confirm(" هل انتا  متأكد من ازالة المهمة  :"+ taskd.title)
  if(mss){
    TasksARR.splice(index,1)
    storData()
    fillTask()  
  }

}

function addTasks(index){
    let New = TasksARR[index];
    let newTask = prompt("أضف التعديل الجديد التي تريدة :", New.title);

    if (newTask !== null && newTask.trim() !== "") {
        New.title = newTask.trim();
        storData();
        fillTask();
    }
}
function toggleTaskCompletion(index){
    let NewTask=TasksARR[index]
   NewTask.isDone = !NewTask.isDone
    storData()
    fillTask() 

}

// ============== STORAGE FUNCTION ========
function storData(){
let tesksString=JSON.stringify(TasksARR)

localStorage.setItem("myTasks",tesksString)
}