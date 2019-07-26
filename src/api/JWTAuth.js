import axios from 'axios';
const SERVER_URL = "https://afternoon-lake-33785.herokuapp.com/api/eks/";


const unsplash =  axios.create({
    baseURL: 'https://afternoon-lake-33785.herokuapp.com/api/eks/',
    headers: {
        Authorization : 'Client-ID 6e6ce98c8ebdb235f1507ebcb6770bbf2751b948a6127aca5b3d28a7e8720035'
       }
});


const loginPost = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}login`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data); 
        console.log(response.data);
        if(response.data.code == 200){
            let content = response.data.data;
            console.log('email');
            console.log(content.email);
            let jwt = content.token;
            localStorage.setItem("access_token", jwt);
            localStorage.setItem("userLogin", JSON.stringify(content));
            localStorage.setItem("user", content);
            return response.data;
        }
    } catch(e){
        console.log(e.response.data.descriptions);
        localStorage.removeItem("access_token");
        localStorage.removeItem("userLogin");
        localStorage.removeItem("user");
        return e.response.data;
    }
}

 

const logout = () => {
    console.log('logout');
    localStorage.removeItem("access_token");
    localStorage.removeItem("userLogin");  
    localStorage.removeItem("user");    
}


export { loginPost , logout} 
