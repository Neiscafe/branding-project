import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import Loading from './Loading.jsx'
import Error from './Error.jsx'
import MainPage from './MainPage.jsx'

const url = "http://127.0.0.1:8080"

function App() {
    const [state, setState] = useState({isLoading: true, isSuccess: false, data: {}})

    useEffect(() => {
        if(!state.isLoading) return ()=>{}
        axios.get(url).then((res) => {
            console.log(res.data)
            setState({isLoading: false, isSuccess: true, data: res.data})
        }).catch(err => {
            console.log("start-error: \n"+ err)
                setState({isLoading: false, isSuccess: false, data: {err: err}})
        })
        return () => {}
    }, [state])

    if(state.isLoading){
        return <Loading/>
    }else if(state.isSuccess){
        return <MainPage data={state.data}/>
    }else{
        return <Error err={state.data}/>
    }
    // (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // )
}

export default App
