<template>
    <section>
        <h2>{{ earthquake.properties.title }}</h2>

        <dl>
            <dt>Title</dt>
            <dd>{{ earthquake.properties.title }}</dd>

            <dt>Magnitude</dt>
            <dd>{{ earthquake.properties.mag }}</dd>

            <dt>Time</dt>
            <dd>
                <time :datetime="formatTimeTag(earthquake.properties.time)">
                    {{ formatDate(earthquake.properties.time) }}
                </time>
            </dd>

            <dt>Status</dt>
            <dd>{{ earthquake.properties.status }}</dd>

            <dt>Tsunami</dt>
            <dd>{{ earthquake.properties.tsunami }}</dd>

            <dt>Type</dt>
            <dd>{{ earthquake.properties.type }}</dd>
        </dl>

    </section>
</template>

<script>
import moment from 'moment';

export default {
    name: 'EarthquakeDetails',
    props: {
        earthquake: {
            type: Object
        },
        id: {
            type: String
        }
    },
    methods: {
        // date format methods should be global -- used in more than one page
        formatDate(ms) {
            return moment(ms).format('MMM DD, YYYY, hh:mm A');    
        },
        formatTimeTag(ms) {
            return moment(ms).format('YYYY-MM-DDTH:mm');
        }
    }
}
</script>
