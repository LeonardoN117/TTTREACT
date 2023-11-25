function Square({ value }) {
    return <button className="square">{value}</button>;
  }
  
 function Calculate({value, onSquareClick}){
    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
 }


 

 

  export default function Board() {
    return (
        
      <>
        <div className="Name"></div>
        <div className="board-row">
          <Calculate value="7" />
          <Calculate value="8" />
          <Calculate value="9" />
          <Calculate value="/" />

        </div>
        <div className="board-row">
          <Calculate value="4" />
          <Calculate value="5" />
          <Calculate value="6" />
          <Calculate value="-" />



        </div>
        <div className="board-row">
          <Calculate value="1" />
          <Calculate value="2" />
          <Calculate value="3" />
          <Calculate value="+" />

        </div>
        <div className="board-row">
          <Calculate value="" />
          <Calculate value="0" />
          <Calculate value="C" />
          <Calculate value="*" />

        </div>
      </>
    );
  }