<template>
    <el-col :span="18" class="topic_temp">
        <el-form :model="event" status-icon label-width="100px" class="demo-ruleForm">
            <el-form-item label="主题">
                <el-input v-model="event.topic"></el-input>
            </el-form-item>
            <el-form-item label="类型" style="text-align: left">
                <el-select v-model="event.mold" placeholder="请选择">
                    <el-option
                        v-for="item in typeTopic"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容" style="height: 350px">
                <quill-editor
                    class="content"
                    ref="myTextEditor"
                    v-model="event.content">
                </quill-editor>
            </el-form-item>
            <el-form-item style="text-align: left">
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor';
    import { typeTopic } from '../../utils/misc';

    export default {
        name: "test",
        data() {
            return {
                event: {
                    topic: '',
                    mold: '',
                    content: '',
                },
                typeTopic: typeTopic,
            }
        },
        components: {
            quillEditor
        },
        methods: {
            submitForm(){
                console.log(this.event.content)
            }
        },
    }
</script>

<style scoped>
    .content {
        height: 250px;
    }
</style>
