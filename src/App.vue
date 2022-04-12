<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/posts">Posts</router-link>
    |
    <router-link to="/posts/new">New Post</router-link>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BLOGr</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          |
          <li class="nav-item">
            <router-link to="/signup">Signup</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
body {
  font-family: monaco;
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJMA3AMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQIDBAUHBv/EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EABoRAQEBAQEBAQAAAAAAAAAAAAARAQIDMRL/2gAMAwEAAhEDEQA/AP2oB8ZsAARUY3VAGPoOfXLrE6jvxyZry9Ry6j098uXXL2efLvzrzWMWO95YvL28cOua4dRix3vLN5evnl0zXCxmx2vLNjvmt5rlYmOmJjVazXLEx1xLFrVYirgCKLgIqmIlf0QD8i+QAibqgEc/oKLI7c8lJFxVx6OOGa49cufXD14z1w9nnxFzp4rwxeXr64cuuXq5jtz28vXLF5enrlzvLrmumdPPeWby73li8t5rrnThYmO2M2N5rWdOOJjrYzYua1XOxMdLDGq1XPFxrDAZxcVcQfeEH5LXygBj6osJGpHbjzSpGlkWR7OPJN1JGlHpznMZAGhjrly64ehmxc1rNeS8MXl6uuHPrl0zp0zp5byxeXp65c+uXTOnXOnnvLN5d7yzeW810/ThYzjteWbG81r9OWJjp5Sxa1XPEx0xMWtVjBvDFpX2NNQfktfMqtSJI1I7+flU3VjUhIr3ceWYzVEHaFUTTVKoAVRDUKVjrlsFrh1w53l6uprn1y3nTedPL1yxeXp65YvLpnTrnTz3lm8u95YsbzXTOnCxMdryzY1mt5rliY6YljVarnYmOliYUr6TUicxuR8Dx8N18zeiRuIPoc8ZzjFUQbKogFUQCqIoUXUEWrpqAVdKgLWbGOuXVLNWtZ24WOd5eixjqN5rrz24WM47WM43XTOnGxLHWxmxquma52M464mLVr6EioPLmZnx8ummgoaagpV01AKumoCVdNQCrpqAVdNQCrq6yBWtNZCLWqzYAudRzsZsdsZsWt5242M11sZsbzXXO3PExvExa6Z29QJrk8FURBK0MilaTUAqiAlU1AKpqAlXTUAq6agFXRAKogLVEA/RYzY0C5052M461MWt522lBHMBNEUTQAAQENVKommhVQ0CggJVEAqiAVRAKogFaGQK0MgVsQRsBNVFQQZqoAgBVAQEqiamhWkTTRKohoVRnTRK0M6aFa01nQK1prOmhWhnTQrqAjslQBnQAQEFAoDKAAACAACVRUQAQAAAAAEABX//2Q==);
}
</style>
