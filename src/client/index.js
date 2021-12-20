import "./js/app";
import "./styles/style.scss";
import { getValue, removeTrip } from "./js/app";
import { postData, postData2, postData3, setData, setData2, setData3 } from "./js/postData"

let button = document.querySelector('button');
button.setAttribute('id', 'generate');


document.getElementById('generate').addEventListener('click', postData);

document.getElementById('generate').addEventListener('click', postData2);

document.getElementById('generate').addEventListener('click', postData3);

document.getElementById('generate').addEventListener('click', getValue);

document.getElementById('remove').addEventListener('click', removeTrip);

export { postData, postData2, postData3 };

export{ setData, setData2, setData3 };