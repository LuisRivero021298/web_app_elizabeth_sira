<template>
    <div class="log">
    	<div class="form-logIn">
    		<TitleComponent msg="Log in" prevButton="not"/>
        	<LogInForm />
        </div>
    </div>
</template>

<script>
import LogInForm from '@/components/LogInForm/LogInForm.vue';
import TitleComponent from '@/components/TitleComponent/TitleComponent.vue';

export default{
    name: 'LogInView',
    components:{
    	LogInForm,
    	TitleComponent
    }
}
</script>

<style>
	.log{
		padding-top: 65px;
		height: 600px;
		display: flex;
		justify-content: center;
		align-content: center;
		background-color: #eef;
	}

	.form-logIn{
		width: 60%;
		margin: auto;
		background-color: #fff;
		box-shadow: .5px .5px 5px #333;
	}
</style>
