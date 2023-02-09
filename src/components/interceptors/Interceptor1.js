import client from "../HTTP/Api";


export default function Myinterceptor1(){
    client.interceptors.request.use((req)=>{
        console.log(req);
        req.headers["MyHeader"]="MyHeader";
    })
}