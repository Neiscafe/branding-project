import {useEffect, useState} from "react";
import axios from "axios";
import ItemFooter from "./ItemFooter.jsx";

export default function Footer({data}) {
    const [state, setState] = useState({isLoading: true, data: []});
    useEffect(() => {
        if (!state.isLoading) return () => {
        }
        axios.get("http://127.0.0.1:8080/links").then((response) => {
            setState({isLoading: false, data: response.data})
        }).catch((error) => {
            setState({isLoading: false, data: []})
        })
        return () => {
        }
    }, [state])
    let items = state.data.map((item, index) => {
        return <ItemFooter key={index} data={item}/>
    })
    return <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="https://www.google.com" target="_blank"
                   className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <img width="30" height="24" src="react/src/assets/logo-placeholder.jpg" alt="Logo da empresa"/>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div>
            <ul className="nav col-mb-4 justify-content-end list-unstyled d-flex">
                {items}
            </ul>
        </footer>
    </div>
}