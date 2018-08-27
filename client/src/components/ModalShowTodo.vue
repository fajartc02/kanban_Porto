<template>
<div class="modal fade" id="modalDetailTodo" tabindex="-1" role="dialog" aria-labelledby="modalDetailLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="modalDetailLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body left-content">
            <h6>Tesk Description: </h6>
            <p>{{detailShowTodo.description}}</p>
            <h6>Point: </h6>
            <p>{{detailShowTodo.point}}</p>
            <h6>Status: </h6>
            <p>{{detailShowTodo.status}}</p>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="prev(detailShowTodo)">Backlog</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detailShowTodo)">Delete</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveDoing(detailShowTodo)">Doing</button>
            </div>
        </div>
        <hr>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions([
            'updateTask',
            'removeTask'
        ]),
        moveDoing(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
            task.status = 'Doing'
            this.updateTask(data)
        },
        prev(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
            task.status = 'Backlog'
            this.updateTask(data)
        },
        remove(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
        }
    },
    props: ['detailShowTodo', 'indexId'],
    created() {
        // console.log(this.detailShowTodo);
    },
}
</script>

<style>
.left-content {
    text-align: left!important
}
</style>
