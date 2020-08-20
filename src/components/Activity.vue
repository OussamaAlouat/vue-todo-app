<template>
  <div>
    <div v-if="!isEmpty">
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
                @click="openModal(scope.row)"
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
        date: '',
      }
    },
    computed: {
      ...mapGetters({
        'activities': 'getActivities'
      }),
      isEmpty() {
        return this.activities.length === 0;
      }
    },
    methods: {
      ...mapActions(['addActivity', 'deleteActivity', 'changeActivityState', 'setErrorMessageAction']),
      addActivityMethod() {
        if (this.validateData() === true) {
          const activity = {
            name: this.activity,
            completed: false,
            date: this.date,
            id: uuid()
          };
          this.setErrorMessageAction({message: ''});

          this.addActivity({activity});
          this.activity = '';
          this.date = '';

        } else {
          this.setMessageError();
        }
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
        let error = '';
        if (this.activity === '' && this.date === '') {
          error = 'The activity && the date are empty';

        } else {
          if (this.activity === '') {
            error = 'The activity is empty';
          } else {
            error = 'The date is empty';
          }
        }

        this.setErrorMessageAction({message: error});
      },

      getDate (item) {
        return moment(item).format('DD/MM/YYYY')
      },

      openModal(item) {
        const message = `This will permanently delete the activity ${item.name}. Continue?`;
        this.$confirm(message, 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.deleteActivity({activity: item})
            .then(() => {
              this.$message({
                type: 'success',
                message: 'Delete completed'
              });
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
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