export default function Error({err}){
    let [title, message] = ["Ocorreu um erro", ""]
    if(err.response){
        [title, message]= [err.response.status, err.response.data]
    }else if(err.request){
        [message] = err.request
    }else{
        [message] = err.message!==undefined?err.message:""
    }
    return <div className="bg-danger w-100 h-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white">{title}</h1>
        <h2 className="text-white">{message}</h2>
    </div>
}