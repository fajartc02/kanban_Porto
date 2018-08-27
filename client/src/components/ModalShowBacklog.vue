<template>
<div class="modal fade" id="modalDetailBacklog" tabindex="-1" role="dialog" aria-labelledby="modalDetailLabel" aria-hidden="true">
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
            <p>{{detailBacklog.description}}</p>
            <h6>Point: </h6>
            <p>{{detailBacklog.point}}</p>
            <h6>Status: </h6>
            <p>{{detailBacklog.status}}</p>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove(detailBacklog)">Delete</button>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-success" data-dismiss="modal" @click="moveToDo(detailBacklog)">To Do</button>
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
        moveToDo(task) {
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
    props: ['detailBacklog', 'indexId'],
    created() {
        // console.log(this.detailBacklog);
    },
}
</script>

<style>
.left-content {
    text-align: left!important
}
</style>
