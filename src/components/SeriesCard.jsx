

const SeriesCard = (props) => {
    const {curElem} = props;
    return (
       
        <li key={curElem.id}>
         <div>
           <img src={curElem.img_url} alt=""
               width="40%" height="40%"/>
         </div>
         <h2>Name: {curElem.name}</h2>
         <h3>rating:{curElem.rating}</h3>
         <p>Summary:{curElem.description}</p>   
         <p>Genre:{curElem.genre}</p>
         <p> Cast:{curElem.cast}</p>
         <a href={curElem.watch_url} target='_blank'>
         <button>Watch Now</button>
         </a>
     </li>
        )
}

export default SeriesCard