import Image from "next/image";


export default function Page() {
    return (
        <div className="p-4">
        <h1>Sad cat is sad because page not found</h1>
        <Image src="/images/sad-cat.jpg" width={500} height={500} alt="Sad cat" />
        </div> 
    )
}