<template>
  <div id="app" style="height: 100%;">
    <webview src="https://10man.io/" style="height: calc(100% - 30px);width: 100%;margin-top: 30px;"></webview>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  mounted () {
    const webview = document.querySelector('webview')

    webview.addEventListener('page-title-updated', (res) => {
      window.titlebar.updateTitle(res.title)
    })

  }
})
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}
.container-after-titlebar {
  top: 0 !important;
}
.window-title {
  font-family: 'Roboto', sans-serif;
}
</style>
