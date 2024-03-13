import './App.css';
import Mynavbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/Searchbar';
import Footer from './components/footer';
import KeyFeaturesSection from './components/features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoundItemForm from './components/detail-form';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Mynavbar />
        <Searchbar />
        <KeyFeaturesSection />
        <Routes>
          {/* Define routes here */}
          <Route path="/found" element={<FoundItemForm />} />
        </Routes>
        <Footer />
      
    </div>
    </Router>
  );
}

export default App;
