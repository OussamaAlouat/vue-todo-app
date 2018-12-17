<template>
    <div>
        <h1>ToDo APP</h1>
        <div v-for="item in activities">
            <div>
                {{item.name}}
                <button @click="removeActivity(item)"> X</button>
                <button  type="radio" v-model="item.completed"></button>
            </div>
        </div>

        <div>
            <input v-model="activity"/>
            <button @click="addActivityMethod()">Add</button>
        </div>

        <div v-if="isWrongActivity">
            Please Write something
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'Activity',
        data() {
            return {
                activity: '',
                wrong: false
            }
        },
        computed: {
            ...mapGetters({
                'activities' : 'getActivities'
            }),
            isWrongActivity() {
                return this.wrong
            }
        },
        methods: {
            ...mapActions(['addActivity', 'deleteActivity']),
            addActivityMethod() {
                if (this.activity !== '') {
                    const activity = {
                        name: this.activity,
                        completed: true
                    };
                    this.wrong = false;
                    this.addActivity({activity});
                    this.activity = ''
                } else {
                    this.wrong = true
                }
            },
            removeActivity(item) {
                this.deleteActivity({activity: item})
            }

        }
    }
</script>