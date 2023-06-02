import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";
import { PageContainer } from "../../components/mainComponents";
import { CountryType } from "../../types/CountryType";
import { api } from "../../services/api";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";

export const Detail = () => {
  const { state, dispatch } = useContext(Context);
  const params = useParams();

  const [country, setCountry] = useState<CountryType>();
  const [borderingCountries, setBorderingCountries] = useState<string[]>();

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState<boolean>();

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
      const country = state.countries.data.find(
        (country) =>
          country?.alpha3Code.toLowerCase() === params.country?.toLowerCase()
      );

      if (!country) {
        setError(true);
        setErrorMsg("Country not found.");
        return;
      }

      setCountry(country);
    } else {
      fetchCountries();
    }

    window.scrollTo({ top: 0 });
  }, [params]);

  useEffect(() => {
    if (country) {
      const borderingCountryCodes = country.borders;

      if (borderingCountryCodes) {
        const borderingCountries = state.countries.data.filter((country) =>
          borderingCountryCodes.includes(country.alpha3Code)
        );
        const borderingCountryNames = borderingCountries.map(
          (country) => country.name
        );

        setBorderingCountries(borderingCountryNames);
      }
    }
  }, [country]);

  return (
    <Container>
      <PageContainer>
        <Link className="back-btn" to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>
        <div className="country-detail">
          {loading ? (
            <Loader />
          ) : (
            <>
              {error ? (
                <Error msg={errorMsg} />
              ) : (
                <>
                  <div className="country-detail--flag">
                    <img
                      src={`https://flagcdn.com/${country?.alpha2Code.toLowerCase()}.svg`}
                      alt={`${country?.name} flag`}
                    />
                  </div>
                  <div className="country-detail--info">
                    <h2 className="country-detail--name">{country?.name}</h2>
                    <div className="country-detail--list">
                      <ul>
                        <li>
                          Native Name: <span>{country?.nativeName}</span>
                        </li>
                        <li>
                          Population:{" "}
                          <span>
                            {country?.population
                              .toLocaleString()
                              .replace(".", ",")}
                          </span>
                        </li>
                        <li>
                          Region: <span>{country?.region}</span>
                        </li>
                        <li>
                          Sub Region: <span>{country?.subregion}</span>
                        </li>
                        <li>
                          Capital: <span>{country?.capital}</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Top Level Domain:
                          <span>
                            {" "}
                            {country?.topLevelDomain &&
                              country?.topLevelDomain.map((top) => top)}
                          </span>
                        </li>
                        <li>
                          Currencies:{" "}
                          <span>
                            {country?.currencies &&
                              country?.currencies
                                .map((currencie) => currencie.name)
                                .join(", ")}
                          </span>
                        </li>
                        <li>
                          Languages:{" "}
                          <span>
                            {country?.languages
                              .map((lang) => lang.name)
                              .join(", ")}
                          </span>
                        </li>
                      </ul>
                    </div>
                    {country?.borders !== undefined && (
                      <div className="country-detail--borders">
                        <p>Border Countries: </p>
                        {borderingCountries?.map((borderCountry, index) => (
                          <Link
                            key={index}
                            to={`/detail/${country?.borders[index]}`}
                            onClick={() => window.scrollTo({ top: 0 })}
                          >
                            {borderCountry}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </PageContainer>
      )
    </Container>
  );
};
