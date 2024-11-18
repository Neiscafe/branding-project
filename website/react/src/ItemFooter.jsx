import instagram from "./assets/instagram-icon.webp"
import facebook from "./assets/logo_facebook.png"
import whatsapp from "./assets/whatsapp.png"
import placeholder from "./assets/logo-placeholder.jpg"
export default function ItemFooter({data}) {
    let img =  ""
    if(data.link.includes("instagram")){
        img = instagram
    }else if(data.link.includes("facebook")){
        img = facebook
    }else if(data.link.includes("wa.me")){
        img = whatsapp
    }else{
        img = placeholder
    }
    return <li className="ms-6 pl-2">
        <a href={data.link} target="_blank">
            <img width="24" height="24" src={img}
                 alt="Logo da empresa"/>
        </a>
    </li>
}