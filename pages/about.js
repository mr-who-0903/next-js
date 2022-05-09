import People from "../components/People"

const about = () => {

  const myPeople = {name:"raman", age:21, branch: "Computer Science"}

  return (
    <div>
      <p className="text-center text-2xl mt-[4rem]">Welcome to About page</p>
      <People details={myPeople} />
    </div>
  )
}

export default about