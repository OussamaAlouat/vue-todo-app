<template>
    <div class="main">
        <h1>ToDo APP</h1>

        <div  v-for="item in activities"  >
            <el-row style="margin-bottom: 0.51rem;">
                <el-col :span="8">
                    {{item.name}}
                </el-col>
                <el-col :span="8">
                    <el-button type="danger" icon="el-icon-delete" @click="removeActivity(item)" circle size="small"></el-button>
                </el-col>
                <el-col :span="8">
                    <el-button type="success" icon="el-icon-check" circle @click="completeActivity(item)" size="small"></el-button>
                </el-col>
            </el-row>
        </div>

        <div v-if="isWrongActivity" style="margin-bottom: 0.2rem; width: 80%; margin-left: 10%; text-align: center">
            <el-alert
                    title="The activity is empty"
                    type="error"
                    center="true"
                    show-icon
                    closable="false">
            </el-alert>
        </div>

        <div>
            <div style="margin-bottom: 0.51rem; width: 60%; margin-left: 20%">
                <el-input placeholder="Please input the activity"
                          v-model="activity" size="mini">
                </el-input>
            </div>
            <el-button type="primary" icon="el-icon-circle-plus-outline" circle
                       @click="addActivityMethod()"></el-button>
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
                'activities': 'getActivities'
            }),
            isWrongActivity() {
                return this.wrong
            }
        },
        methods: {
            ...mapActions(['addActivity', 'deleteActivity', 'changeActivityState']),
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
            },
            completeActivity(item) {
                this.changeActivityState({activity: item})
            }

        }
    }
</script>

<style>
    .main {
        text-align: center;
    }

</style>