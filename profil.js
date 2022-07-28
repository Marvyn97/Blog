import axios from 'axios';

const profil = async() => {
    const res = await axios.get(`http://localhost/phpmyadmin/index.php?route=/sql&db=blog_3wa&table=user&pos=0`)
    console.log(res);
    return res;
}

const getrequest = async() => {
    const response = await profil();
    console.log("axios", response)
}
profil();