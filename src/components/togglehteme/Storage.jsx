import React, { useEffect, useState } from 'react'

export const Storage = (key, deafaultValue) => {

    const [value , setValue] = useState(()=>{

        let currentValue ;

        try {

            currentValue = JSON.parse(localStorage.getItem(key) || String(deafaultValue))
            
        } catch (error) {
            console.log(error)
            currentValue = deafaultValue
        }

        return currentValue
    })

    useEffect(()=>{

        localStorage.setItem(key , JSON.stringify(value))

    },[key, value])



  return [value , setValue]
}
