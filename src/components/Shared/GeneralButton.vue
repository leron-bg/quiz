<template>
    <div>
        <button @click='action'>{{name}}</button>
    </div>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    action() {
        this.$router.push("/personal-info?");
    }
  }
}
</script>

<style scoped>
    button {
        width: 115px;
        height: 40px;
        background: black;
        margin: auto;
        display: block;
        color: white;
        border: 2px solid black;
        font-size: 18px;
        text-transform: uppercase;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }

    button:hover {
        background: white;
        color: black;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    }
</style>