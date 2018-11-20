<template>
  <router-view/>
</template>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #005662;
  margin: 0px;
}

html,
body {
  height: 100%;
  width: 100%;
}

/* apply a natural box layout model to all elements */
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
