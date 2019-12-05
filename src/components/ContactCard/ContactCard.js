import {mapState} from 'vuex';
export default {
    name: 'ContacCard',
    data(){
        return {
            message: {
                name_client: '',
                email_client: '',
                phone_client: '',
                msg_client: ''
            }
        }
    },
    computed:{
        ...mapState(['urlBase']),
        urlSend(){
            return this.urlBase+'/api/contact';
        }
    },
    methods:{
        createMessage(){
            let data = new FormData();
            data.append('name_client',this.message.name_client);
            data.append('email_client',this.message.email_client);
            data.append('phone_client',this.message.phone_client);
            data.append('msg_client',this.message.msg_client);
            return data;
        },
        sendMessage(){
            const data = this.createMessage();
            let headers = new Headers();
            headers.append('Accept', 'application/json');

            fetch(this.urlSend, {
                method: 'POST',
                body: data,
                headers
            })
            .then(response => response.json())
            .then(json => {console.log(json);})
            .catch(error => console.log(error));
        }
    }
}