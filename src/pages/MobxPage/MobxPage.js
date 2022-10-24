import s from './MobxPage.module.css';
import counter from 'mobx/store/counter';
import todo from 'mobx/store/todo';
import { observer } from 'mobx-react-lite';
const MobxPage = observer(() => {
  console.log('counter.count: ', counter.count);

  const elements = todo.todos.map(el => (
    <li key={el.id}>
      <label>
        <input
          type="checkbox"
          value={el.completed}
          checked={el.completed}
          onChange={() => todo.completeTodo(el.id)}
        />
        {el.title}
      </label>
      <button type="button" onClick={() => todo.removeTodo(el.id)}>
        Удалить
      </button>
    </li>
  ));
  return (
    <main>
      <h3 className={s.title}>Welcome </h3>
      <div className={s.title}>
        <button onClick={() => counter.inc()}>+</button>
        <span>{'Сумма =' + counter.count}</span>
        <button onClick={() => counter.dec()}>-</button>
      </div>
      <div className={s.title}>
        {elements}
        {counter.total}
      </div>
      <button type="button" onClick={() => todo.fetchTodos()}>
        Запрос
      </button>
    </main>
  );
});

export default MobxPage;
