<template>
    <section>
        <h2>Profile</h2>
        <div class="profile">
            <div class="profile__headshot">
                <img :src="profile.avatarImage" 
                     :alt="'Photo of ' + profile.firstName + ' ' + profile.lastName">
            </div>
            <div>
                <dl>
                    <dt>First Name</dt>
                    <dd>{{ profile.firstName }}</dd>

                    <dt>Last Name</dt>
                    <dd>{{ profile.lastName }}</dd>

                    <dt>Phone</dt>
                    <dd>{{ profile.phone }}</dd>

                    <dt>Email</dt>
                    <dd>{{ profile.email }}</dd>

                    <dt>Bio</dt>
                    <dd>{{ profile.bio }}</dd>
                </dl>                
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'UserProfile',
    props: {
        profile: {
            type: Object,
            required: true,
            default: () => ({})
        },
        userId: { // added userId to json data for uniqueness in routing
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped>
    .profile dt {
        flex: 0 0 25% !important;
    }

    .profile dd {
        flex: 0 0 65% !important;       
    }

    .profile {
        display: flex;
    }

    .profile__headshot img {
        width: 200px;
        padding-right: 30px;
    }
</style>