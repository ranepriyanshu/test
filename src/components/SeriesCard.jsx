

const SeriesCard = (props) => {
    const {curElem} = props;
    return (
       
        <li className="card" key={curElem.id}>
         <div>
           <img src={curElem.img_url} alt=""
               width="40%" height="40%"/>
         </div>
         <div className="card-content">
         <h2>Name: {curElem.name}</h2>
         <h3>rating:{curElem.rating}</h3>
         <p>Summary:{curElem.description}</p>   
         <p>Genre:{curElem.genre}</p>
         <p> Cast:{curElem.cast}</p>
         <a href={curElem.watch_url} target='_blank'>
         <button
         style={{

            padding:"1.2rem 2.4rem",
            border:"none",
            fontSize:'1.6rem',
            backgroundColor:"var(--btn-hover-bg-color)",

            color:"var(--bg-color)"
         }}
         
         >Watch Now</button>
         </a>
         </div>
     </li>
        )
}

export default SeriesCard