function handleAnchorTagEvent(event, e) {
  if (!event || !e) {
    return;
  }

  const type = e.type;
  const target = e.target;
  const keyPressed = e.key;

  // User focused on A tag
  if (type === 'keyup' && keyPressed === 'TAB') {
    return;
  }

  event.events.push('router');
  event.targetURL = target.href;
  event.text = target.textContent;
}

function handleButtonEvent(event, e) {
  if (!event || !e) {
    return;
  }

  const type = e.type;
  const target = e.target;
  const keyPressed = e.key;

  // event.
}

function handleLabelEvent(event, e) {
  if (!event || !e) {
    return;
  }

  const type = e.type;
  const target = e.target;
  const keyPressed = e.key;

  // event.
}

function handleInputEvent(event, e) {
  if (!event || !e) {
    return;
  }

  const type = e.type;
  const target = e.target;
  const keyPressed = e.key;

  // event.
}

function handleTextAreaEvent(event, e) {
  if (!event || !e) {
    return;
  }

  const type = e.type;
  const target = e.target;
  const keyPressed = e.key;

  // event.
}

export { 
  handleAnchorTagEvent,
  handleButtonEvent,
  handleLabelEvent,
  handleInputEvent,
  handleTextAreaEvent
};