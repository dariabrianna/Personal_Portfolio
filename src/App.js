import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Works />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
