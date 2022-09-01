<template>
  <div class="dashboards">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" ref="close">
      <!-- v-if="isPanelOpen" -->
      <Sidebar />
      <Transition name="route" mode="out-in">
        <component :is="Sidebar"></component>
      </Transition>
      <svg
        id="close"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
    <div class="content">
      <router-view v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
export default {
  components: {
    Sidebar,
  },
  data: () => ({
    isPanelOpen: true,
  }),
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false;
    },
  },
};
</script>

<style>
#close {
  position: absolute;
  top: 56px;
  left: 19.2%;
  border-radius: 50%;
  border: 1px solid transparent;
  height: 25px;
  width: 25px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  background: #fff;
}
.dashboards {
  position: relative;
  /* top: 0; */
  display: grid;
  grid-template-columns: 1fr 4fr;
  /* background: #e9eaf2; */
  height: 100vh;
  /* z-index: 1; */
  margin-top: -70px;
}
.content {
  /* background-color: white; */
  margin-top: 70px;
}
a {
  list-style: none;
  text-decoration: none;
}
.router-link-active {
  color: rgb(92, 66, 151);
  cursor: pointer;
  background-color: rgb(92, 66, 151);
}
.route-leave-to,
.route-enter {
  opacity: 0;
  transform: translateX(-2em);
}
.route-leave-active,
.route-enter-active {
  /* opacity:0; */
  transition: all 0.5s ease;
}
</style>