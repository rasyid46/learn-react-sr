import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization : 'Client-ID 6e6ce98c8ebdb235f1507ebcb6770bbf2751b948a6127aca5b3d28a7e8720035'
       }
});