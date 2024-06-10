import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIKey = "03e5d72c53b9053d6cdabc3a7ae3b0e4";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lng }) =>
        `data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${APIKey}`,
    }),
    getForecastDaily: builder.query({
      query: ({ lat, lng }) =>
        `data/2.5/forecast/daily?lat=${lat}&lon=${lng}&cnt=16&units=metric&appid=${APIKey}`,
    }),
    getCurrentAirPollution: builder.query({
      query: ({ lat, lng }) =>
        `data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${APIKey}`,
    }),
    getHourlyForecast: builder.query({
      query: ({ lat, lng }) =>
        `data/2.5/forecast/hourly?lat=${lat}&lon=${lng}&units=metric&appid=${APIKey}`,
    }),
    getWeatherMap: builder.query({
      query: ({ lat, lng }) =>
        `maps/2.0/weather/PA0/2/${lat}/${lng}.png?appid=${APIKey}}`,
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetForecastDailyQuery,
  useGetCurrentAirPollutionQuery,
  useGetHourlyForecastQuery,
  useGetWeatherMapQuery,
} = weatherApi;
