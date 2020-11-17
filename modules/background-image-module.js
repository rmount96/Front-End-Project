import { ajax } from "../modules/ajax-module.js";

const mainTag = document.querySelector("main");

//Turned this into a function call that is hooked up to a listener on the main JS page. Want to ensure that people only smaller screens don't use their data on this ajax call
export const backgroundImage = function () {
	let randomGeneratedImageID = Math.floor(Math.random() * 101);
	ajax(`${URL.backgroundImage}${randomGeneratedImageID}/info`, (r) => {
		let resultsArray = JSON.parse(r);
		mainTag.style.backgroundImage = `url(${resultsArray.download_url})`;
	});
};

// // const URL = {
// // 	backgroundImage: `https://picsum.photos/id/`,
// }; // this to config file
