import Image from 'next/image';

interface DepartmentCardProps {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
}

export default function DepartmentCard({
  title,
  imageSrc,
  altText,
  description,
}: DepartmentCardProps) {
  return (
    <div className='flex flex-wrap justify-center items-center bg-blue-800 p-4 rounded-md text-white text-sm'>
      <div className='w-48 lg:w-56'>
        <Image src={imageSrc} alt={altText} width={224} height={250} />
        <h4 className='pt-4 pb-2 font-semibold text-base'>{title}</h4>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
}
