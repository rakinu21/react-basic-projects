import React, { useEffect, useState } from 'react'
import './style.css'
export const ScrollIndicator = ({url}) => {
    

    const [data , setdata] = useState([]);
    const [loading, setloading]= useState(false);
  const [scrollpercentage , setScrollPercentage] = useState(0)
    const fetchData = async(getUrl)=>{
        
        try {
             setloading(true)
            const response = await fetch(getUrl);
            const data  = await response.json()
          
            if(data && data.products && data.products.length){
                 
                setdata(data.products)
                setloading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
     
        fetchData(url)
    },[url])
  


   
    const handleScroll = ()=>{

        const howHowMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop ;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howHowMuchScrolled / height) * 100)
    }


    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.addEventListener('scroll', ()=>{})
        }
    },[])


    console.log(data)

    console.log(scrollpercentage)

  return (
    <div>
        <div className="scroll-tracker">
            <div className="scroll-bar" style={{width: `${scrollpercentage}%`}}>

            </div>
        </div>

        {
            loading ? 
            <p>loadding....</p>:
             null
        }

      

        {data && data.length > 0 ? 
        
        data.map((item, index)=>{

            return(
                <div className="item">{item.title}</div>
            )
        })
        :null}
    </div>
  )
}
