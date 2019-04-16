<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/form-with-states">form with states</router-link>
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

<script>
  export default {
    name: 'Navigation',
  }
</script>