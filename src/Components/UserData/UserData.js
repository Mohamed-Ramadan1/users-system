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
        event.preventDefualt()
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
                <input type='text' value={userNameInput} onChange={(event)=>changeHandler(event,setUserNameInput)} />
            </div>

            <div className={styles.input}>
                <label>Enter User Age</label>
                <input type='number' value={ageInput} onChange={(event) => changeHandler(event, setAgeInput)} />
            </div>
            <Button type="submit" text="Add User"/>
        </form>
    )
}

export default UserData;