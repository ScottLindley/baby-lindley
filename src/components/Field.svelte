<script>
  export let label;
  export let value;
</script>

<style>
  h3 {
    font-size: calc(0.3em + 1vh);
    font-weight: inherit;
    text-align: center;
    width: 100%;
    margin: 0.4em 0.8em;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  div > div {
    width: 50%;
  }
</style>

<div>
  <div>
    <h3>{label}:</h3>
  </div>
  <div>
    <h3>{value}</h3>
  </div>
</div>
