<script>
  export let onSubmit = () => {};
  export let onClose = () => {};

  // state
  let sending = false;
  let submitted = false;

  const parseJSON = async resp => {
    const json = await resp.json();
    if (json.missingFields) {
      throw new Error(`Missing required fields! ${json.missingFields}`);
    }
  };

  let handleSubmit = async event => {
    const { elements } = event.target;

    let gender;
    if (elements.girl.checked) {
      gender = "girl";
    } else if (elements.boy.checked) {
      gender = "boy";
    }

    const omitEmpty = element =>
      element.value === "" ? undefined : element.value;

    sending = true;

    const resp = await onSubmit({
      gender,
      name: omitEmpty(elements.name),
      guesserName: omitEmpty(elements.guesserName),
      timeOfBirth: omitEmpty(elements.timeOfBirth),
      weight: omitEmpty(elements.weight)
    });

    try {
      parseJSON(resp);
    } catch (err) {
      console.error(err);
      onClose();
      return;
    }

    sending = false;
    submitted = true;

    setTimeout(onClose, 5000);
  };

  let onFormClick = event => {
    event.stopPropagation();
  };
</script>

<style>
  .modal-shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #222222;
    background: lightyellow;
    padding: 0.4em;
    border-radius: 5px;
  }

  form {
    display: grid;
    flex-direction: column;
  }

  .gender {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .gender > label {
    margin: 1vw;
    display: flex;
    flex-direction: row;
  }

  .gender-input {
    margin-left: 1vw;
  }

  .gender-input:hover {
    cursor: pointer;
  }

  .text-input {
    float: right;
    font-size: inherit;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  input {
    height: 100%;
  }

  label {
    font-size: 0.6em;
    margin: 0.5vh 0;
    display: flex;
    flex-direction: column;
  }

  #submit-btn {
    width: max-content;
    justify-self: center;
    color: black;
    background-color: whitesmoke;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 0.5em;
    border: 1px solid black;
    padding: 1vh;
    margin-top: 2vh;
    cursor: pointer;
    height: auto;
  }

  #submit-btn:hover {
    background-color: rgba(144, 238, 144, 0.473);
  }

  p {
    font-size: 0.8em;
    text-align: center;
  }

  @media (orientation: landscape) {
    .modal {
      width: 25%;
    }
  }
</style>

<div class="modal-shadow" on:click={onClose}>
  <div class="modal" on:click={onFormClick}>
    {#if sending}
      <p>Sending...</p>
    {:else if submitted}
      <p>
        🤗 Thanks for submitting your guess!
        <br />
        We'll let you know if you were the closest. 👀
      </p>
    {:else}
      <form on:submit|preventDefault={handleSubmit}>
        <label>
          Your Name:
          <input
            class="text-input"
            type="text"
            name="guesserName"
            autocomplete="off"
            required />
        </label>
        <div class="gender">
          <label>
            Girl
            <input
              class="gender-input"
              type="radio"
              name="gender"
              value="girl"
              id="girl"
              required />
          </label>
          <label>
            Boy
            <input
              class="gender-input"
              type="radio"
              name="gender"
              value="boy"
              id="boy" />
          </label>
        </div>
        <label>
          Baby's Name:
          <input
            class="text-input"
            type="text"
            name="name"
            autocomplete="off"
            required />
        </label>
        <label>
          Date/Time of birth:
          <input
            class="text-input"
            type="text"
            name="timeOfBirth"
            autocomplete="off"
            required />
        </label>
        <label>
          Weight:
          <input
            class="text-input"
            type="text"
            name="weight"
            autocomplete="off"
            required />
        </label>
        <input id="submit-btn" type="submit" name="submit" value="SUBMIT" />
      </form>
    {/if}

  </div>
</div>
