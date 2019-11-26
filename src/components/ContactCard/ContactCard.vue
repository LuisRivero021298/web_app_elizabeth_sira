<template>
    <div>
        <form class="form-contact" @submit.prevent="sendMessage()">
            <input type="text" class="text-contact" id="name" placeholder="Name" v-model="message.name_client" />
            <input type="text" class="text-contact" id="email" placeholder="Email" v-model="message.email_client" />
            <input type="text" class="text-contact" id="phone" placeholder="Phone" v-model="message.phone_client" />
            <textarea name="" id="msg" cols="50" rows="40" placeholder="Message" v-model="message.msg_client" ></textarea>
            <input type="submit" value="SEND" id="btn-contact">
        </form>
    </div>
</template>

<script src="./ContactCard.js"></script>
<style src="./ContactCard.css" scoped></style>