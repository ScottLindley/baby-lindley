<script>
  export let onClick = () => {};
</script>

<style>
  button {
    justify-self: center;
    width: max-content;
    color: black;
    background-color: whitesmoke;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 18px;
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
    grid-row: 10%;
  }

  button:hover {
    background-color: rgba(144, 238, 144, 0.473);
  }
</style>

<button on:click={onClick}>submit a guess</button>
