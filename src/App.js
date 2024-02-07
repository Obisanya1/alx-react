function Greetings () {
  return(
    <>
      <p>Temiloluwa is here</p><button>Click Me</button>
    </>
  )
}

const lists = ['Daniel', 'Temiloluwa', 'Micheal', 'Ifeoluwapipe', 'Allison', 'Eniola']

const ListItems = lists.map(list => {
  return (
    <li>{lists}</li>
  )
})

function UserProfileCard () {
  return (
    <div>
      <name>Daniel Obisanya</name><br/>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" height="100"/>
     
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greetings/>
      <UserProfileCard/>
    </div>
  );
};

export default App;
