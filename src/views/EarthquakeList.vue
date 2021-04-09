<template>
    <section>
        <h2>{{ json.data.metadata.title }}</h2>
        <table>
            <tr>
                <th>
                    <a aria-label="'Sort by Title'" 
                       @click="sort('title')" >Title</a>
                </th>
                <th>
                    <a aria-label="Sort by Magnitude" 
                       @click="sort('mag')" >Magnitude</a>
                </th>
                <th>
                    <a aria-label="Sort by Time" 
                       @click="sort('time')" >Time</a>
                </th>
            </tr>

            <tr v-for="earthquake in sortedData" :key="earthquake.id">
                <td>
                    <router-link 
                        :key="earthquake.id" 
                        :to="{ name: 'EarthquakeDetails', params: { earthquake: earthquake, id: earthquake.id } }"
                        aria-label="View details of this earthquake"
                        >
                        {{ earthquake.properties.title}}
                    </router-link>
                </td>
                <td style="text-align: center">
                    {{ earthquake.properties.mag}}
                </td>
                <td>
                    <time :datetime="formatTimeTag(earthquake.properties.time)">
                        {{ formatDate(earthquake.properties.time) }}
                    </time>
                </td>
            </tr>
        </table>

    </section>
</template>

<script>
import moment from 'moment';

export default {
    name: 'EarthquakeList',

    data() {
        let eqData = {
            json: this.$parent.$data.json,
            sortCol: this.$parent.$data.sortCol,
            sortDir: this.$parent.$data.sortDir,
            earthquakeList: []
        }
        return eqData;
    },
    created() {
        this.earthquakeList = this.json.data.features;
    },
    methods: {
        sort(col) {
            if (col === this.sortCol) {
                this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortDir = 'asc';
            }
            this.sortCol = col;
            this.$parent.$data.sortCol = this.sortCol; 
            this.$parent.$data.sortDir = this.sortDir;
        },
        // date format methods should be global -- used in more than one page
        formatDate(ms) {
            return moment(ms).format('MMM DD, YYYY, hh:mm A');    
        },
        formatTimeTag(ms) {
            return moment(ms).format('YYYY-MM-DDTH:mm');
        }
    },
    computed: {
        sortedData() {
            let sorted = this.earthquakeList;
            sorted.sort((a,b) => {
                let mod = 1;
                if (this.sortDir === "desc") mod = -1;
                if (a.properties[this.sortCol] < b.properties[this.sortCol]) return -1 * mod;
                if (a.properties[this.sortCol] > b.properties[this.sortCol]) return 1 * mod;
                return 0;
            });
            return sorted;
        }
    }
}
</script>

<style scoped>
    table {
        margin: 0 auto;
    }

    th {
        padding: 8px 15px;
        font-weight: normal;
    }
    
    th a {
        color: #444444;
    }

    th a:hover, th a:focus, th a:active {
        text-decoration: underline;
    }

    td {
        font-weight: 700;
    }
</style>