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
  missions: [{
    flight: string;
    name: string;
  }];
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
