<template>
  <v-app>
    <v-theme-provider theme="high-contrast">
      <Nuxt />
    </v-theme-provider>


  </v-app>
</template>

<style lang="scss">
@import '~assets/scss/colors';
.v-application {
  background: $white;
}
</style>