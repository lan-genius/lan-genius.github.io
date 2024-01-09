<script>
  // @ts-nocheck
  import { getRoute } from "$lib";
  import { getStr, ids } from "$lib/lang";
</script>

<svelte:head>
  <title>{getStr(ids.homeTitle)}</title>
</svelte:head>

<div class="c" style="background-color: #e9f3fb;">
  <div class="row w maxw3xl between mobilehide">
    <div class="cs" style="height: 500px; margin-left:12px">
      <h1>{getStr(ids.appName)}</h1>
      <img src="/img/demo.svg" alt="demo" height="120" />
      <p>{getStr(ids.appExplaination)}</p>
      <p>{getStr(ids.appExplaination2)}</p>
      <a href={getRoute('/download')} class="btn btn-primary">
        <span class="material-icons md-18">download</span>
        <span> {getStr(ids.downloadNow)} </span>
      </a>
      <hr>
      <a class="row" href={getRoute('/download')} >
        <img src="/img/android.svg" alt="android" height="36">
        <img src="/img/windows.svg" alt="windows" height="36">
        <img src="/img/apple.svg" alt="apple" height="36">
        <img src="/img/linux.svg" alt="linux" height="36">
      </a>
    </div>
    <img loading="lazy" height="400" src="/img/poster.png" alt="poster" class="poster" />
  </div>

  <div class="c w desktophide">
    <h1>{getStr(ids.appName)}</h1>
    <img src="/img/demo.svg" alt="demo" width="80%"/>
    <p>{getStr(ids.appExplaination)}</p>
    <p>{getStr(ids.appExplaination2)}</p>
    <a href={getRoute('/download')} class="btn btn-primary">
      <span class="material-icons md-18">download</span>
      <span> {getStr(ids.downloadNow)} </span>
    </a>
    <hr>
    <a class="row" href={getRoute('/download')} >
      <img src="/img/android.svg" alt="android" height="36">
      <img src="/img/windows.svg" alt="windows" height="36">
      <img src="/img/apple.svg" alt="apple" height="36">
      <img src="/img/linux.svg" alt="linux" height="36">
    </a>
    <hr>
    <img loading="lazy" width="90%" src="/img/poster.png" alt="poster" class="poster" />
  </div>

 
</div>

<div class="c pannel">
  <h2> {getStr(ids.appDesc)} </h2>
</div>

<style>
  a.btn{
    padding: 12px;
  }
  a.row img{
    margin-right: 8px;
  }
  .pannel{
    margin-top: 40px;
    margin-bottom: 40px;
  }
</style>
