import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CountryListItem } from "@/types/country";
import { Link } from "react-router-dom";

interface CountryCardProps {
  country: CountryListItem;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link to={`/country/${country.alpha3code.toLowerCase()}`}>
      <Card className="overflow-hidden border-none bg-card shadow hover:shadow-xl rounded min-h-96 md:max-w-66 md:min-h-84 h-96">
        <img
          src={country.flag}
          alt={country.name + "flag"}
          className="w-full h-56  md:h-44 object-cover mb-6"
        />
        <CardTitle className="text-lg font-extrabold px-6">
          {country.name}
        </CardTitle>
        <CardContent className="space-y-1 p-6 text-sm">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {typeof country.population === "number"
              ? country.population.toLocaleString()
              : "N/A"}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          {country.capital?.length && (
            <p>
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
