import './App.scss';
import Header from "./Header";
import Body from "./Body";
import Menu from './Menu';

function App() {

  return (
    <>
    <Menu />
    <body id="bg-img">
    <div class="overlay"></div>
    <Header />
    <Body />
    </body>
    </>
  );
}

export default App;
