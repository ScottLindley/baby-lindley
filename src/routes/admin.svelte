<script>
  import ConfigForm from "../components/ConfigForm.svelte";
  import helpers from "../helpers/index.js";

  const API = helpers.getAPIDomain();

  let configPromise = Promise.resolve();

  const parseJSON = async resp => {
    const json = await resp.json();
    if (json.error) {
      setTimeout(() => {
        configPromise = Promise.resolve();
      }, 2000);
      throw new Error(json.error);
    }
  };

  let postConfig = config => {
    configPromise = fetch(`${API}/config`, {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)
    }).then(parseJSON);
  };

  let previewConfig = config => {
    const params = helpers.configToURLParams(config);
    const url = `${API}?${params}`;
    var win = window.open(url, "_blank");
    win.focus();
  };

  let clearConfig = password => {
    configPromise = fetch(`${API}/config/clear`, {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    }).then(parseJSON);
  };
</script>

<style>
  #main-container {
    color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: wheat;
  }
</style>

<div id="main-container">
  {#await configPromise}
    <h2>Loading...</h2>
  {:then}
    <ConfigForm
      onSubmit={postConfig}
      onClear={clearConfig}
      onPreview={previewConfig} />
  {:catch error}
    <h2>oops! {error.message}</h2>
  {/await}
</div>
