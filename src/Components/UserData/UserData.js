import React, { useState } from 'react'
import styles from './UserData.module.css'
import Button from '../Button/Button';


const UserData = () => {
    const [userNameInput, setUserNameInput] = useState("");
    const [ageInput, setAgeInput] = useState(null);

    const changeHandler = (event,setter) => {
        setter(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        resetData();
    }

    const resetData = ()=>{
        setUserNameInput("");
        setAgeInput(null)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.input}>
                <label>Enter User Name</label>
                <input
                    type='text'
                    value={userNameInput || ""}
                    onChange={(event) => changeHandler(event, setUserNameInput)} />
            </div>

            <div className={styles.input}>
                <label>Enter User Age</label>
                <input
                    type='number'
                    value={ageInput || ""}
                    onChange={(event) => changeHandler(event, setAgeInput)} />
            </div>
            <div className={styles.button}>
                <Button type="submit" text="Add User"/>
            </div>
        </form>
    )
}

export default UserData;