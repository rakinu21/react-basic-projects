import React, { useState } from 'react'
import QRCode from 'react-qr-code'
export const QrCode = () => {


    const [qrCode , setQrCode] = useState('');


    const [lastname ,setlastname] = useState('');
    const [firstname ,setfirstname] = useState('');
    const [middlename, setmidddlename] = useState('')
   



    const disabled = !(lastname.trim() && firstname.trim())

      
    const handleGenerateQRcode = ()=>{
        const combine = `${lastname} ${firstname} ${middlename}.`
        setQrCode(combine)
    }  

    

  return (
    <div>

        <h1> QR CODE GENERATOR</h1>
        
         <input type="text"  onChange={(e)=> setlastname(e.target.value)} value={lastname}  placeholder='lastname'/>
         <input type="text" onChange={(e)=> setfirstname(e.target.value)} value={firstname}/>
         <input type="text"  onChange={(e)=> setmidddlename(e.target.value)} value={middlename}/>


        <button className="randomBtn" onClick={handleGenerateQRcode} disabled={disabled}>
            Generate
        </button>

      <div className="container-qr">
         <QRCode id='qr-code-value' value={qrCode} size={300}/>
         
      </div>

    </div>
  )
}
