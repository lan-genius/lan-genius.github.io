<script lang="ts">
  import { apiServerUrl } from "$lib/api";
  import { getStr, ids } from "$lib/lang";

  let account = "";
  let password = "";
  let isLoading=false;

  function doLogin() {
    let fd = new FormData();
    fd.append("account", account);
    fd.append("password", password);

    isLoading=true;
    fetch(apiServerUrl + "/tokens", {
      method: "POST",
      body: fd,
    }).then(res=>res.json()).then(res=>{
        localStorage.setItem('uid',res.uid);
        localStorage.setItem('jti',res.jti);
        localStorage.setItem('at',res.accessToken);
    }).catch(e=>alert(e)).finally(()=>isLoading=false);
  }
</script>

<div class="col">
  <div class="col maxw3xl w">
    <h1>{getStr(ids.login)} / {getStr(ids.register)}</h1>
    <table>
      <tr>
        <td>{getStr(ids.usernameOrEmail)} </td>
        <td> <input type="text" name="account" bind:value={account} max="36" /> </td>
      </tr>
      <tr>
        <td> {getStr(ids.password)} </td>
        <td> <input type="password" name="password" bind:value={password} /> </td>
      </tr>
      <tr>
        <td colspan="2" align="center">
          <button disabled={isLoading} class="btn btn-primary" style="width:180px" on:click={doLogin}> {getStr(ids.login)} </button>
        </td>
      </tr>
    </table>
  </div>
</div>
