import React,{useState,useEffect} from "react";
import styles from './UserList.module.css'

 
const UserList = ({data}) => {
    const [dataArray, setDataArray] = useState([]);
    
    useEffect(() => {
        if (data) {
            setDataArray(prevDataArray => [...prevDataArray, data]);
        }
    }, [data]);
    
    console.log(data)

    return (
        <div className={styles.users}>
            <ul >
                {dataArray.map((item, index) => (
                <li key={index}>{`${item.name}  (Your age is ${item.age} year)`}</li> // Assuming 'name' is a property in the object
        ))}
        
            </ul>

        </div>
    )
    
}

export default UserList;