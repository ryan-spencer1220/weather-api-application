const request = require("request");

const url =
  "https://api.weatherstack.com/current?access_key=8743a648bb6c440c5497075593b60a53&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  console.log(
    `It is currently ${response.body.current.temperature} degrees out and it feels like ${response.body.current.feelslike} degrees out`
  );
});
