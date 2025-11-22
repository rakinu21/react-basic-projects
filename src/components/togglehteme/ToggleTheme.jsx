

import './style.css'
import { Storage } from './Storage'

export const ToggleTheme = () => {

    const [theme , settheme] = Storage('theme', 'dark')
 
    
    const handleToggleTheme = ()=>{

        settheme(theme === 'light' ? 'dark' : 'light' )
    }


  return (
   <div className="light-dark-mode" data-theme={theme}>

        <div className="container">

            <p>hello world</p>
            <button onClick={handleToggleTheme}>{theme=== 'dark' ? 'light mode' : 'dark-mode'}</button>
        </div>
   </div>
  )
}
