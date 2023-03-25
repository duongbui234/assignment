import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center pt-[30px] md:pt-[60px] pb-[100px] md:pb-[130px]'>
      <h1 className='!text-primary text-lg !font-bold  md:text-2xl leading-[36px] mb-10'>
        404 Error.
      </h1>
      <div className='text-sm mb-[40px] md:mb-[60px]'>
        お探しのページが見つかりませんでした。
      </div>
      <Link
        className='hover:opacity-80 text-center w-[280px] py-[10px] bg-primary text-white rounded-full'
        href='/'
      >
        TOPへ
      </Link>
    </div>
  );
}
