function Square({ value }) {
    return <button className="square">{value}</button>;
  }
  
 function Calculateb({value, onSquareClick}){
    return(
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
 }

function CalculateW(){
    const addTo = (nvalue) =>{
        setCalcVal(ovalue => ovalue + nvalue)
    }
}
 

 

  export default function Board() {
    return (
        
      <>
        <div className="Name"></div>
        <div className="board-row">
          <Calculateb value="7" />
          <Calculateb value="8" />
          <Calculateb value="9" />
          <Calculateb value="/" />

        </div>
        <div className="board-row">
          <Calculateb value="4" />
          <Calculateb value="5" />
          <Calculateb value="6" />
          <Calculateb value="-" />



        </div>
        <div className="board-row">
          <Calculateb value="1" />
          <Calculateb value="2" />
          <Calculateb value="3" />
          <Calculateb value="+" />

        </div>
        <div className="board-row">
          <Calculateb value="" />
          <Calculateb value="0" />
          <Calculateb value="C" />
          <Calculateb value="*" />

        </div>
      </>
    );
  }