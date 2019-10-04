function updateName(){
	const name = document.getElementById("name-input").value;
	document.getElementById("author-info").innerHTML = "<b>Author:</b> " + name;
}

function updateMajor(){
	const name = document.getElementById("major-input").value;
	document.getElementById("major-info").innerHTML = "<b>Major:</b> " + name;
}
