<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification is-danger">
          <slot name="body">
            Something went wrong
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="scss" scoped>
  .notification {
    margin: 10px
  }
</style>
