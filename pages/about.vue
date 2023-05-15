

<template>
    <div>
        about
    </div>
    <NuxtLayout name="custom2">
        <div>NuxtLayout custom2をcall</div>
    </NuxtLayout>
    <p>------</p>
    <NuxtLayout :name="layout">
        <div>NuxtLayout v:bind で管理している</div>
    </NuxtLayout>



</template>
<script setup>
// definePageMeta({
//     layout: false
// });
definePageMeta({
    layout: "custom1"
});

const admin = false;
const layout = admin ? "custom1" : "custom2";

</script>