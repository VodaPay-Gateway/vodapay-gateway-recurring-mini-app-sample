import { tags, keys } from './constants.js';
import { handleAnchorTagEvent, handleButtonEvent, handleLabelEvent, handleInputEvent, handleTextAreaEvent } from './handlers.js';

function onMessage(callback) {
  try {
    my.onMessage = function(e) {
      callback(e);
    }
  } catch(e) {}
}

function postMessage(msg) {
  try {
    my.postMessage(msg);
  } catch(e) {}
}

function handlePageLoadEvent() {
  console.log('Page loaded');
}

function handleDOMLoadEvent() {
  console.log('DOM loaded');
}

function handleClickEvent(e) {
  if (!e) {
    return;
  }

  const target = e.target;
  const tagName = target.tagName;
  const event = { events: ['click'] };
  
  if (tags.every(tag => tag !== tagName)) {
    return;
  }

  handleEvent(event, e);
}

function handleKeyPressEvent(e) {
  const keyPressed = e.key;
  const target = e.target;
  const tagName = target.tagName;
  const type = target.type;
  const isInput = tagName === 'INPUT' || tagName === 'TEXTAREA';
  const isPasswordInput = tagName === 'INPUT' && type === 'password' && keyPressed !== 'TAB';
  const event = {};

  if (tags.every(tag => tag !== tagName)) {
    return;
  }

  if (!isInput && keys.every(key => key !== keyPressed)) {
    return;
  }

  if (isPasswordInput) {
    return;
  }

  handleEvent(event, e);
}

function handleEvent(event, e) {
  if (!e) {
    return;
  }

  const target = e.target;
  const tagName = target.tagName;

  if (tagName === 'A') {
    handleAnchorTagEvent(event, e);
  } else if (tagName === 'BUTTON') {
    handleButtonEvent(event, e);
  } else if (tagName === 'LABEL') {
    handleLabelEvent(event, e);
  } else if (tagName === 'INPUT') {
    handleInputEvent(event, e);
  } else if (tagName === 'TEXTAREA') {
    handleTextAreaEvent(event, e);
  }

  sayHello(event, e);
}

function sayHello(event, e) {
  if (!event) {
    return;
  }
  
  const path = window.location.pathname;

  event.url = window.location.href;
  event.page = path.split('/').pop();
  event.timestamp = (new Date()).toISOString();

  //Dev stuff
  console.log('Event object:', e);
  console.log('Custom event:', event);
  document.getElementById('messages').innerHTML = `${e.type} event on ${e.target.tagName} tag`;
  //End
  
  postMessage(event);
}

export {
  onMessage,
  handlePageLoadEvent,
  handleDOMLoadEvent,
  handleClickEvent,
  handleKeyPressEvent
};
