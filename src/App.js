import './App.css';
import Post from './components/Post';

function App() {

const example = ()=>{
  return 
};

  let postA = [
    { titel: "מאיר חדד", info: "נפל החיבור לזום"},
    { titel: "איתן מרצה", info: "נפל החשמל.. אנא המתן" },
    { titel: "נועה אסרף", info: "אתם בפינת עישון?"},
    { titel: "אופק פטריק ", info: "כן"},
  ];

return (
  <div className="App">
    {example()}
    {/* <Header />
    <Middel /> */}
    <Post titel={postA[0].titel} info={postA[0].info} />
    
{/* {postA.map((value)=>{
return <Post titel={value.titel} info={value.info} /> */}
{/* })} */}
</div>
);
};

export default App;

