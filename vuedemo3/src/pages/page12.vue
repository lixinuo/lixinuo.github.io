<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button plain>plain</el-button>
      <el-button type="primary" plain>primary</el-button>
      <el-button type="success" plain>success</el-button>
      <el-button type="info" plain>info</el-button>
      <el-button type="warning" plain>warning</el-button>
      <el-button type="danger" plain>danger</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button round>round</el-button>
      <el-button type="primary" round>primary</el-button>
      <el-button type="success" round>success</el-button>
      <el-button type="info" plain round>info</el-button>
      <el-button type="warning" plain round>warning</el-button>
      <el-button type="danger" plain round>danger</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>primary</el-button>
      <el-button type="success" disabled>success</el-button>
      <el-button type="info" disabled>info</el-button>
      <el-button type="warning" disabled>warning</el-button>
      <el-button type="danger" disabled>danger</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>primary</el-button>
      <el-button type="success" plain disabled>success</el-button>
      <el-button type="info" plain disabled>info</el-button>
      <el-button type="warning" plain disabled>warning</el-button>
      <el-button type="danger" plain disabled>danger</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮  </el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button>默认按钮</el-button>
      <el-button size="medium">medium</el-button>
      <el-button size="small">small</el-button>
      <el-button size="mini">mini</el-button>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>medium</el-button>
      <el-button size="small" round>small</el-button>
      <el-button size="mini" round>mini</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
