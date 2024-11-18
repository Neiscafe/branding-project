export default function FeaturedProduct({data}) {
    return <div className="col-md-4">
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={data.image} alt="img"/>
            <div className="card-body">
                <p className="card-text">
                    {data.description}
                </p>
                <div className="d-flex justify-content-end">
                    <a className="btn btn-secondary my-2">Pedir</a>
                </div>
            </div>
        </div>
    </div>
}