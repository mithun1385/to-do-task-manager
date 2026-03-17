const cds = require('@sap/cds')
const { INSERT, UPDATE, DELETE } = require('@sap/cds/lib/ql/cds-ql')

module.exports = class TodotaskHandler extends cds.ApplicationService {

    init() {

        const { todotask } = this.entities

        // ✅ CREATE
        this.on('create', async (req) => {

            const { title, status } = req.data

            const newTask = {
                ID: cds.utils.uuid(),
                title,
                status
            }

            await INSERT.into(todotask).entries(newTask)

            req.notify('Task created')

            return newTask
        })

        // ✅ COMPLETE TASK (MOVE HERE)
        // this.on('completeTask', async (req) => {

        //     const { ID } = req.data

        //     console.log("ID:", ID)   // 🔍 debug

        //     await UPDATE(todotask)
        //         .set({ status: 'Completed' })
        //         .where({ ID })

        //     req.notify('Task completed')

        //     return { ID }
        // })
        this.on('completeTask',todotask,async(req)=>{

           const ID=req.params[0].ID;
           const { status}=req.data;
           console.log(ID);
           console.log(status);

           await UPDATE(todotask)
            .set( {status})
            .where({ID})
            req.notify("status is updated") 
        })

        this.on('deleteTask', async (req) => {
            const {ID} = req.data
            console.log(ID);


            await DELETE.from(todotask)
                .where({ ID })

            req.notify("task is deleted ")

            return { ID }
        })


        return super.init()
    }
}