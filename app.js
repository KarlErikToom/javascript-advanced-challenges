/*async function postsByUser(userId){
 const promise = await fetch ("https://jsonplaceholder.typicode.com/posts")
const result = await promise.json()

const posts = result.filter(elem => elem.userId === userId)
console.log(posts)
}

postsByUser(4)*/

async function firstSixIncomplete(toDo) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)
  console.log(incompleteTasks)
}

firstSixIncomplete(2);
