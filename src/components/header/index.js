import Image from "next/image";
import Link from "next/link";
const Header = () => {
    const  handleLogout = async  () => {
       
        const res = await fetch("/api/auth/logout", {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        res.status === 200 ? (window.location='/login'):''
     //   console.log(res.status);
      };
    return (
    <header className="   bg-[#22668D]  shadow-xl flex flex-row p-2 text-[#FFCC70]">

        <Link prefetch={false}  className="    px-2 py-1 rounded shadow hover:bg-green-300 hover:text-black text-center" href={'/home'}> استان در یک نگاه </Link>
        <Link prefetch={false}  className=" px-2 py-1 rounded shadow hover:bg-green-300 hover:text-black text-center" href={'/home/mojavez-adampardakht'}> مجوز عدم پرداخت </Link>
        <Link prefetch={false}  className=" px-2 py-1 rounded shadow hover:bg-green-300 hover:text-black text-center" href={'/home/sabt-name'}> آمار انتخاب واحد</Link>
        <Link prefetch={false}  className=" px-2 py-1 rounded shadow hover:bg-green-300 hover:text-black text-center" href={'/home/vosol-motalebat'}> وصول مطالبات </Link>
        <button  className=" px-2 py-1 rounded shadow hover:bg-green-300 hover:text-black" onClick={handleLogout}>  خروج </button>
     
    </header>
    );
}

export default Header;