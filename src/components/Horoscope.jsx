import axios from 'axios';
import {Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Horoscope() {

    const [sign, setSign] = useState('');

    const params = [
        'taurus',
        'libra',
        'leo',
        'aries',
        'gemini',
        'virgo',
        'scorpio',
        'cancer',
        'sagittarius',
        'capricorn',
        'aquarius',
        'pisces',
    ];

    let i = '';

    const btnPressTau = () => {
        i = 0;
    }
    const btnPressLib = () => {
        i = 1;
    }
    const btnPressLeo = () => {
        i = 2;
    }
    const btnPressAri = () => {
        i = 3;
    }
    const btnPressGem = () => {
        i = 4;
    }
    const btnPressVir = () => {
        i = 5;
    }
    const btnPressSco = () => {
        i = 6;
    }
    const btnPressCan = () => {
        i = 7;
    }
    const btnPressSag = () => {
        i = 8;
    }
    const btnPressCap = () => {
        i = 9;
    }
    const btnPressAqu = () => {
        i = 10;
    }
    const btnPressPis = () => {
        i = 11;
    }
        
    const fetchSign = () => {
    
        const options = {
        method: 'GET',
        url: `https://horoscope-astrology.p.rapidapi.com/sign?s=${params[i]}`,
        headers: {
          'X-RapidAPI-Key': '3406df7205msh5fe2aedf825acb2p10c1dajsnc55a4bfe9047',
          'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then(res => {
          console.log(res.data.about);
          setSign(res.data.about)
      }).catch(err => {
        console.log(err)
      });  
    }

    useEffect(() => {
        fetchSign()
    }, []);

    return (
        <Container>
            <h1>Sign Characteristics</h1>

            <button 
            onClick = {() => {
                btnPressTau();
                fetchSign();
            }}>Taurus
            </button>

            <button 
            onClick = {() => {
                btnPressLib();
                fetchSign();
            }}>Libra
            </button>

            <button 
            onClick = {() => {
                btnPressLeo();
                fetchSign();
            }}>Leo
            </button>

            <button 
            onClick = {() => {
                btnPressAri();
                fetchSign();
            }}>Aries
            </button>

            <button 
            onClick = {() => {
                btnPressGem();
                fetchSign();
            }}>Gemini
            </button>

            <button 
            onClick = {() => {
                btnPressVir();
                fetchSign();
            }}>Virgo
            </button>

            <button 
            onClick = {() => {
                btnPressSco();
                fetchSign();
            }}>Scorpio
            </button>

            <button 
            onClick = {() => {
                btnPressCan();
                fetchSign();
            }}>Cancer
            </button>

            <button 
            onClick = {() => {
                btnPressSag();
                fetchSign();
            }}>Sagittarius
            </button>

            <button 
            onClick = {() => {
                btnPressCap();
                fetchSign();
            }}>Capicorn
            </button>

            <button 
            onClick = {() => {
                btnPressAqu();
                fetchSign();
            }}>Aquarius
            </button>

            <button 
            onClick = {() => {
                btnPressPis();
                fetchSign();
            }}>Pisces
            </button>
            <br />
            <br />
            {sign && <h5>{sign}</h5>}
        </Container>
    )
}
export default Horoscope;