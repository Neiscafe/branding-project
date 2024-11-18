import {useEffect, useState} from "react";
import axios from "axios";
import FeaturedProduct from "./FeaturedProduct.jsx";

export default function FeaturedProductsSection({data}) {
    const [state, setState] = useState({isLoading: true, data: []});
    useEffect(() => {
        if (!state.isLoading) return () => {
        }
        axios.get("http://127.0.0.1:8080/product").then((response) => {
            setState({isLoading: false, data: response.data})
        }).catch((error) => {
            setState({isLoading: false, data: []})
        })
        return () => {
        }
    }, [state])
    const items = state.data.map((value, index) => {
        return <FeaturedProduct key={index} data={value}/>
    })
    return <div className="album py-5 bg-light">
        <div className="container">
            <div id="feature-products-row" className="row">{items}</div>
        </div>
    </div>
}