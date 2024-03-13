import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUpload, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function KeyFeaturesSection() {
  return (
    <div className="key-features">
      <div className="row g-4">
        <div className="col f-block">
          <div className="feature">
            <FontAwesomeIcon icon={faUpload} className="feature-icon" />
            <h3>Post Found Item</h3>
            <p>Found something? Share it with the community!</p>
          </div>
        </div>
        <div className="col f-block">
          <div className="feature">
            <FontAwesomeIcon icon={faSignOutAlt} className="feature-icon" />
            <h3>Post Missing Item</h3>
            <p>Lost something? Let others know to help you find it!</p>
          </div>
        </div>
        <div className="col f-block">
          <div className="feature">
            <FontAwesomeIcon icon={faSearch} className="feature-icon" />
            <h3>Smart Search</h3>
            <p>Effortlessly find lost items using our advanced search.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeaturesSection;
