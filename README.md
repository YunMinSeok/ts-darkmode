# @ysms/ts-darkmodejs
π How about change your web to darkmode?
<!-- s : svg -->
<div style="padding : 40px">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)  
</div>
<!-- e : svg -->

<!-- s : introduce -->
<div>
  μ ν¬λ νμ¬ ν΄λΌμ΄μΈνΈμ μκ΅¬μ λ§μΆ° λΉ λ₯΄κ² λ€μν κΈ°λ₯μ κ΅¬νν΄μΌνλ Si νμ¬μ κ·Όλ¬΄νκ³  μμ΅λλ€. ν¨κ» μ¬λ¬ κΈ°λ₯λ€μ μμνλ μ€ βμ΄λ° κΈ°λ₯λ€μ μ¬μ©μ± μ’μ λΌμ΄λΈλ¬λ¦¬λ‘ κ΅¬μΆν΄ λμΌλ©΄ λ§μ μ¬λλ€μ΄ νΈνκ³  λΉ λ₯΄κ² μμν  μ μμ§ μμκΉ?βλΌλ μκ°μ νκ² λμμ΅λλ€. <br/ >κ·Έλ κ² βDarkMode Open Sourceβ λ₯Ό μ²« νλ‘μ νΈλ‘ ν¨κ» μμνκ² λμμ΅λλ€! <br/> TypeScriptμ Reactλ₯Ό μ¬μ©νμ¬ μΈν°λμ κ΅¬νκΉμ§ μλ£ μμ μ΄λ©° νμ¬ μλ°μ΄νΈ μ§νμ€μλλ€. μ΄ν μ¬λ¬ μΈμ΄λ₯Ό μ¬μ©νλ©° Open Source νμ μ§ν μμ μλλ€.
</div>
<!-- e : introduce -->
<br/><br/>
<!-- s : Getting started -->

## π― Getting started

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
## π How to use

<h3>Add this code</h3>

```js
// This creates a dark mode toggle button on your web.
  const darkmode = new Darkmode({ content: "π" });
  darkmode.activeDark();
```

<br/><br/>
<!-- e :How to Use--> 

## π Setting Options

<h3>You can custom settings</h3>

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
      content: "π", // Content in button
      saveInCookies: true, // If you want to remember whether it's dark mode or not, write this section true or false
      buttonWidth: "3rem", // Button size
      buttonHeight: "3rem", // Button size
}
```

<br/><br/>

<h3>If you want to ignore Darkmode</h3>

```html
<!-- add 'darkmode-ignore' class-->
<div class="darkmode-ignore"><img href="@@@"></div>
```

<!-- s : License -->
## πͺ License

[MIT License](./LICENSE)

Copyright 2022. YunMinSeok&ChoYeSeul(ysms) all rights reserved.
<!-- e : License -->
