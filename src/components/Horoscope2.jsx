import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';


function Horoscope2() {
    // const [sign, setSign] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {value: 'taurus', label: 'Taurus'},
        {value: 'libra', label: 'Libra'}
    ];

    const fetchSign = () => {
        const option = {
        method: 'GET',
        url: `https://horoscope-astrology.p.rapidapi.com/sign?s=${options[0]}`,
 
        headers: {
          'X-RapidAPI-Key': '3406df7205msh5fe2aedf825acb2p10c1dajsnc55a4bfe9047',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
      };
      
      axios.request(option)
      .then(res => {
          console.log(res.data.about);
          setSelectedOption(res.data.about)
      }).catch(err => {
        console.log(err)
      });  
    }
    useEffect(() => {
        fetchSign()
    }, []);

    return (
        <div>
            <h1>Sign Characteristics</h1>
            <Select 
                defaultValue = {selectedOption}
                onChange = {setSelectedOption}
                options ={options}
            />
           
        </div>
    )

}
export default Horoscope2;
