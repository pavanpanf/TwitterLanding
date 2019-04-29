var promise  = fetch("https://fsd1.herokuapp.com/users/1/details");
promise.then(res=>res.json())
	   .then(d=> udateDOM(d.data))
	   .catch(error=>console.log(error))

var udateDOM = function(data){
	var username = document.querySelector('div.side2 h2')
	username.innerText = data.full_name;
	var tweets = document.querySelector('.sidebar3 #tweets-1 p')
	tweets.innerText = data.stats.tweets;
	var following = document.querySelector('.sidebar3 #Following-1 p')
	following.innerText = data.stats.following;
	var followers = document.querySelector('.sidebar3 #Followers-1 p')
	followers.innerText = data.stats.followers;
	var sidebarUserName = document.querySelectorAll('.UserName div  span strong')
	sidebarUserName.forEach(d=>d.textContent=data.user_name);
	var sidebarMailId = document.querySelectorAll('.UserName div span:nth-child(2)')
	sidebarMailId.forEach(d=>d.textContent=data.user_email);
	var username = document.querySelectorAll('.tweets-header p:nth-child(2)')
	username.forEach(d=>d.textContent=data.user_name+',');
	var eMail = document.querySelectorAll('.tweets-header p:nth-child(3)')
	eMail.forEach(d=>d.textContent=data.user_email);
	var prousername = document.querySelector('#sidebar2 div h3')
	prousername.textContent = data.full_name;
	var proeMail = document.querySelectorAll('#sidebar2 div:nth-child(3) p')
	proeMail.forEach(d=>d.textContent=data.user_email);
}


var promise = fetch("https://fsd1.herokuapp.com/users/1/following/tweets");
promise.then(res=>res.json())
	   .then(d=> udatetweet(d.data))
	   .catch(error=>console.log(error))

var udatetweet = function(data){
	for (i=0;i<=1;i++){
		document.querySelector('.tweets-body')
		.appendChild(document.createTextNode(data[i].text))
		document.querySelector('#retweet')
		.appendChild(document.createTextNode(data[i].stats.retweets))
		document.querySelector('#comments')
		.appendChild(document.createTextNode(data[i].stats.comments))
		document.querySelector('#likes')
		.appendChild(document.createTextNode(data[i].stats.likes))
	}
	
}

