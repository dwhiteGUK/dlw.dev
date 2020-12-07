import { Ahref, ArrowRightIcon } from '~/components';

const ReadMoreLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Ahref to={to}>
      <span className="inline-flex items-center justify-center py-3 border-transparent text-base leading-6 font-medium transition duration-150 ease-in-out text-orange-500 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer">
        {text}
        <ArrowRightIcon className="ml-2 w-6 h-6" />
      </span>
    </Ahref>
  );
};

export default ReadMoreLink;
