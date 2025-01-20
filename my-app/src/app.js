// Crear un componente simple
function App() {
  const [count, setCount ] = React.useState(0);
    
  
  return (
    <div className="container"  id="quote-box" >
      <h1  id="text"   >Contador Simple</h1>
      <p   id="author"  >Has hecho clic { count} veces</p>
      <a id="tweet-quote"  href="twitter.com/intent/tweet"></a>
      <button  id="new-quote"  onClick={() => setCount( count + 1 )}>new quote</button>
    </div>
  );
}

// Renderizar el componente en el DOM
ReactDOM.render(<App />, document.getElementById("root"));





