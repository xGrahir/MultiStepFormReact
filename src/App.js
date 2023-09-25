import { MainPage } from "./Pages/MainPage";

function App() {

  const data = [
    {id:12, name: "lol"},
    {id:9, name: 'lol2'},
    {id:30, name: 'lol3'}
  ]

  const sorting = data.sort((objA, objB) => {
    if(objA.id > objB.id) {
      return -1
    }
  })

  console.log(sorting);

  const data2 = data.map(obj => obj)

  const reversed = data2.sort((objA, objB) => {
    if(objA.id < objB.id) {
      return -1
    }
  })
  
  console.log(reversed);

  return (
    <MainPage />
  );
}

export default App;
