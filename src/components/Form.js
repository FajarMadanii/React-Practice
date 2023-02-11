import "../style/Form.css"
import React, {useState} from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        angkatan: '',
        hobi: ''
    });
    const [submit, setSubmit] = useState(false);
    const actionSubmit = (event) => {
        event.preventDefault()
    }
    return ( 
    <div>
        {submit ? (
        <div className="buttonTrue">
        <div className="output"> 
        <h2>Data Mahasiswa</h2>
            <p>Nama: {formData.nama}</p>
            <p>NIM: {formData.nim}</p>
            <p>Angkatan: {formData.angkatan}</p>
            <p>Hobi: {formData.hobi}</p>

            <button onClick={() => {
                setSubmit(false);
            }}>Back</button>
        </div>
    </div>
    ): 
    (
        <div class="Form">
        <form onSubmit = {actionSubmit}>
        <h2>FORM MAHASISWA</h2>
        <p>
            <label>Nama : </label>
            <input onChange={(event) => setFormData({...formData, nama: event.target.value})} value={formData.nama} type="text" name="nama" placeholder="Nama..." />
        </p>
        <p>
            <label>NIM : </label>
            <input onChange={(event) => setFormData({...formData, nim: event.target.value})} value={formData.nim} type="text" name="nim" placeholder="NIM..." />
        </p>
        <p>
            <label>Angkatan : </label>
            <input onChange={(event) => setFormData({...formData, angkatan: event.target.value})} value={formData.angkatan} type="text" name="angkatan" placeholder="Angkatan..." />
        </p>
        <p>
            <label>Hobi : </label>
            <input onChange={(event) => setFormData({...formData, hobi: event.target.value})} value={formData.hobi} type="text" name="hobi" placeholder="Hobi..." />
        </p>
        <button onClick={ () => {setSubmit(true);} }>SUBMIT</button>
    </form>
    </div>
    )}
    </div> 
    )
}


export default Form;