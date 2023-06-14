import React, { useState } from 'react'


const UserData = () => {
    return (
        <form>
            <div>
                <label>Enter User Name</label>
                <input type='text' />
            </div>

            <div>
                <label>Enter User Age</label>
                <input type='number' />
            </div>
        </form>
    )
}

export default UserData;