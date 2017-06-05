'use strict';
const createToDo = ()=>{
  const toDoParent = $('<div/>', {'class':'white-card'});
  const taskInput = $('<input/>', {'id':'input-item', 'type':'text', 'placeholder':'Ingresa la tarea'});
  const toDoTitle = $('<p/>').text('To Do Item');
  const toDoList = $('<div/>', {'class':'to-do-list'});
  const divider = $('<hr/>');
  const doneTitle = $('<p/>').text("Completed Items");
  const doneList = $('<div/>', {'class':'done'});

  toDoParent.append(taskInput, toDoTitle, toDoList, divider, doneTitle, doneList);
  taskInput.on('keypress', (e)=>{
    if(e.which === 13){
      if(taskInput.val() != ''){
        state.allToDo.push({
          text: taskInput.val(),
          completed: false
        });
        taskInput.val('');
        reRender(toDoList, doneList);
      }
    }
  });
  return toDoParent;
}

const createToDoItem = (data, update)=>{
  const containsAThingToDo = $('<div/>', {'class':'each-to-do'});
  const checkbox = $('<input/>', {'type':'checkbox', 'class':'checkbox'});
  const contentOfThingToDo = $('<span/>').text(data.text);
  const buttonRemove = $('<button/>').text('Remove');
  containsAThingToDo.append(checkbox, contentOfThingToDo, buttonRemove);

  checkbox.on('change', (e)=>{
    data.completed = !data.completed;
    update();
  });

  buttonRemove.on('click', (e)=>{
    const idToClose = state.allToDo.map(element => element.text).indexOf(data.text);
    state.allToDo.splice(idToClose, 1);
    update();
  })
  return containsAThingToDo;
}
