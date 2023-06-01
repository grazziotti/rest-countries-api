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
  const [fetchError, setFetchError] = useState<boolean>();
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

      setFetchError(false);
    } catch (err) {
      setFetchError(true);
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state.countries.data.length > 0) {
      setFilteredCountryList(filteredCountries(state.countries));
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
          {fetchError ? (
            <Error msg="Error loading country data. Please try again later." />
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
