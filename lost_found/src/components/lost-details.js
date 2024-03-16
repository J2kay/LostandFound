import React, { useState } from 'react';


function LostItemForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend
    console.log(formData);
  };

  return (
    <div>
      <div  className='form-div'>
        
        <form onSubmit={handleSubmit} className="form-container">
        <h4>Lost Item Form</h4>
          <label>
            Item Name:
            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LostItemForm;
