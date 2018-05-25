<template>
  <div>
    <div>
      <el-checkbox v-model="checked">备选项</el-checkbox>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框A"></el-checkbox>
        <el-checkbox label="复选框B"></el-checkbox>
        <el-checkbox label="复选框C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="禁用且选中" disabled></el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox-group
        v-model="checkedCities1"
        :min="1"
        :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox-group v-model="checkboxGroup3" size="small" disabled>
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div style="margin-top: 20px;">
      <el-checkbox v-model="checked3" label="备选项3" border></el-checkbox>
      <el-checkbox v-model="checked4" label="备选项4" border></el-checkbox>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checked3: true,
      checked4: false,
      checkList: ['复选框A', '禁用且选中'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities1: ['上海', '深圳'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海']
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount == this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }

  }
}
</script>
<style>
</style>
