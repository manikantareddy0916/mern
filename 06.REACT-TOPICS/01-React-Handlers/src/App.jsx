
function App() {

  const data = [
    {id:1, name: 'a', address: 'ijbj'},
    {id:13, name: 'a', address: 'ijbj'},
    {id:21, name: 'a', address: 'ijbj'},
    {id:1, name: 'a', address: 'ijbj'},
    {id:14, name: 'a', address: 'ijbj'},
    {id:14, name: 'a', address: 'ijbj'},
    ]

    //expensies total
    const exp = data.reduce((acc,cur)=>{
        return acc + cur.id
    },0)

  return (
    <>
    <h1>Hello this is the data</h1>
    <h2>Total length - {data.length}</h2>
    <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((ele,i)=>{
            return <tr key={i}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.address}</td>
            </tr>
          })
        }
      </tbody>
    </table>

        <h3>Total Expensies- {exp}</h3>

    </>
  )
}

export default App
