import React, {Component} from 'react'; 
import {  Spinner  } from 'react-bootstrap';
import axios from 'axios';

const SERVER_URL = "https://afternoon-lake-33785.herokuapp.com/api/eks/";
const  access_token =  localStorage.getItem('access_token');

const unsplash =  axios.create({
    baseURL: 'https://afternoon-lake-33785.herokuapp.com/api/eks/',
    headers: {
        Authorization : `${access_token}`
       }
});

 

const list_cucian = async () => { 
    try {
        let response = await unsplash.get('pengajuan/byuser');
        console.log(response.data.data.data);
        if(response.data.code == 200){
            return response.data;
        }
    } catch(e){
         return e.response.data;
    }
}

const loginPost = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}login`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data); 
        console.log(response.data);
        if(response.data.code == 200){
            let content = response.data.data;
          
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

const data_spiner =() => {
    return <>
    <Spinner animation="border" variant="primary" />
    <Spinner animation="border" variant="secondary" />
    <Spinner animation="border" variant="success" />
    <Spinner animation="border" variant="danger" />
    <Spinner animation="border" variant="warning" />
    <Spinner animation="border" variant="info" />
    <Spinner animation="border" variant="light" />
    <Spinner animation="border" variant="dark" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="dark" />
  </>;
  } 

export { loginPost , logout , list_cucian, unsplash ,data_spiner} 
