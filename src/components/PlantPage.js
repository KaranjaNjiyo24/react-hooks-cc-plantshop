import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [])

  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleSearch = (word) => {
    setSearchWord(word)
  }

  const filteredPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(searchWord.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
