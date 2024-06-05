import uuid from 'react-uuid'
export default {
  columns:
    {
      [uuid()]: {
        status: 'backlog',
        name: 'Беклог',
        icon: 'pin',
        cards: [
          {
            id: uuid(),
            status: 'backlog',
            hash: '#20413',
            nameCard: 'Интерфейс динамики кадров на предприятии'
          },
          {
            id: uuid(),
            status: 'backlog',
            hash: '#20413',
            nameCard: 'Ежемесячный отчёт для куратора'
          },
          {
            id: uuid(),
            status: 'backlog',
            hash: '#20413',
            nameCard: 'Статистика по заявкам'
          },
        ]
      },
      [uuid()]: {
        status: 'work',
        name: 'В работе',
        icon: 'play',
        cards: [
          {
            id: uuid(),
            status: 'work',
            hash: '#20413',
            nameCard: 'Заявки сгруппировать по заявкам'
          },
          {
            id: uuid(),
            status: 'work',
            hash: '#20413',
            nameCard: 'Ограничения по безопасности'
          },
        ]
      },
      [uuid()]: {
        status: 'done',
        name: 'Выполнена',
        icon: 'check',
        cards: [
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Проживание: новое поле для тех кто работает'
          },
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Рейтинг мастеров в интерфейсе мереджера'
          },
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Перенос данных в конце месяца'
          },
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Доработки по интерфейсу «Плана»'
          },
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Подвешенная заявка'
          },
          {
            id: uuid(),
            status: 'done',
            hash: '#20413',
            nameCard: 'Интерфейс динамики кадров на предприятии'
          },
        ]
      },
      [uuid()]: {
        status: 'finish',
        name: 'Сдана',
        icon: 'finish',
        cards: [
          {
            id: uuid(),
            status: 'finish',
            hash: '#20413',
            nameCard: 'Временной промежуток при фильтрации'
          },
          {
            id: uuid(),
            status: 'finish',
            hash: '#20413',
            nameCard: 'Статистика по икочникам звонка'
          },
          {
            id: uuid(),
            status: 'finish',
            hash: '#20413',
            nameCard: 'Добавить график к статистике пользователей (количества регистраций)'
          },
          {
            id: uuid(),
            status: 'finish',
            hash: '#20413',
            nameCard: 'Создать тестовую сборку сервиса ( для обработки нововведений )'
          }
        ]
      }
    }
}
