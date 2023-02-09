import axios from "axios";

export default function Myinterceptor2() {
  axios.interceptors.request.use((req) => {
    console.log(req);
    req.headers["Myheader"] = "123";
  });
}
