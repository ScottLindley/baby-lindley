<script>
  export let onClick = () => {};
</script>

<style>
  button {
    color: black;
    background-color: whitesmoke;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 18px;
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
  }

  button:hover {
    background-color: lightgreen;
    color: white;
    border: 1px solid white;
  }
</style>

<button on:click={onClick}>submit a guess</button>
