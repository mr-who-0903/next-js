export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((currElem) => {

        return{
            params: {
                pageNo: currElem.id.toString()
            }
        }
    });

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) =>{

    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return{
        props: {
            data,
        }
    };
};

const post = ({data}) => {
  return (
    <div key={data.id} className='w-[50%] mt-4 mx-auto bg-slate-100 p-4 font-medium text-[#103c8e] text-lg rounded-md '>
        <div className="flex">
            <h3 className="mr-4">{data.id}</h3>
            <h2 className='cursor-pointer'>{data.title}</h2>
        </div>
        <br/>
        <p className="text-black">{data.body}</p>   
    </div>
  )
}

export default post