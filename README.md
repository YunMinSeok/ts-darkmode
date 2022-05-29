# @ysms/ts-darkmodejs
🌙 How about change your web to darkmode?
<!-- s : svg -->
<div style="padding : 40px">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)  
</div>
<!-- e : svg -->

<!-- s : introduce -->
<div>
  저희는 현재 클라이언트의 요구에 맞춰 빠르게 다양한 기능을 구현해야하는 Si 회사에 근무하고 있습니다. 함께 여러 기능들을 작업하던 중 ‘이런 기능들을 사용성 좋은 라이브러리로 구축해 놓으면 많은 사람들이 편하고 빠르게 작업할 수 있지 않을까?’라는 생각을 하게 되었습니다. <br/ >그렇게 ‘DarkMode Open Source’ 를 첫 프로젝트로 함께 작업하게 되었습니다! <br/> TypeScript와 React를 사용하여 인터랙션 구현까지 완료 예정이며 현재 업데이트 진행중입니다. 이후 여러 언어를 사용하며 Open Source 협업 진행 예정입니다.
</div>
<!-- e : introduce -->
<br/><br/>
<!-- s : Getting started -->
## 🎯 Getting started

<h3>Install</h3>

```sh
npm install @ysms/ts-darkmode
```
<h3>Import</h3>

```js
import Darkmode from "@ysms/ts-darkmode";
```
<!-- e : Getting started -->
<br/><br/>
<!-- s : How to Use -->
## 👀 How to use

<h3>Add this code</h3>

```js
// This creates a dark mode toggle button on your web.
  const darkmode = new Darkmode({ content: "🌓" });
  darkmode.activeDark();
```

<br/><br/>
<!-- e :How to Use--> 

## 🌈 Setting Options

* You can custom settings

```js
// it's all default value
{
      bottom: "30px", // Button's bottom position
      right: "30px", // You can choose between right and left
      left: "unset",  
      transitionTime: "0.3s", // Transition Time
      backgroundColor: "#fff", // Light mode background color setting
      buttonDarkColor: "#141414", // Dark mode button color
      buttonLightColor: "#fff", // Light mode button color
      content: "🌓", // Content in button
      saveInCookies: true, // If you want to remember whether it's dark mode or not, write this section true or false
      buttonWidth: "3rem", // Button size
      buttonHeight: "3rem", // Button size
}
```

<br/><br/>

* If you want to ignore Darkmode
```html
<!-- add 'darkmode-ignore' class-->
<div class="darkmode-ignore"><img href="@@@"></div>
```

<!-- s : License -->
## 🪄 License

[MIT License](./LICENSE)

Copyright 2022. YunMinSeok&ChoYeSeul(ysms) all rights reserved.
<!-- e : License -->
