const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a89f08a60b3cb3b661baa26693353594`);

    if (resp.data.cod != 200) {

        throw new Error(`No hay resultados para las coordenadas ${ lat }, ${ lng }`);

    }

    let temp = resp.data.main.temp;

    return temp;
}

module.exports = {
    getClima
}