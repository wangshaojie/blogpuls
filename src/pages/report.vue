<template>

  <div class="">
    <div class="row">
        <div class="col-md-3">
          
        </div>

        <div class="col-md-9">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="内容">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm($event)">提交</el-button>
              <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
  </div>
    

</template>
<style lang="scss" scoped="" type="text/css">
  @import '../assets/sass/report.scss';
</style>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          date: '',
          desc: ''
        }
      }
    },
    methods: {
      submitForm(event) {
        var that = this;
        event.preventDefault();
        let formData = new FormData();
        formData.append('title', that.form.name);
        formData.append('date', that.form.date);
        formData.append('desc', that.form.desc);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        } 
        that.axios.post('/api/addarticle', formData).then(function (response) {
          console.log(response)
            if(response.status == 1){
              //window.location.href="/list";
            }

        })
        

      }
    }
  }
</script>
