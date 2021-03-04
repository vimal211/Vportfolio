import './App.css';
import MyNavbar from "./components/mynavbar/mynavbar";
import MyCarousel from "./components/mycarousel/mycarousel";
import MyTitle from "./components/titlemessage/titlemessage"

const App=()=> {
  return (
    <div >
      <MyNavbar/>
      <MyCarousel/>
      <MyTitle/>
    </div>
  );
}

export default App;
