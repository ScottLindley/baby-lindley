<script>
  import ConfigForm from "./ConfigForm.svelte";

  let configPromise = Promise.resolve();

  let postConfig = config => {
    configPromise = fetch("http://localhost:1337/config", {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config)
    });
  };
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 24px;
    color: black;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  #main-container {
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
    <ConfigForm onSubmit={postConfig} />
  {:catch error}
    <h2>oops {error.message}</h2>
  {/await}
</div>
