<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Главная</g-link>
        <g-link class="nav__link" to="/publications/">Объявления</g-link>
        <g-link class="nav__link" to="/users/">Пользователи</g-link>
        <g-link class="nav__link" to="/login/">Вход</g-link>
        <g-link class="nav__link" to="/register/">Регистрация</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
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

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav {
  background-color: lightgray;
}

.nav__link {
  margin-left: -1px;
  text-decoration: none;
  color: black;
  font-size: 1.25rem;
  display: inline-block;
  border: 1px solid black;
  padding: 1rem;
}

.nav__link:hover {
  background-color: yellow;
}
</style>
