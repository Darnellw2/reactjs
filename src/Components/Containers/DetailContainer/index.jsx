import React from "react";
import { useParams } from "react-router-dom";
import getRandomImageUrl from "../../../Helpers/getRandomImageUrl";
import usePlanet from "../../../Queries/usePlanet";
import "./DetailContainer.css";

// This container will hold the contents of the details page, displaying information of the item selected on the gallery page.
const DetailContainer = () => {
  const params = useParams();
  console.log(params);
  const data = usePlanet(params.planetId);
  const planet = data?.planet;

  const title = planet?.name;
  const climate = planet?.climate;
  const terrain = planet?.terrain;
  const population = planet?.population;
  const gravity = planet?.gravity;
  const diameter = planet?.diameter;
  const rotationPeriod = planet?.rotationPeriod;
  const orbitalPeriod = planet?.orbitalPeriod;

  const imageUrl = getRandomImageUrl({ seed: title, width: 1200, height: 400 });

  return (
    <div className="container">
      <h1 className="text-center">{title}</h1>
      <div className="detail-container">
        <img className="detail-image" src={imageUrl} alt={title || "planet"} />
        <div className="tabs">
          <button className="tab tab--active">Details</button>
          <button className="tab">People</button>
          <button className="tab">Movies</button>
        </div>
        <div className="detail-content">
          <div className="detail-content__block">
            <h2>General</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Climate:</td>
                  <td>{climate}</td>
                </tr>
                <tr>
                  <td>Terrain:</td>
                  <td>{terrain}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{population}</td>
                </tr>
                <tr>
                  <td>Gravity:</td>
                  <td>{gravity}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="detail-content__block">
            <h2>Statistics</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Diameter:</td>
                  <td>{diameter}</td>
                </tr>
                <tr>
                  <td>Rotation period:</td>
                  <td>{rotationPeriod}</td>
                </tr>
                <tr>
                  <td>Orbital period:</td>
                  <td>{orbitalPeriod}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="detail-footer">
          <button className="button">Take me there!</button>
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
