import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  text-align: center;
`;
const RandomBlockH = styled.h4`
  margin-bottom: 20px;
  text-align: center;
`;
const Term = styled.span`
  font-weight: bold;
`;

function RandomChar() {
  const [char, updateCharn] = useState({});
  const [loading, onCharLoadedn] = useState(true);
  const [error, onError] = useState(false);

  useEffect(() => {
    updateChar();
  }, []);

  const gotService = new GotService();

  const updateChar = () => {
    const id = Math.floor(Math.random() * 200 + 1);
    gotService
      .getCharacter(id)
      .then((data) => {
        updateCharn(data);
        onCharLoadedn(false);
      })
      .catch(() => {
        onError(true);
        onCharLoadedn(false);
      });

      
    };
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;
        return (
          <RandomBlock className="rounded">
            {errorMessage}
            {spinner}
            {content}
          </RandomBlock>
        );

}
      const View = ({ char }) => {
        const { name, gender, born, died, culture } = char;
        return (
          <>
            <RandomBlockH>Random Character: {name}</RandomBlockH>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{gender}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Born </Term>
                <span>{born}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Died </Term>
                <span>{died}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{culture}</span>
              </li>
            </ul>
          </>
        );
      };
export default RandomChar;
