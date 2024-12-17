<script setup>
</script>

<template>
    <div class="container-footer">
        <div class="container-top">
            <div>
                <h3 class="title">Freelle</h3>
            </div>
            <div class="social">
                <i class="mdi mdi-facebook"></i>
                <i class="mdi mdi-twitter"></i>
                <i class="mdi mdi-linkedin"></i>
            </div>
        </div>
        <div class="row"></div>
        <div class="container-bottom">
            <p>© 2024 FREELLE ©Copyright 2024 FREELLE.</p>
        </div>
    </div>
</template>

<style scoped>
.container-footer {
    left: 0;
    bottom: 0;
    width: 100%;
    font-family: "Inter", sans-serif;
    padding-top: 5em;
}
.container-top {
    position: relative;
    width: 75%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center; 
}

.title {
    font-weight: bold;
    font-size: 26px;
    padding-left: 15px;
}
.social{
    padding-right: 15px;
}

.row {
    position: relative;
    margin: 15px 0;
}

.row::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 75%;
    height: 2px;
    background-color: black;
    transform: translateX(-50%);
}

.container-bottom {
    text-align: center;
    padding: 10px 0;
}
.container-bottom > p {
    font-size: 12px;
}

i {
    font-size: 28px;
    margin: 0 5px;
}
</style>