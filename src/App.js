import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Modal from "./components/Modal";
import Button from "./components/Button";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("German");
  const [outputLanguage, setOutputLanguage] = useState("English");
  const [languages, setLanguages] = useState(null);

  const getLanguages = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "http://localhost:8000/languages",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const arrayOfData = Object.keys(response.data.data).map(key => response.data.data[key])
        setLanguages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log("languages", languages);

  useEffect(() => {
      getLanguages()
  }, [])

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  console.log("showModal", showModal);

  return (
    <div className="app">
      {!showModal && (
        <>
          {" "}
          <TextBox
            selectedLanguage={inputLanguage}
            style={"input"}
            setShowModal={setShowModal}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            selectedLanguage={outputLanguage}
            style={"output"}
            setShowModal={setShowModal}
          />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
