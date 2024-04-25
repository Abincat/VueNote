<script setup>
    defineProps(["products"]);
</script>

<template>
    <div class="list">
        <div class="product" v-for="product in products" :key="product">
            <div class="name">{{ product.name }}</div>
            <div class="description">{{ product.description }}</div>
            <div class="price">單價:{{ product.price }}</div>
        </div>
    </div>
</template>

<style scoped>
    .list{
        line-height: 1.5rem;
    }
    .product{
        padding: 15px 0;
        border-bottom: 1px solid #dddddd;
    }
    .product>.name{
        font-weight: bold;
    }
</style>