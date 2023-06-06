import { useContext, useEffect, useState } from "react";
import { Context } from "../../../contexts/Context";
import { filteredCountries } from "../../../redurcers/countriesReducer";
import { CountryCard } from "../CountryCard";

import { Container } from "./styles";
import { CountryType } from "../../../types/CountryType";
import { api } from "../../../services/api";
import { Error } from "../../../components/Error";
import { Loader } from "../../../components/Loader";

export const CountriesArea = () => {
  const { state, dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>();
  const [errorMsg, setErrorMsg] = useState("");
  const [animate, setAnimate] = useState(false);
  const [filteredCountryList, setFilteredCountryList] =
    useState<CountryType[]>();

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const countries = await api.getAll();

      dispatch({
        type: "SET_COUNTRIES",
        payload: { data: countries }
      });

      setError(false);
    } catch (err) {
      setError(true);
      setErrorMsg("Error loading country data. Please try again later.");
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state.countries.data.length > 0) {
      const countries = filteredCountries(state.countries);

      if (countries.length <= 0) {
        setError(true);
        setErrorMsg("Country not found. Please enter a valid country name.");
        return;
      } else {
        if (error) setError(false);
      }

      setFilteredCountryList(countries);
    } else {
      fetchCountries();
    }
  }, [state]);

  useEffect(() => {
    loading
      ? setTimeout(() => setAnimate(false), 1)
      : setTimeout(() => setAnimate(true), 1);
  }, [loading]);

  return (
    <Container animate={animate}>
      {loading && <Loader />}
      {!loading && (
        <>
          {error ? (
            <Error msg={errorMsg} />
          ) : (
            <div className="content">
              {filteredCountryList?.map((country, index) => (
                <CountryCard
                  key={index}
                  flag={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  alphaCode={country.alpha3Code}
                />
              ))}
            </div>
          )}
        </>
      )}
    </Container>
  );
};
