import ControlsMainCarousel from './ControlsMainCarousel.jsx';
import ItemMainCarousel from "./ItemMainCarousel.jsx";
import IndicatorsMainCarousel from "./IndicatorMainCarousel.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

export default function MainCarousel() {
    const [state, setState] = useState({isLoading: true, data: []});
    useEffect(() => {
        if (!state.isLoading) return () => {}
        axios.get("http://127.0.0.1:8080/carousel").then((response) => {
            setState({isLoading: false, data: response.data})
        }).catch((error) => {
            setState({isLoading: false, data: []})
        })
        return () => {}
    }, [state])
    let items = state.data.map((item, index) => {
        return <ItemMainCarousel key={item.id} data={item} index={index}/>;
    })
    return <>
        <div className="w-100 flex-grow-1">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">{state.data.map((item, index) => {
                    return <IndicatorsMainCarousel key={index} index={index}/>
                })}
                </ol>
                <div className="carousel-inner">
                    {items}
                </div>
                <ControlsMainCarousel/>
            </div>
        </div>
    </>
}