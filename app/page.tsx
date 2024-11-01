// import Link from "next/link";
// import ProductCard from "@/app/components/ProductCard/ProductCard";
// import {getServerSession} from "next-auth";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import croissant from "@/public/images/croissant.png";

// export default async function Home() {
//     // We can use this in our pages as well as our route handlers
//     const session = await getServerSession(authOptions);
//     return (
//         <main>
//             <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//             <Link href={"/users"}>Users</Link>
//             <ProductCard/>
//         </main>
//     );
// }

export default async function Home() {
    return (
        <main>
            <Image
                src={croissant}
                alt="Croissant"
            />
        </main>
    )
}
