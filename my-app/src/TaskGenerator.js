import React, { useState } from 'react';
import tasks from './task';
import FancyText from './FancyText';


const TaskGenerator = () => {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [currentTask, setCurrentTask] = useState(tasks[0]);

    const nextTask = () => {
        const nextIndex = (currentTaskIndex + 1) % tasks.length;
        setCurrentTaskIndex(nextIndex);
        setCurrentTask(tasks[nextIndex]);
    };

    const markTaskCompleted = () => {
        tasks[currentTaskIndex].isCompleted = true;
        setCurrentTask({ ...tasks[currentTaskIndex] });
    };

    const motivation = [
        "Your off to a great start!",
        "You can do it!",
        "Your almost done!",
    ];

    return (
        <div>
            <h3><FancyText title text={`Task ${currentTask.id}`} /></h3>
            <img src={currentTask.image} alt={currentTask.name} />
            <FancyText title text={`Task ${currentTask.name}`} />
            <FancyText text={`Status: ${currentTask.isCompleted ? 'Completed ✔' : 'Pending'}`} />
            <button onClick={markTaskCompleted}>Mark as Completed</button>
            <button onClick={nextTask}>Next Task</button>
            <FancyText text={motivation[currentTaskIndex % motivation.length]} />
        </div>
    );
};

export default TaskGenerator;