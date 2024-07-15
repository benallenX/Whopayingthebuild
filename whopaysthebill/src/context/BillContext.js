import React, { createContext, useState, useContext } from 'react'

const BillContext = createContext()

export const BillProvider = ({ children }) => {
    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState([])
    const [contributions, setContributions] = useState({})
    const [tip,setTip] =useState(0)

    return (
        <BillContext.Provider value={{ bill, setBill, people, setPeople, contributions,setContributions,tip,setTip }}>
            {children}
        </BillContext.Provider>
    )
}

export const useBill = () => useContext(BillContext)