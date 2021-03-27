
import {useState, useEffect} from 'react';
import "./App.css";
export default function App() {
  const [dogs, setDogs] = useState({
    message:{}
  });
  const [dogName, setDogName] = useState("")
  const [img, setImg] = useState("https://images.dog.ceo/breeds/affenpinscher/n02110627_2416.jpg")

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(result =>{
      // console.log(result);
      setDogs(result);
    })
    return () => {
      
    };
  }, [])

  const handleChange = (e) =>{
    const seletedDog = e.target.value;
    setDogName(seletedDog);
    fetch(`https://dog.ceo/api/breed/${seletedDog}/images/random`)
    .then(response => response.json())
    .then(result =>{
      // console.log(result);
      setImg(result.message);

    })
  }

  return (
    <div className="app">
      <h1>Doggo</h1>
	    
      <select className ="select" onChange = {handleChange}>
        {Object.keys(dogs.message).map((dog) =>(
          <option key = {dog} value = {dog}>{dog}</option>
        ))}
      </select>
      <h1>Get Image Here</h1>
      <div className ="img">
          <img src = {img} alt = {`no image for ${dogName}`}/>
      </div>
      
    </div>
  );
}
