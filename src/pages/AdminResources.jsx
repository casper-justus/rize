import React, { useState } from 'react';

function App() {
  const [collection, setCollection] = useState('');
  const [id, setId] = useState('');
  const [updatedData, setUpdatedData] = useState({ title: '' });

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data/${collection}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Update successful');
        console.log('Update successful:', result);
      } else {
        alert(`Error: ${result.error || result.message}`);
        console.error('Error:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error occurred');
    }
  };

  return (
    <div>
      <h1>Update Data</h1>
      <div>
        <label>Collection:</label>
        <input type="text" value={collection} onChange={(e) => setCollection(e.target.value)} />
      </div>
      <div>
        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={updatedData.title} onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })} />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
