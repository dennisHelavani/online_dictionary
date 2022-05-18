import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { InputContext } from "../App";
import Definition from "./Definition";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import { useParams } from "react-router-dom";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const ResultList = () => {
  const { word } = useParams();

  useEffect(() => {
    word && fetchData(word);
  }, []);
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState();
  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      const url = res.data[0].phonetics[0].audio;
      setAudio(url);
      Error(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);
  if (loading) {
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="not-found">
        <h3 className="searched-word">No definition has been found 😔 </h3>
        <p>
          Redirect to <a href="../App.js">Home page</a>
        </p>
      </div>
    );
  }
  return (
    <div className="result-container">
      {response && (
        <div>
          {/* <h3 className="searched-word">
            Result for: <span>{word}</span>
          </h3> */}
          {audio ? (
            <audio controls className="" src={audio}></audio>
          ) : (
            <div className="header">Audio not found</div>
          )}
          <h3 className="result-headers">Meaning & Definition</h3>
          <Definition mean={response} />
          <h3 className="result-headers">Example:</h3>
          <Example mean={response} />
          <h3 className="result-headers">Synonym:</h3>
          <Synonym mean={response} />

          <h3 className="result-headers">Antonym:</h3>
          <Antonym mean={response} />
        </div>
      )}
    </div>
  );
};

export default ResultList;
