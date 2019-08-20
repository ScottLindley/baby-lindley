<script>
  import fetch from "node-fetch";

  import Home from "../components/Home.svelte";
  import helpers from "../helpers/index.js";

  let config = {
    name: "???",
    gender: "???",
    timeOfBirth: "???",
    weight: "???",
    dueDate: "2019-10-11T00:00:00.000",
    update: "",
    image:
      "https://lh3.googleusercontent.com/LwiuTYx1m3si_q3tICuY69MxMx2Z-DtpiPvkzG9xVQ9eN5ONiCdNp18MlgkKtpoKmd3nMgQEbbPS4xdpB0tTKMUTudaM3k-KZtiXHbB6HFQjloPueO_Lpmx3n4wh0qTnwIIWwfR0hVyHYwcZWM6zpP5cG6CoCcGEXyMqeL-NI5xPUVaYQbfqPsVDE1ipGrcrHF3UgCE9Uv7cKjpIgdvD9yHE5hoyeoGj2BevyaWn2fng6KH0HfBZUQVay45VPpYV7DVk6_IF3wivn-M3QVa-Mr4vqq60D-aE3kGhil1aYnZM0fFIsIg3hEcX57VZdKm15T6LrENMi5xbUKFSUvw01JEYN2_NDkhs36UGPMOqZ1rwB6VLfW2TL13zGBilJZadZdSm9xWTw6u1r2fL2iCF7CoA4YoZ7nNFUmmSz9mkbuquP80ZAH7wjT3ZQ8pmo0OixB_bJ72gJ-F9a0RHdKkkMr_PsDmu2Me34I7UvnpRStHdfeDVBjAPqZKwW0UHqPAGtbBBQmFT3TQMKC24bjoFxTWWh96kZsbZoS2tR9O-IT1ELgKh4yb8rIOYLhSvn8gPzDCqmWOembSFU7LsfQ5A2h4nd6kba_P44OD4TioRTR6TEC4ZhEboKTKql_wQIEnlULRRf2MG2IfxwabOvjzrt7Rrc1pG-zOj=w2542-h1908-no"
  };

  const fetchConfig = () =>
    fetch(`${helpers.getAPIDomain()}/config`).then(async resp => {
      const json = await resp.json();
      config = json;
    });

  let configPromise = fetchConfig();

  setInterval(fetchConfig, 5000);

  let genderColorMap = {
    girl: "pink",
    boy: "lightblue"
  };
</script>

<style>
  #main-container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
</style>

<div
  id="main-container"
  style="background-color: {genderColorMap[config.gender] || 'lightgray'};">
  {#await configPromise}
    <h2>Loading...</h2>
  {:then}
    <Home {config} />
  {:catch error}
    <h2>oops {error.message}</h2>
  {/await}
</div>
