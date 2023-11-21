import React, {useState} from "react";
import "./multiple.css";

export default function Multiple() {
    const [formData, setFormData] = useState({
        name: " ",
        email: " ",
        message: " "
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));       
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

    const handleClear = () => {
        setFormData({
            name: " ",
            email: " ",
            message: " "
        });
    };

    return (
        <form onSubmit={handleSubmit} className="multiple">
            <h1>New Shop</h1>
            <label className="multiple__text" htmlFor="name">Name:</label>
            <input type="text" id="name" className="multiple__input" name="name" value={formData.name} onChange={handleChange}/>
            
            <label className="multiple__text" htmlFor="email">Email</label>
            <input type="email" id="email" className="multiple__input" name="email" value={formData.email} onChange={handleChange}/>
            
            <label className="multiple__text" htmlFor="message">Message:</label>
            <input type="message" className="multiple__textarea" name="message" value={formData.message} onChange={handleChange}/>

            <button className="multiple__button" type="submit">Submit</button>
            <button className="clear__button" type="button" onClick={handleClear}>Cancel</button>
        </form>
    );
}