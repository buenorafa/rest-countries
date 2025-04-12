import axios from "axios";

import { CountryListItem } from "@/types/country";

const api = axios.create({ baseURL: "http://localhost:3001" });

// home page
export async function fetchCountriesList(): Promise<CountryListItem[]> {
  const res = await api.get("/countries");

  return res.data.map((country: any) => ({
    name: country.name,
    flag: country.flag,
    population: country.population,
    region: country.region,
    capital: country.capital,
    alpha3code: country.alpha3Code,
  }));
}
