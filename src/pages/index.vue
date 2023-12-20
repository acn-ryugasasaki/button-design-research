<template>
  <div class="Index">
    <h1 class="Index_Heading _h1">ボタンのデザインリサーチ</h1>
    <h2 class="Index_Heading _h2">
      ホバーしたりクリックしてみたりクリックしたまま放置みたりしてみてください〜
    </h2>
    <ul class="Index_List">
      <li
        class="Index_Item"
        v-for="(item, index) in BASIC_BUTTON_VARIANTS.variant"
        :key="index"
      >
        <BasicButton :variant="item">{{ item }}</BasicButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { BASIC_BUTTON_VARIANTS } from '@/components/BasicButton.vue';
</script>

<style scoped lang="scss">
.Index {
  padding: 32px;
  overflow: hidden;
  min-height: 100vh;
  &_Heading {
    &._h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
    &._h2 {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
  &_List {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
  }
  &_Item {
    width: 100%;
  }
}
</style>
