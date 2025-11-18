
import './App.css'
import { Accurdian } from './components/accordian/accurdian'
import { ImageSlider } from './components/imageslider/ImageSlider'
import { RandomColor } from './components/randomColor/RandomColor'
import StarsRating from './components/starsRating/StarsRating'



function App() {

  return (
     <main>
        <Accurdian/>
        <RandomColor/>
        <StarsRating/> 
        <ImageSlider url={'https://picsum.photos/v2/list?page=1&limit=10'}/>
     </main>
  )
}

export default App
