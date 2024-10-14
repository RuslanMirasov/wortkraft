import { useEffect, useState } from 'react';
import { Title } from '../../components';
import css from './StatisticTable.module.scss';

const StatisticTable = ({ progress = [], books }) => {
  const [statistic, setStatistic] = useState([]);
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  useEffect(() => {
    const newStatistic = levels.map(level => {
      // Сумма слов для уровня
      const levelSum = books.reduce((acc, book) => {
        if (book.level.startsWith(level)) {
          return acc + book.words_count;
        }
        return acc;
      }, 0);

      // Подсчёт "done"
      const done = progress.reduce((acc, item) => {
        const matchingBook = books.find(book => book.slug === item.book);
        if (matchingBook && matchingBook.level.startsWith(level) && item.points === 5) {
          return acc + 1;
        }
        return acc;
      }, 0);

      // Подсчёт "inprocess"
      const inprocess = progress.reduce((acc, item) => {
        const matchingBook = books.find(book => book.slug === item.book);
        if (matchingBook && matchingBook.level.startsWith(level)) {
          return acc + 1;
        }
        return acc;
      }, 0);

      // Вычисление процентов для done и inprocess относительно levelSum
      const donePercentage = levelSum > 0 ? (done / levelSum) * 100 : 0;
      const inprocessPercentage = levelSum > 0 ? (inprocess / levelSum) * 100 : 0;

      // Создаём объект для статистики с процентами
      return {
        level,
        words: levelSum,
        done: donePercentage.toFixed(2), // Округляем до двух знаков после запятой
        inprocess: inprocessPercentage.toFixed(2), // Округляем до двух знаков
      };
    });

    // Обновляем стейт
    setStatistic(newStatistic);
  }, [books, progress]);

  return (
    <div className={css.StatisticTable}>
      <Title tag="h2" size="h5">
        {`Meine\n Deutschkenntnisse`}
      </Title>
      <ul className={css.Table}>
        {statistic.map((statisticItem, index) => {
          return (
            <li key={index}>
              <span className={css.Label}>{statisticItem.level}</span>
              <span className={css.RangeProcess} style={{ width: `${statisticItem.inprocess}%` }}></span>
              <span className={css.RangeDone} style={{ width: `${statisticItem.done}%` }}></span>
            </li>
          );
        })}
        <li data-line="100"></li>
        <li data-line="60"></li>
        <li data-line="20"></li>
      </ul>
      <ul className={css.ProcentRange}>
        <li>
          <span>0</span>
        </li>
        <li>
          <span>20</span>
        </li>
        <li>
          <span>40</span>
        </li>
        <li>
          <span>60</span>
        </li>
        <li>
          <span>80</span>
        </li>
        <li>
          <span>100</span>
        </li>
      </ul>
      <div className={css.Footer}>
        <p>Fertig</p>
        <p>Im Prozess</p>
      </div>
    </div>
  );
};

export default StatisticTable;
