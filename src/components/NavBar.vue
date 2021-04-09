<template>   
    <nav class="nav__primary">
        <span class="brand">
            <router-link 
                :to="{ name: 'EarthquakeList' }"
                aria-label="Return to Home Page"
                >
                <img :src="site.logoImage" alt="Realtor.com Logo">
            </router-link>
        </span>
        <span class="page-header">
            <h1>{{ site.title }}</h1>
        </span>
        <span class="username">
            <router-link 
                :key="profile.userId"
                :to="{ name: 'UserProfile', params: { profile: profile, userId: profile.userId } }"
                aria-label="View user profile"
                >
                Welcome {{ profile.firstName }}
                </router-link>
        </span>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        site: {
            type: Object
        },
        profile: {
            type: Object
        }
    }
}
</script>
