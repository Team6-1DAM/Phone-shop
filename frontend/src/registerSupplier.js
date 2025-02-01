import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el } from './documentUtil.js';

window.addSupplier = function() {
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;
    const address = document.getElementById('address').value;
    const zip_code = document.getElementById('zip_code').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const website = document.getElementById('website').value;
    const email = document.getElementById('email').value;

    // Validación de datos
    if (name === '') {
        notifyError('Supplier name is required');
        return;
    }

    if (tel === '') {
        notifyError('Telephone is required');
        return;
    }

    if (address === '') {
        notifyError('Address is required');
        return;
    }

    if (zip_code === '') {
        notifyError('Zip Code is required');
        return;
    }

    if (city === '') {
        notifyError('City is required');
        return;
    }

    if (country === '') {
        notifyError('Country is required');
        return;
    }

    if (website === '') {
        notifyError('Website is required');
        return;
    }

    if (email === '') {
        notifyError('Email is required');
        return;
    }



    axios.post('http://localhost:8081/suppliers', {
        name: name,
        tel: tel,
        address: address,
        zip_code: zip_code,
        city: city,
        country: country,
        website: website,
        email: email
    })
    .then((response) => {
        // Confirmar al usuario que todo ha ido bien (o mal)
        if (response.status == 201) {
            notifyOk('Supplier registered');
        } else {
            notifyError('Error registering supplier');
        }
    });


    //Limpiar el formulario
    el('name').value = '';
    el('tel').value = '';
    el('address').value = '';
    el('zip_code').value = '';
    el('city').value = '';
    el('country').value = '';
    el('website').value = '';
    el('email').value = '';
};