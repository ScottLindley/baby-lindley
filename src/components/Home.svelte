<script>
  import moment from "moment";

  import Confetti from "./Confetti.svelte";
  import Field from "./Field.svelte";
  import Divider from "./Divider.svelte";
  import GuessButton from "./GuessButton.svelte";
  import GuessForm from "./GuessForm.svelte";

  import helpers from "../helpers/index.js";

  export let config;

  let timeLeft;
  const computeTimeLeft = () => {
    timeLeft = moment(config.dueDate).fromNow();
  };

  computeTimeLeft();

  setInterval(computeTimeLeft, 1000);

  let guessFormOpen = false;
  let openGuessForm = () => {
    guessFormOpen = true;
  };
  let closeGuessForm = () => {
    guessFormOpen = false;
  };

  let handleGuessSubmit = guess =>
    fetch(`${helpers.getAPIDomain()}/guess`, {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(guess)
    });
</script>

<style>
  h1 {
    font-size: calc(0.7em + 1vh);
    margin: 1vh 0 1vh 0;
  }

  .home-container {
    width: 95%;
    height: 90%;
    display: grid;
    grid-row-gap: 1vh;
    padding: 0 8vw;
    justify-content: center;
    align-items: center;
    margin: 2vh 0;
  }

  .status-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    width: inherit;
    background-color: whitesmoke;
    color: #222222;
    border-radius: 5px;
    padding-bottom: 0.2em;
    box-shadow: 0 0.1em 0.2em 0 rgba(0, 0, 0, 0.2);
  }

  img {
    grid-row: auto-fit 40%;
    width: inherit;
    max-height: 100%;
    justify-self: center;
    border-radius: 5px;
  }

  @media (orientation: landscape) {
    .home-container {
      width: 75%;
    }
  }
</style>

<div class="home-container">
  <div class="status-container">
    <h1>&#x1F476; Status &#x1F37C;</h1>
    <Divider />
    <Field label="ETA" value={timeLeft} />
    <Divider />
    <Field label="Name" value={config.name} />
    <Divider />
    <Field label="Time of birth" value={config.timeOfBirth} />
    <Divider />
    <Field label="Weight" value={config.weight} />
    {#if config.update}
      <Divider />
      <Field label="Update" value={config.update} />
    {/if}
  </div>
  {#if config.image}
    <img src={config.image} alt="picture of baby" />
  {/if}
  {#if config.guessesEnabled}
    <GuessButton onClick={openGuessForm} />
  {/if}
</div>
{#if config.confetti}
  <Confetti />
{/if}
{#if guessFormOpen}
  <GuessForm onSubmit={handleGuessSubmit} onClose={closeGuessForm} />
{/if}
