<template>
<div class="modal fade" id="modalDetailDone" tabindex="-1" role="dialog" aria-labelledby="modalDetailLabel" aria-hidden="true">
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
            <p>{{detailShowDone.description}}</p>
            <h6>Point: </h6>
            <p>{{detailShowDone.point}}</p>
            <h6>Status: </h6>
            <p>{{detailShowDone.status}}</p>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="prev(detailShowDone)">Doing</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detailShowDone)">Delete</button>
            </div>
            <div class="col-md-4">
                <!-- <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveDone(detailShowDone)">Done</button> -->
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
        // moveDone(task) {
        //     let data = {
        //         task: task,
        //         id: this.indexId
        //     }
        //     this.removeTask(data)
        //     task.status = 'Done'
        //     this.updateTask(data)
        // },
        prev(task) {
            let data = {
                task: task,
                id: this.indexId
            }
            this.removeTask(data)
            task.status = 'Doing'
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
    props: ['detailShowDone', 'indexId'],
    created() {

    },
}
</script>

<style>
.left-content {
    text-align: left!important
}
</style>
