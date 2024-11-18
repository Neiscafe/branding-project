import CompanyInfoSection from "./CompanyInfoSection.jsx";
import FeaturedProductsSection from "./FeaturedProductsSection.jsx";
import Footer from "./Footer.jsx";
import MainCarousel from "./MainCarousel.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MainPage({data}) {
    return <div>
        <MainCarousel data={data} />
        <CompanyInfoSection data={data}/>
        <FeaturedProductsSection data={data}/>
        <Footer data={data}/>
    </div>
}