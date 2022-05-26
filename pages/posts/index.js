import Link from 'next/link'

export const getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return{
        props: {
            data,
        }
    };
};

const index = ({data}) => {

  return (
    <div className="mt-[4rem]">
        {data.slice(0,5).map((currElem) =>{
            return(
            <div key={currElem.id} className='w-[50%] mt-4 mx-auto bg-slate-100 p-4 font-medium text-[#103c8e] text-lg rounded-md flex'>
                <h3 className="mr-4">{currElem.id}</h3>
                <Link href={`/posts/${currElem.id}`}>
                    <h2 className='cursor-pointer hover:text-[#2873ea]'>{currElem.title}</h2>
                </Link>
            </div>
            )
        })}
    </div>
  )
}

export default index


// api = https://jsonplaceholder.typicode.com/posts