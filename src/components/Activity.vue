<template>
  <div class="main container">
    <h1>ToDo APP</h1>
    <div v-if="isEmpty">
      <el-alert
        title="There are not activities at this moment"
        type="info"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
      </div>
      <div v-else>
        <el-table
          :data="activities"
          :row-class-name="tableRowColor">
          <el-table-column
            prop="name"
            label="Name">
          </el-table-column>
          <el-table-column
            label="Date">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{getDate(scope.row.date)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Remove">
            <template slot-scope="scope">
              <el-button type="danger"
                icon="el-icon-delete"
                @click="removeActivity(scope.row)" 
                circle
                size="small">
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="Check">
            <template slot-scope="scope">
              <el-button
                type="success"
                icon="el-icon-check"
                circle @click="completeActivity(scope.row)"
                size="small">
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
      <el-row type="flex" justify="center" class="counterSection">
        <el-col :span="4">
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
    <div v-if="isWrongActivity" class="wrongNotification">
      <el-alert
        :title="errorMessage"
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
          <el-input 
            placeholder="Please input the activity"
            v-model="activity" 
            size="mini">
          </el-input>
        </el-col>
        <el-col :span="3">
          Date:
        </el-col>
        <el-col :span="8">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
        </el-col>
      </el-row>
      <el-button 
        type="primary"
        icon="el-icon-circle-plus-outline"
        circle
        @click="addActivityMethod()">
      </el-button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import moment from 'moment'
  import uuid from 'uuid/v4'
  export default {
    name: 'Activity',
    data() {
      return {
        activity: '',
        wrong: false,
        date: '',
        errorMessage: ''
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
      },
      isEmpty() {
        return this.activities.length === 0;
      }
    },
    methods: {
      ...mapActions(['addActivity', 'deleteActivity', 'changeActivityState']),
      addActivityMethod() {
        if (this.validateData() === true) {
          const activity = {
            name: this.activity,
            completed: false,
            date: this.date,
            id: uuid()
          };

          this.addActivity({activity});
          this.activity = '';
          this.date = '';
          this.wrong = false;
        } else {
          this.wrong = true;
          this.setMessageError();
        }
      },

      removeActivity(item) {
        this.deleteActivity({activity: item})
      },

      completeActivity(item) {
        this.changeActivityState({activity: item})
      },
      tableRowColor({row, rowIndex}) {
        if (row.completed === true) {
          return 'success-row';
        } else {
          return 'warning-row'
        }

        return '';
      },
      validateData() {
        if (this.activity !== '' && this.date !== '') {
          return true;
        } else {
          return false;
        }
      },

      setMessageError() {
        if (this.activity === '' && this.date === '') {
          this.errorMessage = 'The activity && the date are empty';
        } else {
          if (this.activity === '') {
            this.errorMessage = 'The activity is empty';
          } else {
            this.errorMessage = 'The date is empty';
          }
        }
      },

      getDate (item) {
        return moment(item).format('DD/MM/YYYY')
      }
    }
  }
</script>

<style>
.main {
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 10px;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center
}

div.cell {
  text-align: center;
}

.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>