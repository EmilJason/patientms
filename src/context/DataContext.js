import {createContext, useEffect, useState} from 'react'

export const DataContext = createContext()

export const DataContextProvider = props =>{
    const [user, setUser] = useState(null)
    const [patients, setPatients] = useState([])

    //get the user
    const getUser = details => setUser(details)

    //get patients
    const getPatients = (patientDetails) =>{
        if (patients === []) {
            setPatients([patientDetails])
        }
    }

    useEffect(()=>{
        console.log(user,patients)
    })

    return (
        <DataContext.Provider value={{user, getUser, patients, getPatients}}>
            {props.children}
        </DataContext.Provider>
    )
}