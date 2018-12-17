<template>
    <div class="main">
        <h1>ToDo APP</h1>

        <div  v-for="item in activities"  >
            <el-row style="margin-bottom: 0.51rem;">
                <el-col :span="12">
                    {{item.name}}
                </el-col>
                <el-col :span="12">
                    <el-button type="danger" icon="el-icon-delete" @click="removeActivity(item)" circle></el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <div >
                <el-input placeholder="Please input" v-model="activity" size="mini"></el-input>
            </div>

            <el-button type="primary" icon="el-icon-circle-plus-outline" circle @click="addActivityMethod()"></el-button>
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
                'activities': 'getActivities'
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

<style>
    .main{
        text-align: center;
    }

</style>