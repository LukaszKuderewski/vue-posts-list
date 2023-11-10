<template>
    <div>
        <h4 class="authors">Authors:</h4>
        <div class="aselect" :data-value="value" :data-list="options">
            <div class="selector" @click="toggle()">
                <div class="label">
                    <span>{{ value }}</span>
                </div>
                <div class="arrow" :class="{ expanded: visible }"></div>
                <div :class="{ hidden: !visible, visible }">
                    <ul>
                        <li v-for="option in options" v-bind:key="option" @click="sortBy(option)"> {{ option }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            value: 'Select author',
            options: ["all"],
            visible: false,
        }
    },
    mounted() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const userNameArray = new Set(data.map(post => post.userId))
                this.options = ["all", ...userNameArray]
            })
            .catch((err) => {
                console.error(err);
            });
        this.sortParam = this.$route.params.id
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },

        sortBy(sortParam) {
            this.value = sortParam;
            this.sortParam = sortParam
            this.$router.push({ name: 'sort', params: { id: sortParam } })
        },
    }
}
</script>

<style scoped>
.authors {
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
}

.aselect {
    width: 399px;
    margin: 20px auto;
    border: 3px solid #333;
    margin-right: 90px;
}

.aselect:hover {
    cursor: pointer;
}

.selector {
    background: #FFF;
    position: relative;
    z-index: 1;
}

.arrow {
    position: absolute;
    right: 10px;
    top: 40%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid #333;
    transform: rotateZ(0deg) translateY(0px);
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(.59, 1.39, .37, 1.01);
}

.expanded {
    transform: rotateZ(180deg) translateY(2px);
}

.label {
    display: block;
    padding: 12px;
    font-size: 16px;
    color: #333;
}

ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: -3px;
    font-size: 16px;
    position: absolute;
    z-index: 1;
    background: #fff;
    border: 3px solid #333;
}

li {
    padding: 12px;
    color: #666;
    border-top: 3px solid #333;
}

li:hover {
    color: white;
    background: #333333;
}

.current {
    background: #eaeaea;
}

.hidden {
    visibility: hidden;
}

.visible {
    visibility: visible;
}
</style>
