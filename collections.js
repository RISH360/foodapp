const { useState } = React;

function CollectionsPage() {
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addCollection = () => {
    if (newCollection.trim() && collections.length < 10) {
      setCollections([...collections, { name: newCollection, foods: [] }]);
      setNewCollection("");
    }
  };

  const updateCollection = (index, name) => {
    const updatedCollections = [...collections];
    updatedCollections[index].name = name;
    setCollections(updatedCollections);
    setEditingIndex(null);
  };

  const deleteCollection = (index) => {
    setCollections(collections.filter((_, i) => i !== index));
  };

  const addFoodToCollection = (index, food) => {
    if (food.trim()) {
      const updatedCollections = [...collections];
      updatedCollections[index].foods.push(food);
      setCollections(updatedCollections);
    }
  };

  return (
    <div className="container">
        <h2 className="text-xl font-bold">Collections</h2>
        {/* Rest of your component */}
    </div>
);


  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Collections</h2>
      {collections.length === 0 ? (
        <p>You have not saved anything.</p>
      ) : (
        collections.map((collection, index) => (
          <div key={index} className="p-4 space-y-2 border">
            <div className="flex justify-between items-center">
              {editingIndex === index ? (
                <input
                  value={collection.name}
                  onChange={(e) => updateCollection(index, e.target.value)}
                  onBlur={() => setEditingIndex(null)}
                  autoFocus
                />
              ) : (
                <h3 className="text-lg font-semibold">{collection.name}</h3>
              )}
              <div className="flex space-x-2">
                <button onClick={() => setEditingIndex(index)}>Edit</button>
                <button onClick={() => deleteCollection(index)}>Delete</button>
              </div>
            </div>
            <div>
              <input
                placeholder="Add food"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addFoodToCollection(index, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <ul>
                {collection.foods.map((food, i) => (
                  <li key={i}>- {food}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}

      {collections.length < 10 && (
        <div className="flex space-x-2">
          <input
            placeholder="Collection name"
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
          />
          <button onClick={addCollection}>Create Collection</button>
        </div>
      )}
    </div>
  );
}

// Render React Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CollectionsPage />);
