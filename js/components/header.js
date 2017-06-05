'use strict';
const createHeader = (update)=>{
  const header = $('<header/>');
  const titleContainer = $('<div/>', {'class': 'wrapper'});
  const title = $('<h1/>').text('To Do App');
  titleContainer.append(title);
  header.append(titleContainer);
  return header;
}
