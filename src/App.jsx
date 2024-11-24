import './App.css'
import FirstPageimg from './components/FirstPageimg'
import Header from './components/header'
import Logos from './components/Logos'
import Navbar from './components/navbar'
import Page2img from './components/Page2img'
import Page2Text from './components/Page2Text'
import Page3How from './components/Page3How'
import Page3Img from './components/Page3Img'
import Page3Text from './components/Page3Text'
import Page3Text2 from './components/Page3Text2'
import Page4_div1 from './components/Page4_div1'
import Page4_div2 from './components/Page4_div2'
import Page4_img1 from './components/Page4_img1'
import Page4_img2 from './components/Page4_img2'
import Page4_more from './components/Page4_more'
import Page4_more2 from './components/Page4_more2'
import Page4_txt1 from './components/Page4_txt1'
import Page5_div1 from './components/Page5_div1'
import Page5_div2 from './components/Page5_div2'
import Page5_div3 from './components/Page5_div3'
import Page5_div5 from './components/Page5_div5'
import Page5_txt from './components/Page5_txt'
import Page6_div1 from './components/Page6_div1'
import Page6_div2 from './components/Page6_div2'
import Page7_copy from './components/Page7_copy'
import Page7_div1 from './components/Page7_div1'
import Store from './components/Store'
import Page6_API from './components/Page6_API'

function App() {


  return (
    <>
        <Navbar />
      <div id="Header">
        <Header />
        <Store />
        <FirstPageimg />
      </div>
      <div id="Page2">
        <Logos/>
        <Page2img/>
        <Page2Text/>
      </div>
      <div id="Page3">
        <Page3How/>
        <Page3Img/>
        <Page3Text/>
        <Page3Text2/>
      </div>
      <div id="Page4">
        <Page4_txt1/>
        <Page4_div1/>
        <Page4_more/>
        <Page4_img1/>
        <Page4_div2/>
        <Page4_img2/>
        <Page4_more2/>
      </div>
      <div id="Page5">
        <Page5_txt/>
        <Page5_div1/>
        <Page5_div3/>
        <Page5_div5/>
        <Page5_div2/>
      </div>
      <div id="Page6">
        <Page6_div1/>
        <Page6_div2/>
        <Page7_div1/>
        <Page7_copy/>
      </div>
      <Page6_API/>
    </>
  )
}

export default App
