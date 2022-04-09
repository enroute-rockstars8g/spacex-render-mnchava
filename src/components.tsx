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
          ? ships
              .filter((s: Ship) => s.image)
              .map((ship: Ship, i: number) => ShipTile(ship, i))
          : null}
      </div>
    </div>
  );
};

const ShipTile = (s: Ship, id: number) => {
  return (
    <div key={`ship-${id}`} className="tile">
      {s.image !== "" ? (
        <figure>
          <img src={s.image} alt="" className="shipImage" />
          <figcaption>{s.model}</figcaption>
        </figure>
      ) : null}
      <div className="shipInfo">
        <h2 className="shipName">
          <p>
            <a href={s.url} className="shipUrl">
              {s.name}
            </a>
          </p>
        </h2>
        <ul>
          <li>Built: {s.year_built || "-"}</li>
          <li>{s.missions.length || "0"} missions</li>
          <li>
            Type: {s.type || "-"}
            {s.type === "Barge" ? (
              <i>
                {" "}
                {s.successful_landings}/{s.attempted_landings} landings
              </i>
            ) : null}
          </li>
          <li>Roles: {s.roles.join(", ") || "-"}</li>
        </ul>
      </div>
    </div>
  );
};
