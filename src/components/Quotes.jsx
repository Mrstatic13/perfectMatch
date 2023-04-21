import axios from 'axios';
import {Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Quotes(){

    const [sign, setSign] = useState('');

    const fetchSign = () => {
    
        const options = {
            method: 'GET',
            url: 'https://horoscope-astrology.p.rapidapi.com/dailyphrase',
            headers: {
              'X-RapidAPI-Key': '3406df7205msh5fe2aedf825acb2p10c1dajsnc55a4bfe9047',
              'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            }
          };          

      axios.request(options)
      .then(res => {
          console.log(res.data.daily);
          setSign(res.data.daily)
      }).catch(err => {
        console.log(err)
      });  
    }

    useEffect(() => {
        fetchSign()
    }, []);

    return(
        <Container>
            <h1>Daily Phrase</h1>
                <br/>
                <br/>
            {sign && <h3>{'"' + sign + '"'}</h3>}
        </Container>
    )
}
export default Quotes;