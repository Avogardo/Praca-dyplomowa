<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/form-with-binding">form with binding</router-link>
            </li>
            <li>
                <router-link to="/form-with-references">form with references</router-link>
            </li>
            <li>
                <router-link to="/server-table">server table</router-link>
            </li>
            <li>
                <router-link to="/big-table">big table</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
</style>

<script>
  export default {
    name: 'Navigation',
  }
</script>
