export default function ItemMainCarousel({index, data}) {
    return <div className={index===1?"carousel-item active":"carousel-item"}>
        <img className="d-block w-100" src={data.image} alt={index + " slide"}/>
    </div>
}