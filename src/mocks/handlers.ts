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
          currencies: ["Brazilian real"],
          languages: ["Portuguese"],
          borders: [
            "Argentina",
            "Bolivia (Plurinational State of)",
            "Colombia",
            "France",
            "French Guiana",
            "Guyana",
            "Paraguay",
            "Peru",
            "Suriname",
            "Uruguay",
            "Venezuela (Bolivarian Republic of)"
          ],
          alpha2Code: "BR",
          alpha3Code: "BRA",
          flag: "https://flagcdn.com/br.svg"
        },
        {
          name: "Japan",
          nativeName: "日本",
          population: 125836021,
          region: "Asia",
          subregion: "Eastern Asia",
          capital: "Tokyo",
          topLevelDomain: [".jp"],
          currencies: ["Japanese yen"],
          languages: ["Japanese"],
          borders: [""],
          alpha2Code: "JP",
          alpha3Code: "JPN",
          flag: "https://flagcdn.com/jp.svg"
        }
      ])
    );
  })
];
