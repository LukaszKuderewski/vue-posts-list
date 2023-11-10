<template>
  <div class="info-icon" @click="openInfo()">
    <img :src="infoIcon" />
  </div>
  <div v-if="open" class="info-wrapper">
    <div class="info-container">
      <div class="image-container">
        <img :src="infoImage" />
      </div>
      <p class="info-popup">Info popup</p>
      <div class="close" @click="closeInfo()">
        Close
      </div>
    </div>
  </div>
</template>
  
<script>

import infoIcon from "../assets/info.svg"
import infoImage from "../assets/info-image.png"

export default {
  data: function () {
    return {
      infoIcon: infoIcon,
      infoImage: infoImage,
      open: false
    }
  },
  methods: {
    openInfo() {
      this.open = true
    },
    closeInfo() {
      this.open = false
    }
  }
}

</script>

<style>
.info-icon {
  position: fixed;
  right: 34px;
  bottom: 34px;
}

.info-icon:hover {
  cursor: pointer;
}

.info-wrapper {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(51, 51, 51, 0.15);
  z-index: 99;
}

.info-container {
  width: 846px;
  height: 628px;
  border: 3px solid #333;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
}

.image-container {
  margin-top: 71px;
  width: 537px;
  height: 302px;
}

.info-popup {
  margin-top: 40px;
}

.close {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 399px;
  height: 58px;
  border: 3px solid #333;

}

.close:hover {
  cursor: pointer;
}
</style>