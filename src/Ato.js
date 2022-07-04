

const Ato = ({ curr, word, index,arr }) => {



    return (
        <>
            {curr === index ? <b>
                {word} </b> : curr>index ? <span style={arr[index] ? {color:"green"}: {color:"red"}}>{word} </span> : <span
                    style={{color:"grey"}}>{word} </span>}
        </>
    )


}

export default Ato;
