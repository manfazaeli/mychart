
import Image from "next/image"
const Loading=()=>{
    return(
        <Image className=" text-center py-20 mx-auto" src={'/images/loading.svg' } alt="loading ..." width={50} height={50}></Image>
    )
}
export default Loading;