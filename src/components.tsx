import React, { FC, useState } from "react";
import { getRockets, getShips } from "./services";

export const Rockets: FC = () => {
  const [rockets, setRockets] = useState<any>(undefined);

  const fetchRockets = async () => {
    const res = await getRockets();
    setRockets(res);
  };

  return (
    <div id="rockets">
      <div className="leftPanel">
        <button onClick={fetchRockets}>See Rockets</button>
      </div>
      <div className="rightPanel">
        {rockets !== undefined
          ? rockets.map((rocket: Rocket, i: number) => RocketTile(rocket, i))
          : null}
      </div>
    </div>
  );
};

const RocketTile = (r: Rocket, id: number) => {
  return (
    <div id="rocket" key={`rocket-${id}`} className="tile">
      <h2 className="rocketName">{r.name}</h2>
      <p className="rocketInfo">First flight: {r.first_flight}</p>
      <p className="rocketInfo">Height: {r.height.meters}</p>
    </div>
  );
};

export const Ships: FC = () => {
  const [ships, setShips] = useState<any>(undefined);

  const fetchShips = async () => {
    const res = await getShips();
    setShips(res);
  };

  return (
    <div id="ships">
      <div className="leftPanel">
        <button onClick={fetchShips}>See Ships</button>
      </div>
      <div className="rightPanel">
        {ships !== undefined
          ? ships.map((ship: Ship, i: number) => ShipTile(ship, i))
          : null}
      </div>
    </div>
  );
};

const ShipTile = (s: Ship, id: number) => {
  return (
    <div id="ship" key={`ship-${id}`} className="tile">
      <h2 className="rocketName">{s.name}</h2>
      {s.image !== "" ? (
        <figure>
          <img src={s.image} alt="" className="shipImage" />
          <figcaption>{s.model}</figcaption>
        </figure>
      ) : null}
      <ul>
        <li>Built: {s.year_built || "-"}</li>
        <li>Class: {s.class || "-"}</li>
        <li>Landings: {s.successful_landings || 0}</li>
      </ul>
    </div>
  );
};
