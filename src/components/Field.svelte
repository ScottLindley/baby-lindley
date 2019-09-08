<script>
  export let label;
  export let value;
</script>

<style>
  h3 {
    font-size: calc(0.4em + 1vh);
    font-weight: inherit;
    text-align: center;
    margin: 0.4em 0.8em;
  }

  div {
    border: 0.01em solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
</style>

<div />
<h3>{label}: {value}</h3>
