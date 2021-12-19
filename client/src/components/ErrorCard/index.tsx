import Exclamation from '../../assets/images/exclamation.png';

const ErrorCard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="text-center">
        <div className="max-w-xs mx-auto px-16">
          <img src={Exclamation} />
        </div>
        <h2 className="mt-8 uppercase text-xl font-black">
          We're sorry, but something went wrong.
        </h2>
        <p className="mt-6 text-sm text-gray-900">
          If you are the application owner check the logs for more information.
        </p>
      </section>
    </div>
  );
};

export default ErrorCard;
