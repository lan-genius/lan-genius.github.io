<script>
  // @ts-nocheck
  import { getRoute } from "$lib";
  import { getStr, ids } from "$lib/lang";
</script>
<svelte:head>
  <title> {getStr(ids.homeTitle)} </title>
</svelte:head>
<div class="col">
  <div class="colst w maxw3xl p">
    <h1 class="ml">
      {getStr(ids.appName)} App
    </h1>
    <h4 class="ml">
      {getStr(ids.appDesc)}
    </h4>

    <div class="col w">
      <img width="100%" src={getRoute("/img/demo.svg")} alt="demo" />
      <span>{getStr(ids.appExplaination)}</span>
      <h4>{getStr(ids.appExplaination2)}</h4>
      <a href={getRoute("/download")} class="btn btn-primary">
        <span class="material-icons md-18">download</span>
        <span>
          {getStr(ids.downloadForFree)}
        </span>
      </a>
    </div>
  </div>
</div>
