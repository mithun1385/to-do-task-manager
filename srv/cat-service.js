const cds = require('@sap/cds')
const { INSERT, UPDATE } = require('@sap/cds/lib/ql/cds-ql')

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
        this.on('completeTask', async (req) => {

            const { ID } = req.data

            console.log("ID:", ID)   // 🔍 debug

            await UPDATE(todotask)
                .set({ status: 'Completed' })
                .where({ ID })

            req.notify('Task completed')

            return { ID }
        })

        return super.init()
    }
}