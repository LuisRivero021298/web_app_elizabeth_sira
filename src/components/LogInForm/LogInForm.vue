<template>
	<div class="container">
		<div class="row">
	        <form class="col s12">
	            <div class="row">
	                <div class="input-field col s12">
	                    <input placeholder="name" id="name" type="text" class="validate">
	                    <label for="name">Name</label>
	                </div>
	            </div>
	            <div class="row">
	                <div class="input-field col s12">
	                    <input id="email" type="email" class="validate">
	                    <label for="email">Email</label>
	                </div>
	            </div>
	            <div class="row">
	                <div class="input-field col s6">
	                    <input id="password" type="password" class="validate">
	                    <label for="password">Password</label>
	                </div>
	                <div class="input-field col s6">
	                    <input id="confirm-password" type="password" class="validate">
	                    <label for="confirm-password">Confirm Password</label>
	                </div>
	            </div>
	        </form>
	    </div>
	</div>
</template>

<script src="./LogInForm.js"></script>
<style src="./LogInForm.css" scoped></style>