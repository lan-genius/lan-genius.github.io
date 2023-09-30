<script>
  import { base } from "$app/paths";
  import { getRoute, isMainlandChina } from "$lib";
  import { getStr, ids } from "$lib/lang";
  import { linear } from "svelte/easing";

  let isZh = isMainlandChina();
  let list = [
    {
      icon: "/img/android.svg",
      title: "Android",
      items: [
        {
          icon: "/img/android.svg",
          title: ".apk",
          subtitle: "v10.1.0",
          link: "https://github.com/lan-genius/releases/releases/download/v10/langenius_android_v10.1.0.apk",
          alternateLink: "https://wwwz.lanzout.com/iTW4T1a6rvlc",
        },
        {
          icon: "/img/playstore.png",
          title: "Play Store",
          subtitle: "Install from play store",
          link: "https://play.google.com/store/apps/details?id=com.xchat.stevenzack.langenius",
          alternateLink: "",
        },
      ],
    },
    {
      icon: "/img/windows.svg",
      title: "Windows",
      items: [
        {
          icon: "/img/windows.svg",
          title: "Windows 10/11",
          subtitle: getStr(ids.ifNotWorkInstall) + '<a target="_blank" href="http://download.visualstudio.microsoft.com/download/pr/2d6bb6b2-226a-4baa-bdec-798822606ff1/8494001c276a4b96804cde7829c04d7f/ndp48-x86-x64-allos-enu.exe"><small>.Net 4.8</small></a>',
          link: "/res/langenius_windows_dotnet4.8_v10.0.0.exe",
          alternateLink: "",
        },
        {
          icon: "/img/windows7.jpeg",
          title: "Windows 7",
          subtitle: getStr(ids.ifNotWorkInstall) + '<a target="_blank" href="http://download.visualstudio.microsoft.com/download/pr/b635098a-2d1d-4142-bef6-d237545123cb/2651b87007440a15209cac29634a4e45/dotnetfx35.exe"><small>.Net 3.5</small></a>',
          link: "/res/langenius_windows_dotnet3.5_v10.0.0.exe",
          alternateLink: "",
        },
        {
          icon: "/img/windowsxp.jpg",
          title: "Windows XP/8/8.1",
          subtitle: getStr(ids.dependency) + '<a target="_blank" href="http://download.visualstudio.microsoft.com/download/pr/b635098a-2d1d-4142-bef6-d237545123cb/2651b87007440a15209cac29634a4e45/dotnetfx35.exe"><small>.Net 3.5</small></a>',
          link: "/res/langenius_windows_dotnet3.5_v10.0.0.exe",
          alternateLink: "",
        },
      ],
    },
    {
      icon: "/img/apple.svg",
      title: "Apple",
      items: [
        {
          icon: "/img/apple.svg",
          title: "Mac OS",
          subtitle: "v8.2.1",
          link: "https://github.com/lan-genius/releases/releases/download/v8/langenius_mac_v8.2.1.zip",
          alternateLink: "https://wwi.lanzoui.com/ieANFwhmc7a",
        },
        {
          icon: "/img/apple.svg",
          title: "iOS App Store",
          subtitle: "Install from iOS AppStore",
          link: "https://apps.apple.com/fi/app/langenius-transfer-tool/id6466735036",
          alternateLink: "",
        },
      ],
    },
    {
      icon: "/img/linux.svg",
      title: "Linux",
      items: [
        {
          icon: "/img/linux.svg",
          title: "Linux",
          subtitle: "v.8.2.1",
          link: "https://github.com/lan-genius/releases/releases/download/v8/langenius_linux_amd64_v8.2.1.tar.gz",
          alternateLink: "https://wwi.lanzoui.com/if63Kwhkisf",
        },
      ],
    },
  ];
</script>

<div class="cols p">
  <h1>
    {getStr(ids.downloadClient)}
  </h1>
  <a style="align-self: flex-end;" href="https://github.com/lan-genius/releases/releases">{getStr(ids.releaseHistory)}</a>
</div>

<div>
  {#each list as card}
    <span class="card m2" style=" vertical-align: top;background-color: cornsilk;width: 300px;">
      <span class="row">
        <h3 class="ml">{card.title}</h3>
      </span>
      <br />
      {#each card.items as v}
        <hr />
        <div class="row">
          <img src={getRoute(v.icon)} alt={v.title} height="24" />
          <div class="cols ml">
            <b>{v.title}</b>
            <caption class="w" bind:innerHTML={v.subtitle} contenteditable="false" />
          </div>
        </div>
        <br />
        <div class="row between">
          <a class="btn btn-primary" href={getRoute(v.link)}>
            <span class="material-icons md-18">download</span>
            <span> {getStr(ids.download)} </span>
          </a>
          {#if v.alternateLink}
            <a href={getRoute(v.alternateLink)}>
              <small>国内高速下载</small>
            </a>
          {/if}
        </div>
      {/each}
    </span>
  {/each}
</div>
