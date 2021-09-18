import mockOrders from '../mock-data/mock-orders-1.json'

console.log(mockOrders)

const App = () => {
  return (
    <div id="app">
      <h1 className="text-center">Метида CRM</h1>
      <h2 className="text-center">Заказы</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Номер</th>
            <th>Статус</th>
            <th>Товары</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order, index) => (
            <tr key={order.id}>
              <th>{index + 1}</th>
              <th>{order.id}</th>
              <td>{order.status}</td>
              <td>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Имя</th>
                      <th>Количество</th>
                      <th>Пункт доставки</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.goods.map((good, index) => (
                      <tr key={index}>
                        <th>{good.name}</th>
                        <td>{good.quantity}</td>
                        <td>{good.destination}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App