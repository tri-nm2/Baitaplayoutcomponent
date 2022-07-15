import "./App.css";
import NavBar from "./components/baitaplayoutcomponent/navbarComponent/navbar";
import Header from "./components/baitaplayoutcomponent/headerComponent/header";
import FeatureList from "./components/baitaplayoutcomponent/featureListComponent/featureList";
import Footer from "./components/baitaplayoutcomponent/footerComponent/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <FeatureList />
      <Footer />
    </div>
  );
}

export default App;
