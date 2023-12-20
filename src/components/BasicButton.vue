<template>
  <button :class="['BasicButton', `_${variant}`]">
    <slot />
  </button>
</template>

<script lang="ts">
export const BASIC_BUTTON_VARIANTS = {
  variant: [
    'default',
    'inclination',
    'rotation',
    'scale',
    'shake',
    'tension',
    'break',
    'acceleration',
    'blur',
    'copy',
  ],
} as const;
</script>

<script setup lang="ts">
type Props = {
  variant?: (typeof BASIC_BUTTON_VARIANTS.variant)[number];
};

withDefaults(defineProps<Props>(), {
  variant: 'default',
});
</script>

<style scoped lang="scss">
.BasicButton {
  border: 1px solid #333;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  background-color: #fff;
  transition: 0.3s;
  position: relative;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    top: 3px;
  }
  &._inclination {
    &:hover {
      rotate: -45deg;
    }
  }
  &._rotation {
    &:hover {
      animation: rotation 1s infinite linear;
    }
  }
  &._scale {
    &:hover {
      transition: 0.3s;
      transform: scale(1.2);
    }
  }
  &._shake {
    &:hover {
      animation: shake 0.1s infinite;
    }
  }
  &._tension {
    transition: transform 0.5s, box-shadow 0.5s, background-color 0.5s;
    transform-origin: center;
    &:hover {
      transform: scaleX(0.5);
      background-color: #eee;
      opacity: 1;
      animation: tension 0.1s 0.4s infinite;
    }
  }
  &._break {
    border: none;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      z-index: 1;
      transition: 0.3s;
    }
    &::before {
      border-left: 1px solid #333;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      top: 0;
      left: 0;
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
      transform-origin: center right;
    }
    &::after {
      border-right: 1px solid #333;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      top: 0;
      right: 0;
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      transform-origin: center left;
    }
    &:hover {
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
      }
    }
  }
  &._acceleration {
    &:hover {
      transition: transform 1s ease-in;
      transform: translateX(300%);
    }
  }
  &._blur {
    &:hover {
      filter: blur(2px);
    }
  }
  &._copy {
    &:hover {
      opacity: 1;
    }
    &::before,
    &::after {
      transition: 0.3s;
      content: 'copy';
      width: 100%;
      height: 100%;
      border-radius: 999px;
      position: absolute;
      border: 1px solid #333;
      top: 0;
      left: 0;
      bottom: 0;
      border: 1px solid #333;
      padding: 8px 12px;
      font-size: 14px;
      text-align: center;
    }
    &:hover {
      &::before {
        top: -110%;
        bottom: inherit;
      }
      &::after {
        top: inherit;
        bottom: -110%;
      }
    }
  }
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(359deg);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes tension {
  $scale: 0.5;
  0% {
    transform: translateX(0) scaleX($scale);
  }
  25% {
    transform: translateX(1px) scaleX($scale);
  }
  50% {
    transform: translateX(0) scaleX($scale);
  }
  75% {
    transform: translateX(-1px) scaleX($scale);
  }
  100% {
    transform: translateX(0) scaleX($scale);
  }
}
</style>
