import React, { useCallback, useMemo, useState } from 'react'

function FIlteredList() {
    const [filter, setFilter] = useState('');

    // Sample list of items
    const items = useMemo(() => ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango', 'Orange'], []);

   // Memoized filtered list
  const filteredItems = useMemo(()=>{
    
     return items.filter((item)=>  ( item.toLowerCase().includes(filter.toLowerCase)))   
  },[filter, items])

  // Memoized filter change handler
  const handleFilterChange = useCallback((event)=>{
      setFilter(event.target.value);
  }, [])

  return (
    <div>
        <h2>Filter the List</h2>
        <input
            type="text"
            placeholder="Type to filter..."
            value={filter}
            onChange={handleFilterChange}
        />
        <ul>
          {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default FIlteredList