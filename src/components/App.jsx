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
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.goods.map((good) => (
                <p>{good.name} - {good.quantity} - {good.destination}</p>
              ))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App