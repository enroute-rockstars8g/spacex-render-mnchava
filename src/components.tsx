import React, { FC, useState } from "react";
import { getShips } from "./services";

export const Ships: FC = () => {
  const [ships, setShips] = useState<any>(undefined);

  const fetchShips = async () => {
    const res = await getShips();
    setShips(res);
  };

  return (
    <div id="ships">
      <button onClick={fetchShips} className="fetchButton">
        See Ships
      </button>
      <div className="shipPanel">
        {ships !== undefined
          ? ships.map((ship: Ship, i: number) => ShipTile(ship, i))
          : null}
      </div>
    </div>
  );
};

const ShipTile = (s: Ship, id: number) => {
  return (
    <div key={`ship-${id}`} className="tile">
      <h2 className="rocketName">
        <p>{s.name}</p>
      </h2>
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
