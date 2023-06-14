import React, { useState } from 'react'
import styles from './UserData.module.css'
import Button from '../Button/Button';


const UserData = (props) => {
    const [userNameInput, setUserNameInput] = useState("");
    const [ageInput, setAgeInput] = useState('');

    const changeHandler = (event,setter) => {
        setter(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (userNameInput.trim().length === 0 || ageInput.trim().length === 0) {
            return alert('You should fill all filed wiht (Name) and (age) ');
        }
        if (ageInput < 1) {
            return alert("Age Should be bigger than 0 ");
        }

        const data = {
            name: userNameInput,
            age: ageInput
        }
        props.onSaveData(data)

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
                <Button type="submit">Add User</Button>
            </div>
        </form>
    )
}

export default UserData;