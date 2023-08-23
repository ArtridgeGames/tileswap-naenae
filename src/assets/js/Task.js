import { useStore } from '../../store/store';
import { Layout } from './Layout';
const TASK_TARGET_NAMES = {
  FREEPLAY: 'freeplay layout',
  PUZZLE: 'puzzle',
  CHALLENGE: 'challenge'
}

export class Task {
  static TASK_TYPES = {
    FREEPLAY: 'FREEPLAY',
    PUZZLE: 'PUZZLE',
    CHALLENGE: 'CHALLENGE',
  }

  static TASKS = [
    new Task({
      timesRequired: 2,
      targetId: [1],
      type: Task.TASK_TYPES.FREEPLAY,
      difficulty: 16
    }),
    new Task({
      timesRequired: 1,
      targetId: [2],
      type: Task.TASK_TYPES.PUZZLE,
      difficulty: 2
    }),
    new Task({
      timesRequired: 1,
      targetId: [1],
      type: Task.TASK_TYPES.CHALLENGE,
      difficulty: 2
    }),
    new Task({
      timesRequired: 1,
      targetId: [1],
      type: Task.TASK_TYPES.CHALLENGE
    })
  ].map((e, id) => {
    e.id = id;
    return e;
  });

  constructor({ timesRequired, targetId, type, difficulty }) {
    this.timesRequired = timesRequired;
    this.targetIds = targetId;
    this.type = type;
    this.targetsDone = [];
    this.id = -1;
    this.difficulty = difficulty ?? -1;
  }

  get completed() {
    return this.targetsDone.length >= this.timesRequired * this.targetIds.length;
  }

  get progress() {
    return {
      text: `${this.targetsDone.length}/${(this.timesRequired * this.targetIds.length)}`,
      value: this.targetsDone.length / (this.timesRequired * this.targetIds.length)
    };
  }

  get text() {
    return `Complete the ${this.targetIds.length > 1 ? this.targetIds.length : ''} 
            highlighted ${TASK_TARGET_NAMES[this.type]}
            ${this.targetIds.length > 1 ? 's' : ''} 
            ${this.timesRequired} time${this.timesRequired > 1 ? 's' : ''} 
            ${(this.timesRequired > 1 && this.targetIds.length > 1) ? 'each' : ''} 
            ${this.difficulty != -1 ? (this.difficultyText()): ''}`
  }

  claim() {
    const { currentTasks, setTask, maxTask, setMaxTask } = useStore();
    const storeId = currentTasks.indexOf(this.id);
    setMaxTask(maxTask + 1);
    const nextTask = maxTask < (Task.TASKS.length - 1) ? maxTask + 1 : -1;
    setTask(storeId, nextTask);
  }

  difficultyText() {
    if (this.type !== Task.TASK_TYPES.FREEPLAY) {
      return `in less than ${this.difficulty} ${(this.type === Task.TASK_TYPES.PUZZLE?'moves':'seconds')}`;
    }
    const layout = Layout.LAYOUTS.filter(e => e.id === this.targetIds[0])[0];
    const difficulties = ['very easy', 'easy', 'normal','hard', 'very hard']
    const max = (layout.width * layout.height - layout.exclude.length)
    const diff = difficulties[Math.floor((this.difficulty - 1) / (max / difficulties.length))]
    return `in ${diff} mode`;
  }

  static isTaskTarget(id, type) {
    const { currentTasks } = useStore();
    return currentTasks
      .filter(index => index !== -1)
      .filter(e => Task.TASKS[e].type === type)
      .some(index => {
        const task = Task.TASKS[index];
        if (!task.targetIds.includes(id)) return false;
        return task.targetsDone.reduce((acc, cur) => acc + (cur === id ? 1 : 0), 0) < task.timesRequired;
      });
  }

  static advanceTasks(id, type, difficulty) {
    const { currentTasks } = useStore();
    currentTasks
      .filter(index => index !== -1)
      .filter(index => Task.TASKS[index].type === type)
      .filter(index => Task.TASKS[index].targetIds.includes(id))
      .filter(index => 
        (type === Task.TASK_TYPES.FREEPLAY?
        Task.TASKS[index].difficulty <= difficulty:
        Task.TASKS[index].difficulty >= difficulty))
      .filter(index => {
        const task = Task.TASKS[index];
        return task.targetsDone.reduce((acc, cur) => acc + (cur === id ? 1 : 0), 0) < task.timesRequired;
      })
      .forEach(index => {
        const task = Task.TASKS[index];
        task.targetsDone.push(id);
      });
  }
}