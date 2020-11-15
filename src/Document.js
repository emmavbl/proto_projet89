import './Document.css'
import raw from 'raw.macro';


function Document({path, desc, format, themes}){
    return(
        <div className="souvenir">
            <h1>{desc}</h1>
            {format === "jpg" ? 
                <img src={'../souvenirs/' + path + '.jpg'} alt={desc}></img> 
                : <p>{raw(`../public/souvenirs/${path}.txt`)}</p>
            }
            <div className="themes">
                {themes.map((themes, index) =>(
                    <button key={index}>{themes}</button>
                ))}
            </div>
        </div>
    );
}

export default Document