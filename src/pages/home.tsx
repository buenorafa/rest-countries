import { useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryCard from "@/components/country-card";

import { useEffect } from "react";
import { fetchCountriesList } from "@/lib/api";
import { CountryListItem } from "@/types/country";

export default function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const [countries, setCountries] = useState<CountryListItem[]>([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountriesList();
        setCountries(data);
      } catch (error) {
        console.error("Erro ao buscar os países:", error);
      }
    };

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
    );
  });

  return (
    <section className="py-4 px-4 md:px-16 space-y-8 ">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between ">
        <Input
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-card text-foreground placeholder-muted-foreground shadow px-6 py-4 rounded-md w-full max-w-md border-none h-12"
        />

        <Select onValueChange={setRegion} value={region}>
          <SelectTrigger size="lg" className="w-48 shadow bg-card border-none ">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className="shadow bg-card border-none dark:hover:bg-muted">
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="Americas">Americas</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-10 sm:grid-cols-2  lg:grid-cols-4 2xl:grid-cols-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3code} country={country} />
        ))}
      </div>
    </section>
  );
}
