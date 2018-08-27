<template>
<div class="modal fade" id="inputModal" tabindex="-1" role="dialog" aria-labelledby="inputModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="inputModalLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
            <div class="form-group left-content">
                <label class="col-form-label">Title:</label>
                <input type="text" v-model="title" class="form-control" placeholder="Task Title">
            </div>
            <div class="form-group left-content">
                <label class="col-form-label">Description:</label>
                <textarea class="form-control" v-model="description" placeholder="Description Title"></textarea>
            </div>
            <div class="form-group left-content">
                <label class="col-form-label">Point:</label>
                <input type="text" class="form-control" v-model="point" placeholder="0">
            </div>
            <div class="form-group left-content">
                <label class="col-form-label">Assigned To:</label>
                <input type="text" class="form-control" v-model="assignedTo" placeholder="Assined To">
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
            <button type="button" class="btn btn-primary" @click="inputTask" data-dismiss="modal">Save</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex' 

export default {
    data() {
        return {
            title: '',
            description: '',
            point: '',
            assignedTo: '',
            status: 'Backlog'
        }
    },
    methods: {
        ...mapActions([
            'addTask',
            'getTasks'
        ]),
        inputTask() {
            let data = {
                status: this.status,
                title: this.title,
                description: this.description,
                point: this.point,
                assignedTo: this.assignedTo
            }
            this.addTask(data)
        },
    },
    created() {
        // this.getTasks()
    },
}
</script>

<style>
.left-content {
    text-align: left!important
}
</style>
