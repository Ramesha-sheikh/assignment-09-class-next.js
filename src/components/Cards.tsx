import Image from 'next/image';

export default function SectionOne() {
  return (
    <div className="w-full bg-white pt-12">
      <div className="w-10/12 mx-auto flex flex-wrap gap-6 justify-around mt-36">
        {/* Card 1 */}
        <div
          className="w-[450] sm:w-full md:w-[48%] lg:w-[30%] h-[300px] relative rounded-lg overflow-hidden"
          style={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 1)' }}
        >
          <Image
            src="/s3.jpg"
            alt="Description of the image"
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Card 2 */}
        <div
          className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[300px] relative rounded-lg overflow-hidden"
          style={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 1)' }}
        >
          <Image
            src="/s2.jpg"
            alt="Description of the image"
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Card 3 */}
        <div
          className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[300px] relative rounded-lg overflow-hidden"
          style={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 5)' }}
        >
          <Image
            src="/s1.jpg"
            alt="Description of the image"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
