import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el, td } from './documentUtil.js';


var arrayIdsupplier = [];

window.readCodeSuppliers = function() {
    axios.get('http://localhost:8081/suppliers')
    .then((response) => {
        const supplierList = response.data;
        const supplierTable = el('tableBody');
        
        supplierList.forEach(supplier => {
            const row = document.createElement('tr');
            row.innerHTML = td(supplier.id_supplier) +
                            td(supplier.name); 
            supplierTable.appendChild(row);
            arrayIdsupplier.push(supplier.id_supplier);
        })
        
    });

}



window.addProduct = function() {

    let imageAux='no_image.jpeg';
    const product_name = document.getElementById('product_name').value;
    const description = document.getElementById('description').value;
    const sale_price = document.getElementById('sale_price').value;
    const stock_units = document.getElementById('stock_units').value;
    const image = document.getElementById('image').value;
    const release_date = document.getElementById('release_date').value;
    const product_status = document.getElementById('product_status').value;
    const id_supplier = document.getElementById('id_supplier').value;

    // TODO Validación de datos faltan por validar mas datos
    if (product_name === '') {
        notifyError('Product name is required');
        return;
    }

    if (description === '') {
        notifyError('Description is required');
        return;
    }

    if (sale_price === '') {
        notifyError('Sale price is required');
        return;
    }

    if (stock_units === '') {
        notifyError('Stock units are required');
        return;
    }

    if (release_date === '') {
        notifyError('Release date is required');
        return;
    }

    if (product_status === '') {
        notifyError('Product status is required');
        return;
    }

    if (id_supplier !== '') {
        let igualTest = false;
        for (let idAux of arrayIdsupplier) {
            if (idAux == id_supplier){
                igualTest = true;
           }
        }
        if (!igualTest){
            notifyError('Supplier Id not found');
            return;
        }
    } else {
        notifyError('Supplier Id is required');
        return;
    }


    if (image === '') {
        notifyError('Image is required');
        return;
    } else {
        const imageFile = el('image').files[0];
    
         // Prepara los datos del formulario para ser enviados al backend
        const formData = new FormData();
        formData.append('image', imageFile);
        
        axios.post('http://localhost:8081/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'   
             }
            }).then((response) => {
                notifyOk('Image data has been registered successfully');
                
                imageAux = response.data;
                //Nombre de la imagen del producto afectado
                axios.post('http://localhost:8081/products', {
                    product_name: product_name,
                    description: description,
                    sale_price: sale_price,
                    stock_units: stock_units,
                    image: imageAux,
                    release_date: release_date,
                    product_status: product_status,
                    id_supplier: id_supplier
                })
                .then((response) => {
                    // Confirmar al usuario que todo ha ido bien (o mal)
                    if (response.status == 201) {
                        notifyOk('Product registered');
                    } else {
                        notifyError('Error registering product');
                    }
                });

            }).catch((error) => {
                notifyError('Error sending image data');
                console.log(error);
            });

    }
    
    //Limpiar el formulario
    el('product_name').value = '';
    el('description').value = '';
    el('sale_price').value = '';
    el('stock_units').value = '';
    el('image').value = '';
    el('release_date').value = '';
    el('product_status').value = '';
    el('id_supplier').value = '';
};