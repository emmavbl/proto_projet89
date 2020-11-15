function Image({path, format}){
    return(
        <div>
            <img src={'/src/souvenirs/' + path + '.' + format}></img>
        </div>
    );
}

export default Image