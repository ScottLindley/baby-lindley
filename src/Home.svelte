<script>
  import moment from "moment";

  import Field from "./Field.svelte";

  export let config;

  console.log({ homeConfig: config });

  let timeLeft;

  const computeTimeLeft = () => {
    timeLeft = moment(config.dueDate).fromNow();
  };

  computeTimeLeft();

  window.setInterval(computeTimeLeft, 1000);
</script>

<style>
  img {
    height: 40vh;
    margin: 2vh;
    padding: 0, 8vw;
  }
</style>

<h1>&#x1F476; Status &#x1F37C;</h1>
<Field label="ETA" value={timeLeft} />
<Field label="Name" value={config.name} />
<Field label="Time of birth" value={config.timeOfBirth} />
<Field label="Weight" value={config.weight} />
{#if config.update}
  <Field label="Update" value={config.update} />
{/if}
{#if config.image}
  <img src={config.image} alt="picture of baby" />
{/if}
