import React from 'react';
import Page from "./startPage";
import MainPage from "./mainPage"


function App() {
  const [viewPage,setViewPage]=React.useState(true)
  

  function changeValue(){
    setViewPage(false)
  }
  
  return (
    <div className="App">
    {viewPage? <Page changeValue={changeValue}/>: <MainPage/>}
    </div>
  )
}

export default App
