type Props = {
  title: string;
  Icon: any;
};

export default function HeaderItem({ Icon, title }: Props) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-black">
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}
