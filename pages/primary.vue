<script setup>
function enableCustomLayout() {
    setPageLayout("custom1");
}
</script>
<template>
    <div>
        primary
        <button @click="enableCustomLayout">Update Layout</button>
    </div>
</template>