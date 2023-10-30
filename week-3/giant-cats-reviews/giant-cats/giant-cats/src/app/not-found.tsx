import Image from 'next/image'


export default function Page({ params }: { params: { slug: string } }) {
    return (
        <Image src="/images/sad-cat.jpg" width={500} height={500} alt="sad cat" />
    );
  }