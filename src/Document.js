import './Document.css'
import raw from 'raw.macro';


function Document({path, desc, format, themes, onClick}){
    return(
        <div className="souvenir">
            <h1>{desc}</h1>
            {format === "jpg" ? 
                <img src={'../souvenirs/' + path + '.jpg'} alt={desc}></img> 
                : <p>{raw(`../public/souvenirs/${path}.txt`).substr(0,500).concat("...")}</p>
            }
            <div className="themes">
                {themes.map((themes, index) =>(
                    <button key={index} onClick={onClick}>{themes}</button>
                ))}
            </div>
        </div>
    );
}

export default Document