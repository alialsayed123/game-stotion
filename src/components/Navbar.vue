<template>
  <header>
    <nav class="navbar">
      <ul>
        <li class="li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
          <input
            type="search"
            name="search"
            placeholder="Search anything Hear....."
          />
        </li>
        <li>
          <a href="#" class="navbar-brand"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
              /></svg
          ></a>
          <div class="notiv"></div>
        </li>
        <li>
          <a href="#" class="navbar-brand"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              /></svg
          ></a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
ul {
  display: flex;
  margin-right: 20px;
  list-style: none;
}
li {
  margin-right: 40px;
}

header {
  height: 60px;
  background-color: #fff;
  /* z-index: 2; */
}
.navbar {
  border-bottom: 1px solid #c2c2c2;
  position: fixed;
  top: 0;
  width: 90%;
  /* padding: 1rem !important; */
  display: flex;
  align-items: flex-end;
  justify-content: right;
  /* padding: 1.5rem 2rem; */
  margin-left: 10%;
  z-index: 999;
}

a {
  text-decoration: none;
  color: #000;
}
.container {
  background-color: rgb(255, 255, 255);
}
a {
  top: 50px;
  margin: 0 20px;
}
.notiv::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  /* left: 44px; */
  top: 20px;
  right: 187px;
  border-radius: 50%;

  background: rgb(245, 1, 1);
}
input {
  width: 80%;
  height: 25px;
  border: transparent;
  outline: none;
}
</style>