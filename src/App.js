import React from 'react';
import CreatePost from './component/createPost/CreatePost';
import Post from './component/post/post';
import './component/post/post.css';
import {pData} from "./component/post/post_data";
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <>
        <div>
          <CreatePost />
        </div>
        <div>
          { pData.map(post => <Post {...post} /> )}
        </div>
      </>
    </Provider>
  );
}

export default App;

/*
Завдання Basic:
1. Створіть store та в ньому збережіть кілька публікацій з фейковими даними як на фото нижче. (автор, зображення автора,
   нікнейм автора, дата публікації, текст публікації, зображення публікації, кількість лайків, кількість коментарів,
   кількість перепостів).
2. Створіть форму в яку можна ввести такі дані: текст публікації, посилання на зображення і вибір автора
   з випадаючого списку (його так само необхідно завчасно підготувати у вигляді фейкових даних). Кнопка "Додати".
3. При додаванні даних в форму і натисканні на кнопку "Додати" – дані відправляються в store (dispatch).

Завдання Advanced:
Зробіть клікабельними кнопки: лайки/коментарі/поділитися.
При кожному натисканні необхідно збільшувати цифру на 1.
При кожному повторному натисканні необхідно зменшувати цифру на 1.
 */