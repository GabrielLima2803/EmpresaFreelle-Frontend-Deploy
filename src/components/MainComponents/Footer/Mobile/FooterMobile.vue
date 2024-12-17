<script setup>
</script>

<template>
  <div id="footerMenu">
    <div class="icons">
      <RouterLink to="/">
        <i class="mdi mdi-home-outline" />
      </RouterLink>
      <RouterLink to="/login">
        <i class="mdi mdi-account-circle-outline" />
      </RouterLink>
      <RouterLink to="/job-page">
        <i class="mdi mdi-account-search" />
      </RouterLink>
      <RouterLink to="/adicao-job">
        <i class="mdi mdi-palette-advanced" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#footerMenu {
  position: fixed; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  height: 60px; 
  border-top: #eeeeee 1px solid;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  padding: 0 1rem; 
}

.icons {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around; 
  font-size: 2rem;
}

.icons a {
  color: black;
  transition: color 0.3s;
}

.icons a:hover {
  color: #006B63; 
}
</style>