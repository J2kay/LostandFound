import './App.css';
import Mynavbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './components/Searchbar';
import Footer from './components/footer';
import KeyFeaturesSection from './components/features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoundItemForm from './components/detail-form';
import Myhome from './components/home';
import LostItemForm from './components/lost-details';
import ItemDisplay from './components/Card';




function App() {
  return (
    <Router>
    <div className="App">
      
        <Mynavbar />
        
        <Routes>
          {/* Define routes here */}
          <Route path='/' element={<Myhome />} />
          <Route path="/found" element={<FoundItemForm />} />
          <Route path="/lost" element={<LostItemForm />} />
          <Route path="/item-list" element={<ItemDisplay />} />
         
        </Routes>
        <Footer />
      
    </div>
    </Router>
  );
}

export default App;
