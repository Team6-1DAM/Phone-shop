import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el, td } from './documentUtil.js';
// no se como se pasa el codigo estas dos lineas igual estan mal 

window.verifyUser = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === '' || password ===''){
        notifyError('You must fill both fields');
        return;
    }
    axios.get('http://localhost:8081/users/' + username)
        .then((response) => {

            if (response.status == 200) {
                const user = response.data;
                if (user.username == undefined){
                    notifyError('User does not exist');
                    return;
                }
                if (user.password != password) {
                    notifyError('Wrong password');
                    return;
                } else {
                    notifyOk('Login successfully');
                    sessionStorage.setItem("username",user.username);
                    sessionStorage.setItem("role",user.role);
                    
                }  
            }        
        });

    
};