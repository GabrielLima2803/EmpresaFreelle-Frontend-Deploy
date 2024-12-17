<script setup>
</script>

<template>
  <div id="footerMenu">
    <div class="icons">
      <RouterLink to="/">
        <img src="https://i.ibb.co/ykJmmwx/Group-134.jpg">      </RouterLink>
      <RouterLink to="/login">
        <img src="https://i.ibb.co/nQ4XGhZ/Group-60.png">      </RouterLink>
      <RouterLink to="/job-page">
        <img src="https://i.ibb.co/ngmJ1MQ/Group-227.png">      </RouterLink>
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

.img a {
  color: black;
  transition: color 0.3s;
}

.icons a:hover {
  color: #006B63; 
}
</style>