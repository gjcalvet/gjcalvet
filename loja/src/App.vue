<template>
  <div id="app">
<div class="stars">
  <header>
  <h1>Os Cavaleiros do Zodíaco</h1>
  <img src="./assets/logo.png" alt="Logo Saint Seiya" title="Saint Seiya">
  </header>
 

  <nav id="nav">
  <ul>
  <li><router-link to='/'>Home</router-link></li> 	
  <li><router-link to='/cavaleiros'>Cavaleiros</router-link></li>
  <li><router-link to='/sobre'>Sobre</router-link></li>	
  <li><router-link to='/news'>Novidades</router-link></li>
  <li><router-link to='/contato'>Contato</router-link></li>	
  
  </ul> 
  </nav>	

  <router-view></router-view>
  
  
<footer>

<ul id="social">
<li><a href='#'><img src="./assets/facebook.png" alt="Facebook logo" title="Facebook logo"></a></li>
<li><a href='#'><img src="./assets/zap.png" alt="Whatsapp logo" title="Whatsapp logo"></a></li>
<li><a href='#'><img src="./assets/email.png" alt="Email logo" title="Email logo"></a></li>
</ul>
<p>copyright</p>

</footer>
</div>	
  </div>
</template>

<script>
import {mapActions} from 'vuex'	
export default {
	methods:{
		...mapActions(['load_cm'])
	},
	created(){
		this.load_cm()
	}
	
}
</script>


<style>

body {
	font-family: 'Open Sans', sans-serif;
	font-family: 'Sulphur Point', sans-serif;
	color:white;
	text-align: center; 
	


}

.stars {
  top:0;
  left:0;
  right:0;
  bottom:0;
  height:100%;
  display:block;
  background:url('https://img.freepik.com/free-vector/space-with-stars-universe-space-infinity-background_78474-99.jpg?size=626&ext=jpg') repeat top center;
  z-index:0;
 
}

h1, h2 {
	color: #4285eb;
	text-shadow: 1px 1px 1px #fff;
}

h3 {
	color: #4285eb;
	
}


header {
	text-align: center;
	width: 100%;
	color: #fff;
}

header  h1{
	display: none;

}

header img {
	max-width:300px;
    max-height:250px;
    width: auto;
    height: auto;
    margin: auto;
}

#container {
	text-align: center;
	width: 100%;
}

nav {
  display: block;
  margin-bottom: 100px;
  text-align: center;
  margin-right:4%;


}

nav ul {
list-style:none; 
width:100%;


}


nav ul li {
	text-decoration: none;
	position:relative; 
	float:left;
	padding: 0.4em 2.5em;
	margin-bottom: 20px ;
	background-color: #F8D44C;
	color: #0244a8;
	font-size: 1.05em;
	width:20%;
	
}

nav ul li:hover{
	text-decoration: none;
	background-color: #ccc;
	color: #0244a8;
	
}

/* nav ul li ul  {
	display: none;
	position: absolute;
	margin-top: 20px;
	margin-left: 880px;

}

nav ul li ul li a {
	font-size: 15px;
	margin-top:-20px;
	width: 100%;
}

nav ul li:hover ul {
	display: block;
	padding: 0px;
} */


.destaques img{
	width:50%;
    box-shadow: 3px 4px 2px #888888;
    margin-left:25%;
    margin-right: 25%;
	margin-bottom: 10%;
	text-align: center; 
}

footer{
	background-color:#717082;
	padding-top: 40px;

	
	
}

#social {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align:left;
    
}

#social img{
	width:2%;
	margin-left: 20px;

}

#social img li a {
	
    width: 54px;
    height: 54px;
    float: left;
}

#social img li:hover{opacity:0.6;}

footer p{
	margin-right:90%;
}

#texto{
	width: 50%;
	float:left;
	text-align: left;
	margin-left: 50px;
	color: #ffffff;
	margin-top:50px;
}

#foto{
		float: right;
		width: 50%;
}

#foto img{
	width:90%;
	margin-right: 20px;
	margin-top: 20px;
	box-shadow: 3px 4px 2px #888888;
	

}

#titulo {
	text-align: center;
	margin-top:75px;

}

#news, #news2, #news3 {
	width:80%;
	text-align: left;
	margin-left: 20px;
}

#news img, #news2 img, #news3 img{
	width: 90%;
	box-shadow: 3px 4px 2px #888888;
	margin-bottom:20px;

}

form {
	margin-bottom: 20px;
	color: #4285eb;
	width:80%;
	margin-left: 5%;
	
}

.col_texto{
	margin-left: 0; 
}

.col{
	margin-left: 45%;
}

.row.cards {
	margin-left:10%;
	
}

h2{
	text-align: center;
}

.row2 img{
	float: right;
	width:35%;
	margin-top: 60px;
	margin-bottom: 40px;
	margin-right: 50px;
}

#textoNews{
	width:100%;
	color:#fff;
	margin-left:50px
	
}

#formulario {
	margin-bottom: 20px;
	color: #4285eb;
	margin-left: 15%;
	text-align: justify;
	
}

.cards .button{
	background-color: #4285eb;
	margin:2px;
}

#formulario .button{
	background-color: #4285eb;
	margin:2px;
}



</style>
