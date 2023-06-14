import React, { useState } from 'react'
import styles from './UserData.module.css'

const UserData = () => {
    return (
        <form>
            <div className={styles.input}>
                <label>Enter User Name</label>
                <input type='text' />
            </div>

            <div className={styles.input}>
                <label>Enter User Age</label>
                <input type='number' />
            </div>
        </form>
    )
}

export default UserData;