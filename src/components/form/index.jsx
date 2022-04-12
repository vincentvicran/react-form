import React, { useEffect, useState } from 'react';

import { validator } from '../../utils/validator';
const userBuffer = [];

export const Form = () => {
    const [nameErrors, setNameErrors] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [phoneErrors, setPhoneErrors] = useState('');

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
    });

    const { name, email, phone, dob } = userInfo;

    const [address, setAddress] = useState({
        city: '',
        district: '',
        province: '',
        country: 'Nepal',
    });

    const { city, district, country } = address;

    const onUserInfoChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };
    const onAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        console.log(
            (nameErrors === '' && emailErrors === '' && phoneErrors === '') ||
                (nameErrors === undefined && emailErrors === undefined && phoneErrors === undefined)
        );

        if (
            (nameErrors === '' && emailErrors === '' && phoneErrors === '') ||
            (nameErrors === undefined && emailErrors === undefined && phoneErrors === undefined)
        ) {
            userBuffer.push({ name, email, dob, phone, address });
            console.log(userBuffer);
            localStorage.setItem('User Records', JSON.stringify(userBuffer));
        }
    };

    useEffect(() => {
        const nameErr = validator('name', name);
        setNameErrors(nameErr);
        const emailErr = validator('email', email);
        setEmailErrors(emailErr);
        const phoneErr = validator('phone', phone);
        setPhoneErrors(phoneErr);
        console.log(nameErrors, emailErrors, phoneErrors);
    }, [email, emailErrors, name, nameErrors, phone, phoneErrors]);

    return (
        <div>
            <div className="form-container">
                <form onSubmit={onFormSubmit}>
                    <div className="form-items">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} name="name" onChange={onUserInfoChange} required />
                        {nameErrors && <span className="span-error">{nameErrors}</span>}
                    </div>
                    <div className="form-items">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" onChange={onUserInfoChange} required />
                        {emailErrors && <span className="span-error">{emailErrors}</span>}
                    </div>
                    <div className="form-items">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" value={phone} name="phone" onChange={onUserInfoChange} required />
                        {phoneErrors && <span className="span-error">{phoneErrors}</span>}
                    </div>
                    <div className="form-items">
                        <label htmlFor="dob">DOB</label>
                        <input type="date" value={dob} name="dob" onChange={onUserInfoChange} />
                    </div>
                    <div className="form-items">
                        <label htmlFor="address">Address</label>
                        <div className="address-items">
                            <div className="form-items">
                                <label htmlFor="city">City</label>
                                <input type="text" value={city} name="city" onChange={onAddressChange} />
                            </div>
                            <div className="form-items">
                                <label htmlFor="District">District</label>
                                <input type="text" value={district} name="district" onChange={onAddressChange} />
                            </div>
                            <div className="form-items">
                                <label htmlFor="province">Province</label>
                                <div className="province-items">
                                    <input type="radio" name="province" value="Pradesh 1" onChange={onAddressChange} />
                                    <label htmlFor="pradesh1">Pradesh 1</label>

                                    <input type="radio" name="province" value="Pradesh 2" onChange={onAddressChange} />
                                    <label htmlFor="pradesh2">Pradesh 2</label>

                                    <input
                                        type="radio"
                                        name="province"
                                        value="Bagamati Pradesh"
                                        onChange={onAddressChange}
                                    />
                                    <label htmlFor="bagamatipradesh">Bagamati Pradesh</label>

                                    <input type="radio" name="province" value="Pradesh 4" onChange={onAddressChange} />
                                    <label htmlFor="pradesh4">Pradesh 4</label>

                                    <input type="radio" name="province" value="Pradesh 5" onChange={onAddressChange} />
                                    <label htmlFor="pradesh5">Pradesh 5</label>

                                    <input type="radio" name="province" value="Pradesh 6" onChange={onAddressChange} />
                                    <label htmlFor="pradesh6">Pradesh 6</label>

                                    <input type="radio" name="province" value="Pradesh 7" onChange={onAddressChange} />
                                    <label htmlFor="pradesh7">Pradesh 7</label>
                                </div>
                            </div>
                            <div className="form-items">
                                <label htmlFor="country">Country</label>
                                <input type="text" defaultValue={country} name="country" />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
