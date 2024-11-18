import {useEffect, useState} from "react";
import axios from "axios";

export default function CompanyInfoSection({data}) {
    const [state, setState] = useState({isLoading: true, data: {}});
    useEffect(() => {
        if (!state.isLoading) return () => {}
        axios.get("http://127.0.0.1:8080/info").then((response) => {
            setState({isLoading: false, data: response.data})
        }).catch((error) => {
            setState({isLoading: false, data: []})
        })
        return () => {}
    }, [state])
    return <section className="jumbotron text-center">
        <div className="container">
            <h1 id="texto" className="jumbotron-heading">{state.data.title}</h1>
            <p className="lead text-muted">{state.data.text}</p>
            <p>
                <a className="btn btn-primary my-2" href="https://wa.me/5551997401615" target="_blank">
                    Entrar em contato
                </a>
                <a className="btn btn-secondary my-2">
                    Nosso produtos
                </a>
            </p>
        </div>
    </section>
}