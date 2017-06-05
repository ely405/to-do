'use strict';
const documentLoad = ()=>{
  const root = $('.root');
  render(root);
}
$(documentLoad);
const render = (root) =>{
  root.empty();
  const wrapper = $('<div/>', { 'class': 'wrapper' });
  wrapper.append(createHeader());
  wrapper.append(createToDo())
  root.append(wrapper);
}

const reRender = (listThingToDo, listThingDone)=>{
  listThingToDo.empty();
  listThingDone.empty();
  state.allToDo.forEach(aToDo=>{
    if(!aToDo.completed){
      listThingToDo.append(createToDoItem(aToDo, ()=>{reRender(listThingToDo, listThingDone);}));
    }else{
      listThingDone.append(createToDoItem(aToDo, ()=>{reRender(listThingToDo, listThingDone);}));
    }
  });
}

const state = {
  allToDo:[]
};
