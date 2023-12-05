import Link from "next/link";

const Footer = () => {
  return (
    <footer >
      <div className="  bg-[#176B87] h-[200px]  shadow-xl flex flex-row  justify-between items-center  ">
        <div>
          <h1 className=" text-sm text-zinc-300 p4 m-5 font-[nazanin]">   <Link href={'https://tabriz.iau.ir'} target="_blank">دانشگاه آزاد اسلامی واحد تبریز</Link></h1>
          <h1 className=" text-sm text-zinc-300 p4 m-5 font-[nazanin]">   <Link href={'https://iau.ir'} target="_blank">سازمان مرکزی دانشگاه آزاد اسلامی </Link></h1>
       
       
        </div>
      </div>

      <h1 className=" bg-zinc-500 text-white text-center py-2">کلیه حقوق این سایت متعلق به دانشگاه آزاد اسلامی واحد تبریز می باشد. </h1>
      

    </footer>
  );
}

export default Footer;