export default function IndicatorMainCarousel({index}) {
    return <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0?"active":""}/>
}