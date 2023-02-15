var randNum = Math.floor(Math.random() * 61);

var statusCodes = [
	100, 101, 102, 200, 201, 202, 203, 204, 205, 206,
	207, 208, 226, 300, 301, 302, 303, 304, 305, 306,
	307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
	408, 409, 410, 411, 412, 413, 414, 415, 416, 417,
	418, 420, 422, 423, 424, 426, 428, 429, 431, 451, 500,
	501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

var url = `https://http.cat/${statusCodes[randNum]}`;


// Adds the img
document.body.innerHTML = "";
var img = document.createElement('img');
img.src = url;
img.id = "cat-img";
var imgWrapper = document.createElement('div');
imgWrapper.id = "cat-wrap";
imgWrapper.style.display = 'flex';
imgWrapper.style.justifyContent = 'center';
imgWrapper.style.alignItems = 'center';
imgWrapper.style.color = '#202124';
imgWrapper.appendChild(img);

document.body.appendChild(imgWrapper);	

var createBtn = document.createElement('button');
createBtn.id = 'catBtn';

document.body.appendChild(createBtn);