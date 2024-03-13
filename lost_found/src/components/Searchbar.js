import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import keyimg from '../images/keyimg.jpg';
import searchImg from '../images/searchImg.jpg';
import walletImg from '../images/walletImg.jpg';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform the search action using the 'searchQuery' state
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="searchbar-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className='image' src={searchImg} alt='missing keys' />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='image' src={keyimg} alt='missing keys' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='image' src={walletImg} alt='missing keys' />
        </Carousel.Item>
      </Carousel>
      <div className="searchbar-overlay">
        <Form onSubmit={handleSubmit} inline>
          <div className="search-input">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
            />
          </div>
        </Form>
        
      </div>
    </div>
  );
}

export default Searchbar;
