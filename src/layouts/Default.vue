<template>
  <div class="layout">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <g-link class="navbar-brand" to="/">{{ $static.metaData.siteName }}</g-link>

    <div class="navbar-nav ml-auto">
      <g-link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></g-link>
      <g-link class="nav-item nav-link" to="/about">About</g-link>
  </div>
</nav>

    <slot/>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin:  0 20px;
}

.layout {
  padding: 0 10rem;
}
</style>
