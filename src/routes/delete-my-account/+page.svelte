<script>
  import { getRoute } from "$lib";

  import { getStr, ids, modeMainlandChina } from "$lib/lang";

  let email = "";
  let verificationCode = "";
  let isGettingCode = false;
  let isLoading = false;

  function doGetCode() {
    if (!email) {
      return;
    }

    isGettingCode = true;
    setTimeout(() => {
      isGettingCode = false;
      alert(getStr(ids.aVerificationEmailHasBeenSentToYouPleaseCheck));
    }, 1000);
  }
  function doDelete() {
    if (!email || !verificationCode) {
      return;
    }
    if (!confirm(getStr(ids.areYouSureToDeleteThisAccount))) {
      return;
    }
    isLoading = true;
    setTimeout(() => {
      isLoading = false;
      alert(getStr(ids.yourAccountHasBeenPermanentlyDeleted));
    }, 3000);
  }
</script>

<div class="c">
  <div class="c w" style="max-width: 350px;">
    <h1 style="color: red;">{getStr(ids.permanentlyDeleteMyAccount)}</h1>
    {#if !modeMainlandChina}
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="javascript:location.href='/zh/delete-my-account.html';" style="align-self: flex-end;"> <p><small><i>中文</i></small></p> </a>
    {/if}
    <table>
      <tr>
        <td>
          {getStr(ids.email)}:
        </td>
        <td colspan="2">
          <input class="w" type="text" name="email" max="36" bind:value={email} />
        </td>
      </tr>
      <tr>
        <td>
          {getStr(ids.verificationCode)}:
        </td>
        <td>
          <input type="number" style="width: 70px;" max="6" name="verificationCode" bind:value={verificationCode} />
        </td>
        <td>
          <button on:click={doGetCode} disabled={isGettingCode}> {getStr(ids.getCode)} </button>
        </td>
      </tr>
      <tr>
        <td colspan="3" align="center">
          <button disabled={isLoading} style="color: red;" on:click={doDelete}> {getStr(ids.permanentlyDeleteMyAccount)} </button>
        </td>
      </tr>
    </table>
  </div>
</div>
