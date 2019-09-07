<script>
  import { onMount } from "svelte";
  export let onSubmit = () => {};
  export let onPreview = () => {};
  export let onClear = () => {};

  let configForm;

  const buildConfig = elements => {
    let gender;
    if (elements.girl.checked) {
      gender = "girl";
    } else if (elements.boy.checked) {
      gender = "boy";
    }

    let confetti = !!elements.confetti.checked;
    let guessesEnabled = !elements.guessesEnabled.checked;

    const omitEmpty = element =>
      element.value === "" ? undefined : element.value;

    return {
      gender,
      confetti,
      guessesEnabled,
      name: omitEmpty(elements.name),
      timeOfBirth: omitEmpty(elements.timeOfBirth),
      weight: omitEmpty(elements.weight),
      update: omitEmpty(elements.update),
      image: omitEmpty(elements.image),
      password: omitEmpty(elements.password)
    };
  };

  onMount(() => {
    configForm.onsubmit = event => {
      const btnId = event.explicitOriginalTarget.id;
      const elements = event.target.elements;
      if (btnId === "submit-btn") {
        handleSubmit(elements);
      } else if (btnId === "preview-btn") {
        handlePreview(elements);
      }
      return false;
    };
  });

  let handleSubmit = elements => onSubmit(buildConfig(elements));
  let handlePreview = elements => onPreview(buildConfig(elements));

  let handleClear = () => {
    const password = document.getElementById("passwordInput").value;
    onClear(password);
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    font-size: xx-large;
  }

  #gender {
    display: flex;
    flex-direction: row;
  }

  #gender > label {
    margin-right: 16px;
    margin-left: 16px;
  }

  input {
    height: 24px;
    margin-bottom: 16px;
  }

  #clear-btn {
    color: red;
  }
</style>

<form bind:this={configForm}>
  <label>
    Name:
    <input type="text" name="name" autocomplete="off" />
  </label>
  <label id="gender">
    Gender:
    <label>
      <input type="radio" name="gender" value="girl" id="girl" />
      Girl
    </label>
    <label>
      <input type="radio" name="gender" value="boy" id="boy" />
      Boy
    </label>
  </label>
  <label>
    Time of birth:
    <input type="text" name="timeOfBirth" autocomplete="off" />
  </label>
  <label>
    Weight:
    <input type="text" name="weight" autocomplete="off" />
  </label>
  <label>
    Confetti:
    <input type="checkbox" id="confetti" />
  </label>
  <label>
    Guesses Disabled:
    <input type="checkbox" id="guessesEnabled" />
  </label>
  <label>
    Update:
    <input type="text" name="update" autocomplete="off" />
  </label>
  <label>
    Image:
    <input type="text" name="image" autocomplete="off" />
  </label>
  <label>
    Password:
    <input id="passwordInput" type="text" name="password" autocomplete="off" />
  </label>
  <input id="submit-btn" type="submit" name="submit" value="SUBMIT" />
  <input id="preview-btn" type="submit" value="PREVIEW CONFIG" />
  <input
    id="clear-btn"
    type="button"
    value="CLEAR CONFIG"
    on:click={handleClear} />
</form>
