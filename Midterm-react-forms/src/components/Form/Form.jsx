import React, {useState} from "react";
import "./form.css";

export default function Form() {
    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailID: "",
        mobileNumber: '',
    });

    const [selectedOption, setSelectedOption] = useState("none");

    const handleChangeRadio = (event) => {
        const { name, value } = event.target;
        setSelectedOption(value);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `First Name ${formData.firstName}, Last Name ${formData.lastName}, Email ID ${formData.emailID}, Mobile Number ${formData.mobileNumber}\n` + 
            `Qualifcation: ${selectedOption}`
        );
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            emailID: "",
            mobileNumber: ''
        });

        setSelectedOption("none");
    };
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="label-input-container">
                <label className="form__text" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="form__input" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>

            <div className="label-input-container">
                <label className="form__text" htmlFor="lastName">Last Name</label>
                <input type="text" id="lasttName" className="form__input" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>

            <div className="label-input-container">
                <label className="form__text" htmlFor="emailID">Email ID</label>
                <input type="email" id="emailID" className="form__input" name="emailID" value={formData.emailID} onChange={handleChange}/>
            </div>

            <div className="label-input-container">
                <label className="form__text" htmlFor="mobileNumber">Mobile Number</label>
                <input type="tel" id="mobileNumber" className="form__input" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange}/>
            </div>
            
            <p>Qualifcation</p>
            <label className="radio__btn">
                <input type="radio" name="qualification" value="High School(10th)" checked={selectedOption === "High School(10th)"} onChange={handleChangeRadio} />
                High School (10th)
            </label>

            <label className="radio__btn">
                <input type="radio" name="qualification" value="Higher School(12th)" checked={selectedOption === "Higher School(12th)"} onChange={handleChangeRadio} />
                Higher School (12th)
            </label>

            <label className="radio__btn">
                <input type="radio" name="qualification" value="Graduation(Bachelors)" checked={selectedOption === "Graduation(Bachelors)"} onChange={handleChangeRadio} />
                Graduation (Bachelors)
            </label>

            <label className="radio__btn">
                <input type="radio" name="qualification" value="Post Graduation(Masters)" checked={selectedOption === "Post Graduation(Masters)"} onChange={handleChangeRadio} />
                Post Graduation (Masters)
            </label>

            <label className="radio__btn">
                <input type="radio" name="qualification" value="Other" checked={selectedOption === "Other"} onChange={handleChangeRadio} />
                Other
            </label>

            <button className="form__button" type="submit">Submit</button>
            <button className="form__button" type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}