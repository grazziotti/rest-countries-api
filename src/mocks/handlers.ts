import { rest } from "msw";

export const handlers = [
  rest.get("https://restcountries.com/v2/all", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Brazil",
          nativeName: "Brasil",
          population: 212559409,
          region: "Americas",
          subregion: "South America",
          capital: "Brasília",
          topLevelDomain: [".br"],
          currencies: [{ code: "BRL", name: "Brazilian real", symbol: "R$" }],
          languages: [
            {
              iso639_1: "pt",
              iso639_2: "por",
              name: "Portuguese",
              nativeName: "Português"
            }
          ],
          borders: ["ARG"],
          alpha2Code: "BR",
          alpha3Code: "BRA",
          flag: "https://flagcdn.com/br.svg"
        },
        {
          name: "Argentina",
          nativeName: "Argentina",
          population: 45376763,
          region: "Americas",
          subregion: "South America",
          capital: "Buenos Aires",
          topLevelDomain: [".ar"],
          currencies: [{ code: "ARS", name: "Argentine peso", symbol: "$" }],
          languages: [
            {
              iso639_1: "es",
              iso639_2: "spa",
              name: "Spanish",
              nativeName: "Español"
            },
            {
              iso639_1: "gn",
              iso639_2: "grn",
              name: "Guarani",
              nativeName: "Avañe'ẽ"
            }
          ],
          borders: ["BRA"],
          alpha2Code: "AR",
          alpha3Code: "ARG",
          flag: "https://flagcdn.com/ar.svg"
        },
        {
          name: "Japan",
          nativeName: "日本",
          population: 125836021,
          region: "Asia",
          subregion: "Eastern Asia",
          capital: "Tokyo",
          topLevelDomain: [".jp"],
          currencies: [{ code: "JPY", name: "Japanese yen", symbol: "¥" }],
          languages: [
            {
              iso639_1: "jp",
              iso639_2: "jap",
              name: "Japanese",
              nativeName: "日本語 (にほんご)"
            }
          ],
          borders: [""],
          alpha2Code: "JP",
          alpha3Code: "JPN",
          flag: "https://flagcdn.com/jp.svg"
        }
      ])
    );
  })
];
