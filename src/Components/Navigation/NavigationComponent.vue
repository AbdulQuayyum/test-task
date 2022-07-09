<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img src="/src/Assets/logo.png" alt="" />
      </div>
      <ul v-show="!mobile" class="Navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Tools & App</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Channels</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Contacts</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Analytics</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Settings</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Help</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }"
              >Tools & App</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Channels</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Contacts</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Analytics</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Settings</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Help</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigationComponent",
  data() {
    return{
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener("resize",this.checkScreen())
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll)
  },
  methods: {
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    updateScroll(){
   const scrollPosition = window.scrollY;
   if (scrollPosition > 50 ) {
   this.scrolledNav = true; 
   return;
 }
 this.scrolledNav = false;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = false;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
};
</script>

<style lang="scss">
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  position: fixed;
  width: 100%;
  transition: 0.5s ease all;
  color: #fff;
  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }
    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }
    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: aqua;
        border-color: aqua;
      }
    }
    .branding {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.5s ease all;
      }
    }
    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }
    .icon-active {
      transform: rotate(180deg);
    }
    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: #fff;
      top: 0;
      left: 0;
      li {
        margin-left: 0;
        .link {
          color: #000;
        }
      }
    }
  }
}

.scrolled-nav {
  background: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>