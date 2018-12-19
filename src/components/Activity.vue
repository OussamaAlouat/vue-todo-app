<template>
    <div class="main">
        <h1>ToDo APP</h1>
        <div v-for="item in activities">
            <el-row style="margin-bottom: 0.51rem;" :class="getClass(item)">
                <el-col :span="8">
                    {{item.name}}
                </el-col>
                <el-col :span="8">
                    <el-button type="danger" icon="el-icon-delete" @click="removeActivity(item)" circle
                               size="small"></el-button>
                </el-col>
                <el-col :span="8">
                    <el-button type="success" icon="el-icon-check" circle @click="completeActivity(item)"
                               size="small"></el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-row style="width: 60%; margin-left: 40%; margin-bottom: 0.24rem;" >
                <el-col :span="3">
                    Completed :
                </el-col>
                <el-col :span="2">
                    {{completed}}
                </el-col>
                <el-col :span="3">
                    Total :
                </el-col>
                <el-col :span="2">
                    {{total}}
                </el-col>
            </el-row>
        </div>

        <div v-if="isWrongActivity" style="margin-bottom: 0.2rem; width: 80%; margin-left: 10%; text-align: center">
            <el-alert
                    title="The activity && the date are empty"
                    type="error"
                    :center="true"
                    show-icon
                    :closable="false">
            </el-alert>
        </div>

        <div>
            <el-row>
                <el-col :span="3">
                    Activity:
                </el-col>

                <el-col :span="8">
                    <el-input placeholder="Please input the activity"
                              v-model="activity" size="mini">
                    </el-input>
                </el-col>

                <el-col :span="3">
                    Date:
                </el-col>

                <el-col :span="8">
                    <el-input placeholder="Please input the date"
                              v-model="date" size="mini">
                    </el-input>
                </el-col>
            </el-row>

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
                wrong: false,
                date: ''
            }
        },
        computed: {
            ...mapGetters({
                'activities': 'getActivities'
            }),
            isWrongActivity() {
                return this.wrong
            },
            completed() {
                return this.activities.filter((val) => val.completed === true).length;
            },
            total() {
                return this.activities.length;
            }


        },
        methods: {
            ...mapActions(['addActivity', 'deleteActivity', 'changeActivityState']),
            addActivityMethod() {
                if (this.activity !== '' && this.date !== '') {
                    const activity = {
                        name: this.activity,
                        completed: false,
                        date: this.date
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
            },
            getClass(item) {
                return item.completed === true ? 'completed' : ''
            }

        }
    }
</script>

<style>
    .main {
        text-align: center;
    }

    .completed {
        background: rgba(0, 0, 0, 0.3);
    }

</style>