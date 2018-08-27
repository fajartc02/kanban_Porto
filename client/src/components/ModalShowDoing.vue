<template>
<div class="modal fade" id="modalDetailDoing" tabindex="-1" role="dialog" aria-labelledby="modalDetailLabel" aria-hidden="true">
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
            <p>{{detailShowDoing.description}}</p>
            <h6>Point: </h6>
            <p>{{detailShowDoing.point}}</p>
            <h6>Status: </h6>
            <p>{{detailShowDoing.status}}</p>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="prev(detailShowDoing)">Todo</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detailShowDoing)">Delete</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveDone(detailShowDoing)">Done</button>
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
        moveDone(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
            task.status = 'Done'
            this.updateTask(data)
        },
        prev(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
            task.status = 'Todo'
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
    props: ['detailShowDoing', 'indexId'],
    created() {

    },
}
</script>

<style>
.left-content {
    text-align: left!important
}
</style>
