<script>
  export let onSubmit = () => {};

  let handleSubmit = event => {
    const elements = event.target.elements;

    let gender = "???";
    if (elements.girl.checked) {
      gender = "girl";
    } else if (elements.boy.checked) {
      gender = "boy";
    }

    onSubmit({
      gender,
      name: elements.name.value || "???",
      timeOfBirth: elements.timeOfBirth.value || "???",
      weight: elements.weight.value || "???",
      update: elements.update.value || "",
      image:
        elements.image.value ||
        "https://lh3.googleusercontent.com/LwiuTYx1m3si_q3tICuY69MxMx2Z-DtpiPvkzG9xVQ9eN5ONiCdNp18MlgkKtpoKmd3nMgQEbbPS4xdpB0tTKMUTudaM3k-KZtiXHbB6HFQjloPueO_Lpmx3n4wh0qTnwIIWwfR0hVyHYwcZWM6zpP5cG6CoCcGEXyMqeL-NI5xPUVaYQbfqPsVDE1ipGrcrHF3UgCE9Uv7cKjpIgdvD9yHE5hoyeoGj2BevyaWn2fng6KH0HfBZUQVay45VPpYV7DVk6_IF3wivn-M3QVa-Mr4vqq60D-aE3kGhil1aYnZM0fFIsIg3hEcX57VZdKm15T6LrENMi5xbUKFSUvw01JEYN2_NDkhs36UGPMOqZ1rwB6VLfW2TL13zGBilJZadZdSm9xWTw6u1r2fL2iCF7CoA4YoZ7nNFUmmSz9mkbuquP80ZAH7wjT3ZQ8pmo0OixB_bJ72gJ-F9a0RHdKkkMr_PsDmu2Me34I7UvnpRStHdfeDVBjAPqZKwW0UHqPAGtbBBQmFT3TQMKC24bjoFxTWWh96kZsbZoS2tR9O-IT1ELgKh4yb8rIOYLhSvn8gPzDCqmWOembSFU7LsfQ5A2h4nd6kba_P44OD4TioRTR6TEC4ZhEboKTKql_wQIEnlULRRf2MG2IfxwabOvjzrt7Rrc1pG-zOj=w2542-h1908-no",
      password: elements.password.value || ""
    });
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
    height: 34px;
    font-size: xx-large;
    margin-bottom: 16px;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
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
    Update:
    <input type="text" name="update" autocomplete="off" />
  </label>
  <label>
    Image:
    <input type="text" name="image" autocomplete="off" />
  </label>
  <label>
    Password:
    <input type="text" name="password" autocomplete="off" />
  </label>
  <input id="submit-btn" type="submit" name="submit" value="submit" />
</form>
