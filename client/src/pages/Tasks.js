import React, { useContext } from 'react'
import ActionsTasksList from '../components/ActionsTasksList'
import AddTask from '../components/AddTask'
import TasksList from '../components/TasksList'
import { Context as TaskContext} from '../context/TaskContext'

const Tasks = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <section>
  
            {tasks.length !==0 ? <h4>Vos tâches du jour</h4> : <h4>Ajouter des tâches</h4>}
            <ActionsTasksList />
            <TasksList />
            <AddTask />
        </section>
    )
}

export default Tasks
