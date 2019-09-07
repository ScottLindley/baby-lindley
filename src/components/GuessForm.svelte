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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #222222;
    background: lightyellow;
    padding: 16px;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .gender {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .gender > label {
    margin-right: 32px;
  }

  .gender-input:hover {
    cursor: pointer;
  }

  .text-input {
    margin-left: 8px;
    float: right;
  }

  input {
    height: 24px;
    margin-bottom: 16px;
  }

  #submit-btn {
    color: black;
    background-color: whitesmoke;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 18px;
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;
    height: auto;
  }

  #submit-btn:hover {
    background-color: lightgreen;
    color: white;
    border: 1px solid white;
  }

  @media only screen and (max-device-width: 600px) {
    .modal {
      width: 80%;
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
          <input type="text" name="name" autocomplete="off" required />
        </label>
        <label>
          Time of birth:
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
