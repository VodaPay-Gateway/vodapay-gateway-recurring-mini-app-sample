import { handlePageLoadEvent, handleDOMLoadEvent, handleClickEvent, handleKeyPressEvent } from './src/util.js';

window.addEventListener('load', handlePageLoadEvent);
window.addEventListener('DOMContentLoaded', handleDOMLoadEvent);
window.addEventListener('click', handleClickEvent);
window.addEventListener('keyup', handleKeyPressEvent);
