import { useEffect, useState } from 'react'
import Ato from './Ato';



var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

// function randGen() {
//     return Math.floor(Math.random() * 5);
// }

var rand1 = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);
var rand3 = Math.floor(Math.random() * 10);
var rand4 = Math.floor(Math.random() * 10);
var rand5 = Math.floor(Math.random() * 10);
var rand6 = Math.floor(Math.random() * 10);
//                var randCol = [rand1,rand2,rand3,rand4,rand5];
//                var i = randGen();
var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " +
    adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " +
    adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " +
    adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3]
    + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";


const kelime = content
const target = kelime.split(' ')
const arr = [];

const TypeApp = () => {

    const [realType, setRealType] = useState('');
    const [curr, setCurr] = useState(0);
    const [numb, setNumb] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccutacy] = useState(0);



    useEffect(() => {

        if (realType[realType.length - 1] === ' ') {

            if (realType.slice(0, realType.length - 1) === target[curr]) {
                arr.push(1);
            } else {
                arr.push(0)
            }

            // window.location.reload()

            setRealType('')
            setCurr((e) => e + 1);
        }

        let itn
        if (numb === 0 && realType.length === 1 && curr === 0) {

            itn = setInterval(() => {
                setNumb((e) => e + 1)
            }, 1000)
            console.log(itn);

        }

        if (curr >= target.length) {

            setWpm(Math.floor((kelime.length / 5) / (numb / 60)))

            const filter = arr.filter(el => el === 1);

            setAccutacy(Math.floor((filter.length / curr) * 100));


            for (let i = 0; i < 100; i++) {
                window.clearInterval(i);
            }
        }

    }, [realType])


    return (
        <div className='mainDiv'>
            <h1 style={{ textAlign: "center" }}>Typing App</h1>

            <input disabled={wpm} className='inputrealtype' type='text' value={realType} onChange={(e) => setRealType(e.target.value)}>

            </input>
            {
                !wpm &&
                <p className='in'>{numb}</p>
            }


            {
                wpm > 0 &&
                <>
                    <p className='ini'>WPM: {wpm}</p>
                    <p className='inii'>Accuracy: {accuracy}%</p>
                    <p className='iniii'>Duration: {numb}s</p>
                </>
            }

            <div className='asilsey'>
                <p>{target.map((word, index) => {

                    return <Ato arr={arr} curr={curr} word={word} index={index} />

                })}</p>
            </div>
            <button className='inw' onClick={() => window.location.reload()}>Restart</button>
        </div>
    )
}

export default TypeApp;
