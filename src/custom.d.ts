interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Distance;
  engines: {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: string;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: Force;
    thrust_vacuum: Force;
    thrust_to_weight: number;
  };
  first_flight: string;
  first_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    reusable: boolean;
    thrust_sea_level: Force;
    thrust_vacuum: Force;
  };
  height: Distance;
  id: string;
  landing_legs: { number: number; material: string };
  mass: { kg: number; lb: number };
  name: string;
  payload_weights: { id: string; kg: number; lb: number; name: string };
  second_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    payloads: {
      option_1: string;
      composite_fairing: {
        height: Distance;
        diameter: Distance;
      };
    };
    thrust: Force;
  };
  stages: number;
  success_rate_pct: number;
  type: string;
  wikipedia: string;
}

interface Ship {
  abs: number;
  active: boolean;
  attempted_landings: number;
  class: number;
  course_deg: number;
  home_port: string;
  id: string;
  image: string;
  imo: number;
  missions: {
    flight: string;
    name: string;
  };
  mmsi: number;
  model: string;
  name: string;
  position: { latitude: number; longitude: number };
  roles: string[];
  speed_kn: number;
  status: string;
  successful_landings: number;
  type: string;
  url: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
}

type Force = { kN: number; lbf: number };
type Distance = {
  feet: number;
  meters: number;
};
