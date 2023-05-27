import React, {useState, useEffect} from "react"


export default function Meme () {
    const [memeData, setMemeData] = useState()
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            imageUrl: "http://i.imgflip.com/1bij.jpg"
        }
    )

    console.log(memeData)

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes))
    }, [])

    function handleChange (event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
            }
        ))

    }

    function handleClick () {
        const randomNum = Math.floor(Math.random() * memeData.length)
        setMeme((prevMeme) => (
            {
                ...prevMeme,
                imageUrl: memeData[randomNum].url
            }
        ))
    }

    function handleSubmit (event) {
        event.preventDefault();
    }

    return (
        <div className="container">
            <form className="meme-form" onSubmit={handleSubmit}>
                <div className="input-row">
                    <input
                        type="text"
                        className="top-text"
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="bottom-text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick}>
                    Get a new meme image
                </button>
            </form>
            <div className="image-container">
                <img className="meme-image" src={meme.imageUrl} alt="meme image"/>
                <p className="meme-top-text">{meme.topText}</p>
                <p className="meme-bottom-text">{meme.bottomText}</p>
            </div>
        </div>
    )
}